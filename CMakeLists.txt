cmake_minimum_required(VERSION 3.14.5 FATAL_ERROR)

project(zydis.js)
include(FetchContent)

message(STATUS "Fetching zydis...")
set(ZYAN_NO_LIBC ON CACHE BOOL "")
FetchContent_Declare(
    Zydis
    GIT_REPOSITORY https://github.com/zyantific/zydis
    GIT_TAG        aeb1b9acf0703fd56dae879c99b05704ea955511
    GIT_SHALLOW    false
)
FetchContent_MakeAvailable(Zydis)

message(STATUS "Building the host...")
add_executable(zydis.js lib.c)
target_link_libraries(zydis.js Zydis)
set_target_properties(zydis.js PROPERTIES C_STANDARD 11)
set_property(TARGET zydis.js PROPERTY INTERPROCEDURAL_OPTIMIZATION TRUE)
set_target_properties(zydis.js PROPERTIES OUTPUT_NAME "zydis" SUFFIX ".mjs")
target_link_options(zydis.js PRIVATE
   -sMODULARIZE=1 -sEXPORT_ES6=1 -sEXPORTED_FUNCTIONS=_malloc,_free,_main -sEXPORTED_RUNTIME_METHODS=stringToUTF8,UTF8ToString -sWASM_BIGINT)

message(STATUS "Copying binaries...")   
add_custom_command(TARGET zydis.js  POST_BUILD COMMAND ${CMAKE_COMMAND} -E copy ${CMAKE_CURRENT_BINARY_DIR}/zydis.mjs  ${CMAKE_SOURCE_DIR}/src/zydis.mjs)
add_custom_command(TARGET zydis.js  POST_BUILD COMMAND ${CMAKE_COMMAND} -E copy ${CMAKE_CURRENT_BINARY_DIR}/zydis.wasm ${CMAKE_SOURCE_DIR}/src/zydis.wasm)
add_custom_command(TARGET zydis.js  POST_BUILD COMMAND ${CMAKE_COMMAND} -E copy ${CMAKE_CURRENT_BINARY_DIR}/zydis.mjs ${CMAKE_SOURCE_DIR}/dist/zydis.mjs)
add_custom_command(TARGET zydis.js  POST_BUILD COMMAND ${CMAKE_COMMAND} -E copy ${CMAKE_CURRENT_BINARY_DIR}/zydis.wasm ${CMAKE_SOURCE_DIR}/dist/zydis.wasm)
add_custom_command(TARGET zydis.js  POST_BUILD COMMAND ${CMAKE_COMMAND} -E copy ${CMAKE_SOURCE_DIR}/src/native.mjs ${CMAKE_SOURCE_DIR}/dist/native.mjs)
add_custom_command(TARGET zydis.js  POST_BUILD COMMAND ${CMAKE_COMMAND} -E copy ${CMAKE_SOURCE_DIR}/src/native.d.ts ${CMAKE_SOURCE_DIR}/dist/native.d.ts)
add_custom_command(TARGET zydis.js  POST_BUILD COMMAND ${CMAKE_COMMAND} -E copy ${CMAKE_SOURCE_DIR}/src/native.d.ts ${CMAKE_SOURCE_DIR}/dist/native.d.ts)