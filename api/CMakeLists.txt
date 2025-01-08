cmake_minimum_required(VERSION 3.16)

project(TestSetup)

# Include directories
include_directories(/opt/homebrew/include)

# Link directories
link_directories(/opt/homebrew/lib)

# Add the executable
add_executable(test_setup server.cpp)

# Link libraries
target_link_libraries(test_setup
    grpc++
    nghttp3
    nghttp2
    OpenSSL::SSL
    OpenSSL::Crypto
)
