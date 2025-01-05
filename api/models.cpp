// api/models.cpp

#include <drogon/drogon.h>
#include <regex>
#include <fstream>
#include <filesystem>

using namespace drogon;
namespace fs = std::filesystem;

class ModelsController : public HttpController<ModelsController> {
public:
    METHOD_LIST_BEGIN
    ADD_METHOD_TO(ModelsController::getNeuronModels, "/api/models/neurons", Get);
    ADD_METHOD_TO(ModelsController::getSynapseModels, "/api/models/synapses", Get);
    ADD_METHOD_TO(ModelsController::getAxonModels, "/api/models/axons", Get);
    ADD_METHOD_TO(ModelsController::getDendriteModels, "/api/models/dendrites", Get);
    METHOD_LIST_END

private:
    std::vector<Json::Value> readCppModels(const std::string& filepath) {
        std::vector<Json::Value> models;
        std::ifstream file(filepath);
        
        if (!file.is_open()) {
            std::cerr << "Warning: " << filepath << " not found" << std::endl;
            return models;
        }

        std::string content((std::istreambuf_iterator<char>(file)),
                          std::istreambuf_iterator<char>());

        std::regex pattern(R"(\{\s*"([^"]+)",\s*"([^"]+)"\s*\})");
        std::smatch match;
        std::string::const_iterator searchStart(content.cbegin());

        while (std::regex_search(searchStart, content.cend(), match, pattern)) {
            Json::Value model;
            model["id"] = match[1].str();
            model["name"] = match[2].str();
            models.push_back(model);
            searchStart = match.suffix().first;
        }

        return models;
    }

    Json::Value getModels(const std::string& category) {
        auto basePath = fs::current_path().parent_path() / "lib";
        auto filepath = basePath / category / "models.hpp";
        
        Json::Value response;
        auto models = readCppModels(filepath.string());
        
        Json::Value modelsArray(Json::arrayValue);
        for (const auto& model : models) {
            modelsArray.append(model);
        }
        
        response["models"] = modelsArray;
        return response;
    }

    void getNeuronModels(const HttpRequestPtr& req,
                        std::function<void(const HttpResponsePtr&)>&& callback) {
        auto response = HttpResponse::newHttpJsonResponse(getModels("neurons"));
        callback(response);
    }

    void getSynapseModels(const HttpRequestPtr& req,
                         std::function<void(const HttpResponsePtr&)>&& callback) {
        auto response = HttpResponse::newHttpJsonResponse(getModels("synapses"));
        callback(response);
    }

    void getAxonModels(const HttpRequestPtr& req,
                      std::function<void(const HttpResponsePtr&)>&& callback) {
        auto response = HttpResponse::newHttpJsonResponse(getModels("axons"));
        callback(response);
    }

    void getDendriteModels(const HttpRequestPtr& req,
                          std::function<void(const HttpResponsePtr&)>&& callback) {
        auto response = HttpResponse::newHttpJsonResponse(getModels("dendrites"));
        callback(response);
    }
};

int main() {
    app().setLogLevel(trantor::Logger::kWarn)
         .addListener("0.0.0.0", 5173)
         .setThreadNum(3)
         .enableCoroutine(true)
         .addHeader("Access-Control-Allow-Origin", "*")
         .addHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
         .addHeader("Access-Control-Allow-Headers", "Content-Type");

    app().run();
    return 0;
}