cmake_minimum_required(VERSION 3.16)

project(TestSetup)

# Set the C++ Standard
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED True)

# Find OpenSSL
find_package(OpenSSL REQUIRED)
include_directories(${OPENSSL_INCLUDE_DIR})

# Find specific libraries
find_library(GRPCPP_LIBRARY NAMES grpc++ PATHS /opt/homebrew/lib)
find_library(NGHTTP3_LIBRARY NAMES nghttp3 PATHS /opt/homebrew/lib)
find_library(NGHTTP2_LIBRARY NAMES nghttp2 PATHS /opt/homebrew/lib)
find_library(OPENSSL_SSL_LIBRARY NAMES ssl PATHS /opt/homebrew/lib)
find_library(OPENSSL_CRYPTO_LIBRARY NAMES crypto PATHS /opt/homebrew/lib)

# Include directories
include_directories(/opt/homebrew/include)

# Add the executable
add_executable(test_setup server.cpp)

# Link libraries
target_link_libraries(test_setup
    ${GRPCPP_LIBRARY}
    ${NGHTTP3_LIBRARY}
    ${NGHTTP2_LIBRARY}
    ${OPENSSL_SSL_LIBRARY}
    ${OPENSSL_CRYPTO_LIBRARY}
)
