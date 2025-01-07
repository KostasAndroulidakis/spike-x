cmake_minimum_required(VERSION 3.13)
project(models_server)

set(CMAKE_CXX_STANDARD 14)

# Add Homebrew paths for M1 Mac
list(APPEND CMAKE_PREFIX_PATH "/opt/homebrew/lib/cmake")
include_directories("/opt/homebrew/include")
link_directories("/opt/homebrew/lib")

# Find required packages
find_package(gRPC CONFIG REQUIRED)
find_package(Protobuf CONFIG REQUIRED)

# Define source files
set(PROTO_SRC_DIR ${CMAKE_CURRENT_SOURCE_DIR}/src)

# Add executable
add_executable(models_server
    src/models.cpp
    ${PROTO_SRC_DIR}/models.pb.cc
    ${PROTO_SRC_DIR}/models.grpc.pb.cc
)

# Add include directories
target_include_directories(models_server PRIVATE
    ${CMAKE_CURRENT_SOURCE_DIR}/src
    ${Protobuf_INCLUDE_DIRS}
    ${GRPC_INCLUDE_DIRS}
)

# Link libraries
target_link_libraries(models_server PRIVATE
    gRPC::grpc++
    grpc++
    grpc++_reflection
    protobuf::libprotobuf
)