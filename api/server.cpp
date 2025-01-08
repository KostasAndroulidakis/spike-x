#include <nghttp3/nghttp3.h>
#include <openssl/ssl.h>
#include <iostream>
#include <string>

const std::string cert_file = "certs/server.crt";
const std::string key_file = "certs/server.key";

int main() {
    std::cout << "HTTP/3 Server is starting..." << std::endl;

    // Create SSL Context
    SSL_CTX *ctx = SSL_CTX_new(TLS_method());
    if (!ctx) {
        std::cerr << "Failed to create SSL context" << std::endl;
        return 1;
    }

    // Configure SSL Context for HTTP/3
    SSL_CTX_set_min_proto_version(ctx, TLS1_3_VERSION);
    SSL_CTX_set_max_proto_version(ctx, TLS1_3_VERSION);

    // Load certificate and key
    if (SSL_CTX_use_certificate_file(ctx, cert_file.c_str(), SSL_FILETYPE_PEM) <= 0) {
        std::cerr << "Failed to load certificate" << std::endl;
        SSL_CTX_free(ctx);
        return 1;
    }

    if (SSL_CTX_use_PrivateKey_file(ctx, key_file.c_str(), SSL_FILETYPE_PEM) <= 0) {
        std::cerr << "Failed to load private key" << std::endl;
        SSL_CTX_free(ctx);
        return 1;
    }

    std::cout << "Server is configured for HTTP/3!" << std::endl;

    // Placeholder for HTTP/3 logic (to be implemented)

    // Cleanup
    SSL_CTX_free(ctx);

    std::cout << "HTTP/3 Server is shutting down..." << std::endl;
    return 0;
}
