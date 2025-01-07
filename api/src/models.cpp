#include <grpcpp/grpcpp.h>
#include <regex>
#include <fstream>
#include <filesystem>
#include <grpcpp/ext/proto_server_reflection_plugin.h>
#include "models.grpc.pb.h"

using grpc::Server;
using grpc::ServerBuilder;
using grpc::ServerContext;
using grpc::Status;
namespace fs = std::filesystem;

class ModelsServiceImpl final : public spike_x::ModelsService::Service {
private:
    std::vector<spike_x::Model> readCppModels(const std::string& filepath) {
        std::vector<spike_x::Model> models;
        std::ifstream file(filepath);

        if (!file.is_open()) {
            std::cerr << "Warning: " << filepath << " not found" << std::endl;
            return models;
        }

        std::string content((std::istreambuf_iterator<char>(file)),
                            std::istreambuf_iterator<char>());

        std::regex pattern("\\{\\s*\"([^\"]+)\",\\s*\"([^\"]+)\"\\s*\\}");
        std::smatch match;
        std::string::const_iterator searchStart(content.cbegin());

        while (std::regex_search(searchStart, content.cend(), match, pattern)) {
            spike_x::Model model;
            model.set_id(match[1].str());
            model.set_name(match[2].str());
            models.push_back(model);
            searchStart = match.suffix().first;
        }

        return models;
    }

    std::vector<spike_x::Model> getModels(const std::string& category) {
        // Updated basePath to match the correct file structure
        auto basePath = fs::current_path().parent_path().parent_path() / "lib/core";
        auto filepath = basePath / category / "models.hpp";
        return readCppModels(filepath.string());
    }

public:
    Status GetNeuronModels(ServerContext* context,
                           const spike_x::ModelsRequest* request,
                           spike_x::ModelsResponse* response) override {
        auto models = getModels("neurons");
        for (const auto& model : models) {
            *response->add_models() = model;
        }
        return Status::OK;
    }

    Status GetSynapseModels(ServerContext* context,
                            const spike_x::ModelsRequest* request,
                            spike_x::ModelsResponse* response) override {
        auto models = getModels("synapses");
        for (const auto& model : models) {
            *response->add_models() = model;
        }
        return Status::OK;
    }

    Status GetAxonModels(ServerContext* context,
                         const spike_x::ModelsRequest* request,
                         spike_x::ModelsResponse* response) override {
        auto models = getModels("axons");
        for (const auto& model : models) {
            *response->add_models() = model;
        }
        return Status::OK;
    }

    Status GetDendriteModels(ServerContext* context,
                             const spike_x::ModelsRequest* request,
                             spike_x::ModelsResponse* response) override {
        auto models = getModels("dendrites");
        for (const auto& model : models) {
            *response->add_models() = model;
        }
        return Status::OK;
    }
};

int main() {
    std::string server_address("0.0.0.0:5173");
    ModelsServiceImpl service;

    grpc::reflection::InitProtoReflectionServerBuilderPlugin();

    ServerBuilder builder;
    builder.AddListeningPort(server_address, grpc::InsecureServerCredentials());
    builder.AddChannelArgument(GRPC_ARG_KEEPALIVE_TIME_MS, 7200000);
    builder.AddChannelArgument(GRPC_ARG_KEEPALIVE_TIMEOUT_MS, 20000);
    builder.AddChannelArgument(GRPC_ARG_KEEPALIVE_PERMIT_WITHOUT_CALLS, 1);
    builder.RegisterService(&service);

    std::unique_ptr<Server> server(builder.BuildAndStart());
    std::cout << "Server listening on " << server_address << std::endl;

    server->Wait();
    return 0;
}
