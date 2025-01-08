cmake_minimum_required(VERSION 3.16)

project(TestSetup)

# Set the C++ Standard
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED True)

# Find OpenSSL
find_package(OpenSSL REQUIRED)
include_directories(${OPENSSL_INCLUDE_DIR})
link_directories(${OPENSSL_LIBRARIES})

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
    ${OPENSSL_LIBRARIES}
)
