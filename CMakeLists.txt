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



function (create_target target flags)
    add_executable("${target}.js" lib.c)
    target_link_libraries("${target}.js" Zydis)
    set_target_properties("${target}.js" PROPERTIES C_STANDARD 11)
    set_property(TARGET "${target}.js" PROPERTY INTERPROCEDURAL_OPTIMIZATION TRUE)
    set_target_properties("${target}.js" PROPERTIES OUTPUT_NAME "${target}" SUFFIX ".js")
    target_link_options("${target}.js" PRIVATE
    -sMODULARIZE=1 -sEXPORT_ES6=1 -sEXPORTED_FUNCTIONS=_malloc,_free,_main -sEXPORTED_RUNTIME_METHODS=stringToUTF8,UTF8ToString -sWASM_BIGINT ${flags})

    message(STATUS "Copying binaries...")   
    add_custom_command(TARGET "${target}.js"  POST_BUILD COMMAND ${CMAKE_COMMAND} -E copy ${CMAKE_CURRENT_BINARY_DIR}/${target}.js  ${CMAKE_SOURCE_DIR}/src/${target}.js)
    add_custom_command(TARGET "${target}.js"  POST_BUILD COMMAND ${CMAKE_COMMAND} -E copy ${CMAKE_CURRENT_BINARY_DIR}/${target}.wasm ${CMAKE_SOURCE_DIR}/src/${target}.wasm)
    add_custom_command(TARGET "${target}.js"  POST_BUILD COMMAND ${CMAKE_COMMAND} -E copy ${CMAKE_CURRENT_BINARY_DIR}/${target}.js  ${CMAKE_SOURCE_DIR}/dist/${target}.js)
    add_custom_command(TARGET "${target}.js"  POST_BUILD COMMAND ${CMAKE_COMMAND} -E copy ${CMAKE_CURRENT_BINARY_DIR}/${target}.wasm ${CMAKE_SOURCE_DIR}/dist/${target}.wasm)
endfunction ()

create_target(zydis "")
create_target(zydis.web "-sENVIRONMENT=web")