cmake_minimum_required(VERSION 3.5)
project(spike_x_api CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# Προσθέτουμε τις διαδρομές για Drogon και JsonCpp
set(CMAKE_PREFIX_PATH 
    "/opt/homebrew/Cellar/drogon/1.9.9"
    "/opt/homebrew/Cellar/jsoncpp/1.9.6"
)

find_package(Drogon CONFIG REQUIRED)
find_package(jsoncpp REQUIRED)

add_executable(${PROJECT_NAME} api/models.cpp)
target_link_libraries(${PROJECT_NAME} 
    PRIVATE 
    Drogon::Drogon
    jsoncpp
)