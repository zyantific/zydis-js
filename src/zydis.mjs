
var Module = (() => {
  var _scriptDir = import.meta.url;
  
  return (
async function(Module = {})  {

// include: shell.js
// The Module object: Our interface to the outside world. We import
// and export values on it. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(Module) { ..generated code.. }
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to check if Module already exists (e.g. case 3 above).
// Substitution will be replaced with actual code on later stage of the build,
// this way Closure Compiler will not mangle it (e.g. case 4. above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module = typeof Module != 'undefined' ? Module : {};

// Set up the promise that indicates the Module is initialized
var readyPromiseResolve, readyPromiseReject;
Module['ready'] = new Promise(function(resolve, reject) {
  readyPromiseResolve = resolve;
  readyPromiseReject = reject;
});
["_malloc","_free","_main","_zyjsNewDecoder","_zyjsDecoderSetMode","_zyjsDecoderDecode","_zyjsNewEncReq","_zyjsEncReqEncode","_zyjsEncReqEncodeAbs","_zyjsEncNop","_zyjsNewFormatter","_zyjsFormatterSetProperty","_zyjsFormatterFormatInsn","_zyjsFormatterFormatOperand","_zyjsRegisterEncode","_zyjsRegisterGetId","_zyjsRegisterGetClass","_zyjsRegisterGetWidth","_zyjsRegisterClassGetWidth","_zyjsRegisterGetLargestEnclosing","_zyjsDecInsnGet_mnemonic","_zyjsDecInsnSet_mnemonic","_zyjsDecInsnGet_length","_zyjsDecInsnSet_length","_zyjsDecInsnGet_encoding","_zyjsDecInsnSet_encoding","_zyjsDecInsnGet_opcodeMap","_zyjsDecInsnSet_opcodeMap","_zyjsDecInsnGet_opcode","_zyjsDecInsnSet_opcode","_zyjsDecInsnGet_stackWidth","_zyjsDecInsnSet_stackWidth","_zyjsDecInsnGet_operandWidth","_zyjsDecInsnSet_operandWidth","_zyjsDecInsnGet_addressWidth","_zyjsDecInsnSet_addressWidth","_zyjsDecInsnGet_operandCount","_zyjsDecInsnSet_operandCount","_zyjsDecInsnGet_visibleOperandCount","_zyjsDecInsnSet_visibleOperandCount","_zyjsDecInsnGet_attributes","_zyjsDecInsnSet_attributes","_zyjsDecInsnGet_cpuFlagsPtr","_zyjsDecInsnSet_cpuFlagsPtr","_zyjsDecInsnGet_fpuFlagsPtr","_zyjsDecInsnSet_fpuFlagsPtr","_zyjsDecInsnGet_category","_zyjsDecInsnSet_category","_zyjsDecInsnGet_isaSet","_zyjsDecInsnSet_isaSet","_zyjsDecInsnGet_isaExt","_zyjsDecInsnSet_isaExt","_zyjsDecInsnGet_branchType","_zyjsDecInsnSet_branchType","_zyjsDecInsnGet_exceptionClass","_zyjsDecInsnSet_exceptionClass","_zyjsDecInsnGet_vectorLength","_zyjsDecInsnSet_vectorLength","_zyjsDecInsnGet_maskMode","_zyjsDecInsnSet_maskMode","_zyjsDecInsnGet_maskReg","_zyjsDecInsnSet_maskReg","_zyjsDecInsnGet_isBroadcastStatic","_zyjsDecInsnSet_isBroadcastStatic","_zyjsDecInsnGet_broadcastMode","_zyjsDecInsnSet_broadcastMode","_zyjsDecInsnGet_roundingMode","_zyjsDecInsnSet_roundingMode","_zyjsDecInsnGet_swizzleMode","_zyjsDecInsnSet_swizzleMode","_zyjsDecInsnGet_conversionMode","_zyjsDecInsnSet_conversionMode","_zyjsDecInsnGet_hasSAE","_zyjsDecInsnSet_hasSAE","_zyjsDecInsnGet_hasEvictionHint","_zyjsDecInsnSet_hasEvictionHint","_zyjsDecInsnRefOperand","_zyjsDecOpGet_id","_zyjsDecOpSet_id","_zyjsDecOpGet_visiblity","_zyjsDecOpSet_visiblity","_zyjsDecOpGet_actions","_zyjsDecOpSet_actions","_zyjsDecOpGet_encoding","_zyjsDecOpSet_encoding","_zyjsDecOpGet_size","_zyjsDecOpSet_size","_zyjsDecOpGet_elementType","_zyjsDecOpSet_elementType","_zyjsDecOpGet_elementSize","_zyjsDecOpSet_elementSize","_zyjsDecOpGet_elementCount","_zyjsDecOpSet_elementCount","_zyjsDecOpGet_attributes","_zyjsDecOpSet_attributes","_zyjsDecOpGet_type","_zyjsDecOpSet_type","_zyjsDecOpGet_immSigned","_zyjsDecOpSet_immSigned","_zyjsDecOpGet_immRelative","_zyjsDecOpSet_immRelative","_zyjsDecOpGet_imms","_zyjsDecOpSet_imms","_zyjsDecOpGet_immu","_zyjsDecOpSet_immu","_zyjsDecOpGet_ptrSeg","_zyjsDecOpSet_ptrSeg","_zyjsDecOpGet_ptrOff","_zyjsDecOpSet_ptrOff","_zyjsDecOpGet_regv","_zyjsDecOpSet_regv","_zyjsDecOpGet_memType","_zyjsDecOpSet_memType","_zyjsDecOpGet_memSeg","_zyjsDecOpSet_memSeg","_zyjsDecOpGet_memBase","_zyjsDecOpSet_memBase","_zyjsDecOpGet_memIndex","_zyjsDecOpSet_memIndex","_zyjsDecOpGet_memScale","_zyjsDecOpSet_memScale","_zyjsDecOpGet_memHasDisp","_zyjsDecOpSet_memHasDisp","_zyjsDecOpGet_memDisp","_zyjsDecOpSet_memDisp","_zyjsEncOpGet_type","_zyjsEncOpSet_type","_zyjsEncOpGet_imms","_zyjsEncOpSet_imms","_zyjsEncOpGet_immu","_zyjsEncOpSet_immu","_zyjsEncOpGet_ptrSeg","_zyjsEncOpSet_ptrSeg","_zyjsEncOpGet_ptrOff","_zyjsEncOpSet_ptrOff","_zyjsEncOpGet_regv","_zyjsEncOpSet_regv","_zyjsEncOpGet_regIs4","_zyjsEncOpSet_regIs4","_zyjsEncOpGet_memBase","_zyjsEncOpSet_memBase","_zyjsEncOpGet_memIndex","_zyjsEncOpSet_memIndex","_zyjsEncOpGet_memScale","_zyjsEncOpSet_memScale","_zyjsEncOpGet_memDisp","_zyjsEncOpSet_memDisp","_zyjsEncReqGet_machineMode","_zyjsEncReqSet_machineMode","_zyjsEncReqGet_allowedEncodings","_zyjsEncReqSet_allowedEncodings","_zyjsEncReqGet_mnemonic","_zyjsEncReqSet_mnemonic","_zyjsEncReqGet_prefixes","_zyjsEncReqSet_prefixes","_zyjsEncReqGet_branchType","_zyjsEncReqSet_branchType","_zyjsEncReqGet_branchWidth","_zyjsEncReqSet_branchWidth","_zyjsEncReqGet_addressSizeHint","_zyjsEncReqSet_addressSizeHint","_zyjsEncReqGet_operandSizeHint","_zyjsEncReqSet_operandSizeHint","_zyjsEncReqGet_operandCount","_zyjsEncReqSet_operandCount","_zyjsEncReqGet_evexBroadcast","_zyjsEncReqSet_evexBroadcast","_zyjsEncReqGet_evexRounding","_zyjsEncReqSet_evexRounding","_zyjsEncReqGet_evexSAE","_zyjsEncReqSet_evexSAE","_zyjsEncReqGet_evexZeroingMask","_zyjsEncReqSet_evexZeroingMask","_zyjsEncReqGet_mvexBroadcast","_zyjsEncReqSet_mvexBroadcast","_zyjsEncReqGet_mvexRounding","_zyjsEncReqSet_mvexRounding","_zyjsEncReqGet_mvexSAE","_zyjsEncReqSet_mvexSAE","_zyjsEncReqGet_mvexConversion","_zyjsEncReqSet_mvexConversion","_zyjsEncReqGet_mvexSwizzle","_zyjsEncReqSet_mvexSwizzle","_zyjsEncReqGet_mvexEvictionHint","_zyjsEncReqSet_mvexEvictionHint","_zyjsEncReqRefOperand","_zyjsFlagSetGet_tested","_zyjsFlagSetGet_modified","_zyjsFlagSetGet_unset","_zyjsFlagSetGet_set","_zyjsFlagSetGet_undef","_zyjsGetMajorVersion","_zyjsGetMinorVersion","_zyjsGetPatchVersion","_zyjsGetBuildVersion","_zyjsHasFeature","_fflush","onRuntimeInitialized"].forEach((prop) => {
  if (!Object.getOwnPropertyDescriptor(Module['ready'], prop)) {
    Object.defineProperty(Module['ready'], prop, {
      get: () => abort('You are getting ' + prop + ' on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js'),
      set: () => abort('You are setting ' + prop + ' on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js'),
    });
  }
});

// --pre-jses are emitted after the Module integration code, so that they can
// refer to Module (if they choose; they can also define Module)


// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var moduleOverrides = Object.assign({}, Module);

var arguments_ = [];
var thisProgram = './this.program';
var quit_ = (status, toThrow) => {
  throw toThrow;
};

// Determine the runtime environment we are in. You can customize this by
// setting the ENVIRONMENT setting at compile time (see settings.js).

// Attempt to auto-detect the environment
var ENVIRONMENT_IS_WEB = typeof window == 'object';
var ENVIRONMENT_IS_WORKER = typeof importScripts == 'function';
// N.b. Electron.js environment is simultaneously a NODE-environment, but
// also a web environment.
var ENVIRONMENT_IS_NODE = typeof process == 'object' && typeof process.versions == 'object' && typeof process.versions.node == 'string';
var ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;

if (Module['ENVIRONMENT']) {
  throw new Error('Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)');
}

// `/` should be present at the end if `scriptDirectory` is not empty
var scriptDirectory = '';
function locateFile(path) {
  if (Module['locateFile']) {
    return Module['locateFile'](path, scriptDirectory);
  }
  return scriptDirectory + path;
}

// Hooks that are implemented differently in different runtime environments.
var read_,
    readAsync,
    readBinary,
    setWindowTitle;

if (ENVIRONMENT_IS_NODE) {
  if (typeof process == 'undefined' || !process.release || process.release.name !== 'node') throw new Error('not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)');

  var nodeVersion = process.versions.node;
  var numericVersion = nodeVersion.split('.').slice(0, 3);
  numericVersion = (numericVersion[0] * 10000) + (numericVersion[1] * 100) + (numericVersion[2].split('-')[0] * 1);
  var minVersion = 101900;
  if (numericVersion < 101900) {
    throw new Error('This emscripten-generated code requires node v10.19.19.0 (detected v' + nodeVersion + ')');
  }

  // `require()` is no-op in an ESM module, use `createRequire()` to construct
  // the require()` function.  This is only necessary for multi-environment
  // builds, `-sENVIRONMENT=node` emits a static import declaration instead.
  // TODO: Swap all `require()`'s with `import()`'s?
  const { createRequire } = await import('module');
  /** @suppress{duplicate} */
  var require = createRequire(import.meta.url);
  // These modules will usually be used on Node.js. Load them eagerly to avoid
  // the complexity of lazy-loading.
  var fs = require('fs');
  var nodePath = require('path');

  if (ENVIRONMENT_IS_WORKER) {
    scriptDirectory = nodePath.dirname(scriptDirectory) + '/';
  } else {
    // EXPORT_ES6 + ENVIRONMENT_IS_NODE always requires use of import.meta.url,
    // since there's no way getting the current absolute path of the module when
    // support for that is not available.
    scriptDirectory = require('url').fileURLToPath(new URL('./', import.meta.url)); // includes trailing slash
  }

// include: node_shell_read.js
read_ = (filename, binary) => {
  // We need to re-wrap `file://` strings to URLs. Normalizing isn't
  // necessary in that case, the path should already be absolute.
  filename = isFileURI(filename) ? new URL(filename) : nodePath.normalize(filename);
  return fs.readFileSync(filename, binary ? undefined : 'utf8');
};

readBinary = (filename) => {
  var ret = read_(filename, true);
  if (!ret.buffer) {
    ret = new Uint8Array(ret);
  }
  assert(ret.buffer);
  return ret;
};

readAsync = (filename, onload, onerror) => {
  // See the comment in the `read_` function.
  filename = isFileURI(filename) ? new URL(filename) : nodePath.normalize(filename);
  fs.readFile(filename, function(err, data) {
    if (err) onerror(err);
    else onload(data.buffer);
  });
};

// end include: node_shell_read.js
  if (process.argv.length > 1) {
    thisProgram = process.argv[1].replace(/\\/g, '/');
  }

  arguments_ = process.argv.slice(2);

  // MODULARIZE will export the module in the proper place outside, we don't need to export here

  quit_ = (status, toThrow) => {
    process.exitCode = status;
    throw toThrow;
  };

  Module['inspect'] = function () { return '[Emscripten Module object]'; };

} else
if (ENVIRONMENT_IS_SHELL) {

  if ((typeof process == 'object' && typeof require === 'function') || typeof window == 'object' || typeof importScripts == 'function') throw new Error('not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)');

  if (typeof read != 'undefined') {
    read_ = function shell_read(f) {
      return read(f);
    };
  }

  readBinary = function readBinary(f) {
    let data;
    if (typeof readbuffer == 'function') {
      return new Uint8Array(readbuffer(f));
    }
    data = read(f, 'binary');
    assert(typeof data == 'object');
    return data;
  };

  readAsync = function readAsync(f, onload, onerror) {
    setTimeout(() => onload(readBinary(f)), 0);
  };

  if (typeof clearTimeout == 'undefined') {
    globalThis.clearTimeout = (id) => {};
  }

  if (typeof scriptArgs != 'undefined') {
    arguments_ = scriptArgs;
  } else if (typeof arguments != 'undefined') {
    arguments_ = arguments;
  }

  if (typeof quit == 'function') {
    quit_ = (status, toThrow) => {
      // Unlike node which has process.exitCode, d8 has no such mechanism. So we
      // have no way to set the exit code and then let the program exit with
      // that code when it naturally stops running (say, when all setTimeouts
      // have completed). For that reason, we must call `quit` - the only way to
      // set the exit code - but quit also halts immediately.  To increase
      // consistency with node (and the web) we schedule the actual quit call
      // using a setTimeout to give the current stack and any exception handlers
      // a chance to run.  This enables features such as addOnPostRun (which
      // expected to be able to run code after main returns).
      setTimeout(() => {
        if (!(toThrow instanceof ExitStatus)) {
          let toLog = toThrow;
          if (toThrow && typeof toThrow == 'object' && toThrow.stack) {
            toLog = [toThrow, toThrow.stack];
          }
          err('exiting due to exception: ' + toLog);
        }
        quit(status);
      });
      throw toThrow;
    };
  }

  if (typeof print != 'undefined') {
    // Prefer to use print/printErr where they exist, as they usually work better.
    if (typeof console == 'undefined') console = /** @type{!Console} */({});
    console.log = /** @type{!function(this:Console, ...*): undefined} */ (print);
    console.warn = console.error = /** @type{!function(this:Console, ...*): undefined} */ (typeof printErr != 'undefined' ? printErr : print);
  }

} else

// Note that this includes Node.js workers when relevant (pthreads is enabled).
// Node.js workers are detected as a combination of ENVIRONMENT_IS_WORKER and
// ENVIRONMENT_IS_NODE.
if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  if (ENVIRONMENT_IS_WORKER) { // Check worker, not web, since window could be polyfilled
    scriptDirectory = self.location.href;
  } else if (typeof document != 'undefined' && document.currentScript) { // web
    scriptDirectory = document.currentScript.src;
  }
  // When MODULARIZE, this JS may be executed later, after document.currentScript
  // is gone, so we saved it, and we use it here instead of any other info.
  if (_scriptDir) {
    scriptDirectory = _scriptDir;
  }
  // blob urls look like blob:http://site.com/etc/etc and we cannot infer anything from them.
  // otherwise, slice off the final part of the url to find the script directory.
  // if scriptDirectory does not contain a slash, lastIndexOf will return -1,
  // and scriptDirectory will correctly be replaced with an empty string.
  // If scriptDirectory contains a query (starting with ?) or a fragment (starting with #),
  // they are removed because they could contain a slash.
  if (scriptDirectory.indexOf('blob:') !== 0) {
    scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf('/')+1);
  } else {
    scriptDirectory = '';
  }

  if (!(typeof window == 'object' || typeof importScripts == 'function')) throw new Error('not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)');

  // Differentiate the Web Worker from the Node Worker case, as reading must
  // be done differently.
  {
// include: web_or_worker_shell_read.js
read_ = (url) => {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, false);
      xhr.send(null);
      return xhr.responseText;
  }

  if (ENVIRONMENT_IS_WORKER) {
    readBinary = (url) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.responseType = 'arraybuffer';
        xhr.send(null);
        return new Uint8Array(/** @type{!ArrayBuffer} */(xhr.response));
    };
  }

  readAsync = (url, onload, onerror) => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = () => {
      if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
        onload(xhr.response);
        return;
      }
      onerror();
    };
    xhr.onerror = onerror;
    xhr.send(null);
  }

// end include: web_or_worker_shell_read.js
  }

  setWindowTitle = (title) => document.title = title;
} else
{
  throw new Error('environment detection error');
}

var out = Module['print'] || console.log.bind(console);
var err = Module['printErr'] || console.warn.bind(console);

// Merge back in the overrides
Object.assign(Module, moduleOverrides);
// Free the object hierarchy contained in the overrides, this lets the GC
// reclaim data used e.g. in memoryInitializerRequest, which is a large typed array.
moduleOverrides = null;
checkIncomingModuleAPI();

// Emit code to handle expected values on the Module object. This applies Module.x
// to the proper local x. This has two benefits: first, we only emit it if it is
// expected to arrive, and second, by using a local everywhere else that can be
// minified.

if (Module['arguments']) arguments_ = Module['arguments'];legacyModuleProp('arguments', 'arguments_');

if (Module['thisProgram']) thisProgram = Module['thisProgram'];legacyModuleProp('thisProgram', 'thisProgram');

if (Module['quit']) quit_ = Module['quit'];legacyModuleProp('quit', 'quit_');

// perform assertions in shell.js after we set up out() and err(), as otherwise if an assertion fails it cannot print the message
// Assertions on removed incoming Module JS APIs.
assert(typeof Module['memoryInitializerPrefixURL'] == 'undefined', 'Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['pthreadMainPrefixURL'] == 'undefined', 'Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['cdInitializerPrefixURL'] == 'undefined', 'Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['filePackagePrefixURL'] == 'undefined', 'Module.filePackagePrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['read'] == 'undefined', 'Module.read option was removed (modify read_ in JS)');
assert(typeof Module['readAsync'] == 'undefined', 'Module.readAsync option was removed (modify readAsync in JS)');
assert(typeof Module['readBinary'] == 'undefined', 'Module.readBinary option was removed (modify readBinary in JS)');
assert(typeof Module['setWindowTitle'] == 'undefined', 'Module.setWindowTitle option was removed (modify setWindowTitle in JS)');
assert(typeof Module['TOTAL_MEMORY'] == 'undefined', 'Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY');
legacyModuleProp('read', 'read_');
legacyModuleProp('readAsync', 'readAsync');
legacyModuleProp('readBinary', 'readBinary');
legacyModuleProp('setWindowTitle', 'setWindowTitle');
var IDBFS = 'IDBFS is no longer included by default; build with -lidbfs.js';
var PROXYFS = 'PROXYFS is no longer included by default; build with -lproxyfs.js';
var WORKERFS = 'WORKERFS is no longer included by default; build with -lworkerfs.js';
var NODEFS = 'NODEFS is no longer included by default; build with -lnodefs.js';

assert(!ENVIRONMENT_IS_SHELL, "shell environment detected but not enabled at build time.  Add 'shell' to `-sENVIRONMENT` to enable.");


// end include: shell.js
// include: preamble.js
// === Preamble library stuff ===

// Documentation for the public APIs defined in this file must be updated in:
//    site/source/docs/api_reference/preamble.js.rst
// A prebuilt local version of the documentation is available at:
//    site/build/text/docs/api_reference/preamble.js.txt
// You can also build docs locally as HTML or other formats in site/
// An online HTML version (which may be of a different version of Emscripten)
//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html

var wasmBinary;
if (Module['wasmBinary']) wasmBinary = Module['wasmBinary'];legacyModuleProp('wasmBinary', 'wasmBinary');
var noExitRuntime = Module['noExitRuntime'] || true;legacyModuleProp('noExitRuntime', 'noExitRuntime');

if (typeof WebAssembly != 'object') {
  abort('no native wasm support detected');
}

// Wasm globals

var wasmMemory;

//========================================
// Runtime essentials
//========================================

// whether we are quitting the application. no code should run after this.
// set in exit() and abort()
var ABORT = false;

// set by exit() and abort().  Passed to 'onExit' handler.
// NOTE: This is also used as the process return code code in shell environments
// but only when noExitRuntime is false.
var EXITSTATUS;

/** @type {function(*, string=)} */
function assert(condition, text) {
  if (!condition) {
    abort('Assertion failed' + (text ? ': ' + text : ''));
  }
}

// We used to include malloc/free by default in the past. Show a helpful error in
// builds with assertions.

// include: runtime_strings.js
// runtime_strings.js: String related runtime functions that are part of both
// MINIMAL_RUNTIME and regular runtime.

var UTF8Decoder = typeof TextDecoder != 'undefined' ? new TextDecoder('utf8') : undefined;

/**
 * Given a pointer 'idx' to a null-terminated UTF8-encoded string in the given
 * array that contains uint8 values, returns a copy of that string as a
 * Javascript String object.
 * heapOrArray is either a regular array, or a JavaScript typed array view.
 * @param {number} idx
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ArrayToString(heapOrArray, idx, maxBytesToRead) {
  var endIdx = idx + maxBytesToRead;
  var endPtr = idx;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on
  // null terminator by itself.  Also, use the length info to avoid running tiny
  // strings through TextDecoder, since .subarray() allocates garbage.
  // (As a tiny code save trick, compare endPtr against endIdx using a negation,
  // so that undefined means Infinity)
  while (heapOrArray[endPtr] && !(endPtr >= endIdx)) ++endPtr;

  if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
    return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
  }
  var str = '';
  // If building with TextDecoder, we have already computed the string length
  // above, so test loop end condition against that
  while (idx < endPtr) {
    // For UTF8 byte structure, see:
    // http://en.wikipedia.org/wiki/UTF-8#Description
    // https://www.ietf.org/rfc/rfc2279.txt
    // https://tools.ietf.org/html/rfc3629
    var u0 = heapOrArray[idx++];
    if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
    var u1 = heapOrArray[idx++] & 63;
    if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
    var u2 = heapOrArray[idx++] & 63;
    if ((u0 & 0xF0) == 0xE0) {
      u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
    } else {
      if ((u0 & 0xF8) != 0xF0) warnOnce('Invalid UTF-8 leading byte ' + ptrToString(u0) + ' encountered when deserializing a UTF-8 string in wasm memory to a JS string!');
      u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heapOrArray[idx++] & 63);
    }

    if (u0 < 0x10000) {
      str += String.fromCharCode(u0);
    } else {
      var ch = u0 - 0x10000;
      str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
    }
  }
  return str;
}

/**
 * Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the
 * emscripten HEAP, returns a copy of that string as a Javascript String object.
 *
 * @param {number} ptr
 * @param {number=} maxBytesToRead - An optional length that specifies the
 *   maximum number of bytes to read. You can omit this parameter to scan the
 *   string until the first \0 byte. If maxBytesToRead is passed, and the string
 *   at [ptr, ptr+maxBytesToReadr[ contains a null byte in the middle, then the
 *   string will cut short at that byte index (i.e. maxBytesToRead will not
 *   produce a string of exact length [ptr, ptr+maxBytesToRead[) N.B. mixing
 *   frequent uses of UTF8ToString() with and without maxBytesToRead may throw
 *   JS JIT optimizations off, so it is worth to consider consistently using one
 * @return {string}
 */
function UTF8ToString(ptr, maxBytesToRead) {
  assert(typeof ptr == 'number');
  return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : '';
}

/**
 * Copies the given Javascript String object 'str' to the given byte array at
 * address 'outIdx', encoded in UTF8 form and null-terminated. The copy will
 * require at most str.length*4+1 bytes of space in the HEAP.  Use the function
 * lengthBytesUTF8 to compute the exact number of bytes (excluding null
 * terminator) that this function will write.
 *
 * @param {string} str - The Javascript string to copy.
 * @param {ArrayBufferView|Array<number>} heap - The array to copy to. Each
 *                                               index in this array is assumed
 *                                               to be one 8-byte element.
 * @param {number} outIdx - The starting offset in the array to begin the copying.
 * @param {number} maxBytesToWrite - The maximum number of bytes this function
 *                                   can write to the array.  This count should
 *                                   include the null terminator, i.e. if
 *                                   maxBytesToWrite=1, only the null terminator
 *                                   will be written and nothing else.
 *                                   maxBytesToWrite=0 does not write any bytes
 *                                   to the output, not even the null
 *                                   terminator.
 * @return {number} The number of bytes written, EXCLUDING the null terminator.
 */
function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
  // Parameter maxBytesToWrite is not optional. Negative values, 0, null,
  // undefined and false each don't write out any bytes.
  if (!(maxBytesToWrite > 0))
    return 0;

  var startIdx = outIdx;
  var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code
    // unit, not a Unicode code point of the character! So decode
    // UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description
    // and https://www.ietf.org/rfc/rfc2279.txt
    // and https://tools.ietf.org/html/rfc3629
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) {
      var u1 = str.charCodeAt(++i);
      u = 0x10000 + ((u & 0x3FF) << 10) | (u1 & 0x3FF);
    }
    if (u <= 0x7F) {
      if (outIdx >= endIdx) break;
      heap[outIdx++] = u;
    } else if (u <= 0x7FF) {
      if (outIdx + 1 >= endIdx) break;
      heap[outIdx++] = 0xC0 | (u >> 6);
      heap[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0xFFFF) {
      if (outIdx + 2 >= endIdx) break;
      heap[outIdx++] = 0xE0 | (u >> 12);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    } else {
      if (outIdx + 3 >= endIdx) break;
      if (u > 0x10FFFF) warnOnce('Invalid Unicode code point ' + ptrToString(u) + ' encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF).');
      heap[outIdx++] = 0xF0 | (u >> 18);
      heap[outIdx++] = 0x80 | ((u >> 12) & 63);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    }
  }
  // Null-terminate the pointer to the buffer.
  heap[outIdx] = 0;
  return outIdx - startIdx;
}

/**
 * Copies the given Javascript String object 'str' to the emscripten HEAP at
 * address 'outPtr', null-terminated and encoded in UTF8 form. The copy will
 * require at most str.length*4+1 bytes of space in the HEAP.
 * Use the function lengthBytesUTF8 to compute the exact number of bytes
 * (excluding null terminator) that this function will write.
 *
 * @return {number} The number of bytes written, EXCLUDING the null terminator.
 */
function stringToUTF8(str, outPtr, maxBytesToWrite) {
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  return stringToUTF8Array(str, HEAPU8,outPtr, maxBytesToWrite);
}

/**
 * Returns the number of bytes the given Javascript string takes if encoded as a
 * UTF8 byte array, EXCLUDING the null terminator byte.
 *
 * @param {string} str - JavaScript string to operator on
 * @return {number} Length, in bytes, of the UTF8 encoded string.
 */
function lengthBytesUTF8(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code
    // unit, not a Unicode code point of the character! So decode
    // UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var c = str.charCodeAt(i); // possibly a lead surrogate
    if (c <= 0x7F) {
      len++;
    } else if (c <= 0x7FF) {
      len += 2;
    } else if (c >= 0xD800 && c <= 0xDFFF) {
      len += 4; ++i;
    } else {
      len += 3;
    }
  }
  return len;
}

// end include: runtime_strings.js
// Memory management

var HEAP,
/** @type {!Int8Array} */
  HEAP8,
/** @type {!Uint8Array} */
  HEAPU8,
/** @type {!Int16Array} */
  HEAP16,
/** @type {!Uint16Array} */
  HEAPU16,
/** @type {!Int32Array} */
  HEAP32,
/** @type {!Uint32Array} */
  HEAPU32,
/** @type {!Float32Array} */
  HEAPF32,
/* BigInt64Array type is not correctly defined in closure
/** not-@type {!BigInt64Array} */
  HEAP64,
/* BigUInt64Array type is not correctly defined in closure
/** not-t@type {!BigUint64Array} */
  HEAPU64,
/** @type {!Float64Array} */
  HEAPF64;

function updateMemoryViews() {
  var b = wasmMemory.buffer;
  Module['HEAP8'] = HEAP8 = new Int8Array(b);
  Module['HEAP16'] = HEAP16 = new Int16Array(b);
  Module['HEAP32'] = HEAP32 = new Int32Array(b);
  Module['HEAPU8'] = HEAPU8 = new Uint8Array(b);
  Module['HEAPU16'] = HEAPU16 = new Uint16Array(b);
  Module['HEAPU32'] = HEAPU32 = new Uint32Array(b);
  Module['HEAPF32'] = HEAPF32 = new Float32Array(b);
  Module['HEAPF64'] = HEAPF64 = new Float64Array(b);
  Module['HEAP64'] = HEAP64 = new BigInt64Array(b);
  Module['HEAPU64'] = HEAPU64 = new BigUint64Array(b);
}

assert(!Module['STACK_SIZE'], 'STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time')

assert(typeof Int32Array != 'undefined' && typeof Float64Array !== 'undefined' && Int32Array.prototype.subarray != undefined && Int32Array.prototype.set != undefined,
       'JS engine does not provide full typed array support');

// If memory is defined in wasm, the user can't provide it, or set INITIAL_MEMORY
assert(!Module['wasmMemory'], 'Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally');
assert(!Module['INITIAL_MEMORY'], 'Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically');

// include: runtime_init_table.js
// In regular non-RELOCATABLE mode the table is exported
// from the wasm module and this will be assigned once
// the exports are available.
var wasmTable;

// end include: runtime_init_table.js
// include: runtime_stack_check.js
// Initializes the stack cookie. Called at the startup of main and at the startup of each thread in pthreads mode.
function writeStackCookie() {
  var max = _emscripten_stack_get_end();
  assert((max & 3) == 0);
  // If the stack ends at address zero we write our cookies 4 bytes into the
  // stack.  This prevents interference with the (separate) address-zero check
  // below.
  if (max == 0) {
    max += 4;
  }
  // The stack grow downwards towards _emscripten_stack_get_end.
  // We write cookies to the final two words in the stack and detect if they are
  // ever overwritten.
  HEAPU32[((max)>>2)] = 0x02135467;
  HEAPU32[(((max)+(4))>>2)] = 0x89BACDFE;
  // Also test the global address 0 for integrity.
  HEAPU32[0] = 0x63736d65; /* 'emsc' */
}

function checkStackCookie() {
  if (ABORT) return;
  var max = _emscripten_stack_get_end();
  // See writeStackCookie().
  if (max == 0) {
    max += 4;
  }
  var cookie1 = HEAPU32[((max)>>2)];
  var cookie2 = HEAPU32[(((max)+(4))>>2)];
  if (cookie1 != 0x02135467 || cookie2 != 0x89BACDFE) {
    abort('Stack overflow! Stack cookie has been overwritten at ' + ptrToString(max) + ', expected hex dwords 0x89BACDFE and 0x2135467, but received ' + ptrToString(cookie2) + ' ' + ptrToString(cookie1));
  }
  // Also test the global address 0 for integrity.
  if (HEAPU32[0] !== 0x63736d65 /* 'emsc' */) {
    abort('Runtime error: The application has corrupted its heap memory area (address zero)!');
  }
}

// end include: runtime_stack_check.js
// include: runtime_assertions.js
// Endianness check
(function() {
  var h16 = new Int16Array(1);
  var h8 = new Int8Array(h16.buffer);
  h16[0] = 0x6373;
  if (h8[0] !== 0x73 || h8[1] !== 0x63) throw 'Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)';
})();

// end include: runtime_assertions.js
var __ATPRERUN__  = []; // functions called before the runtime is initialized
var __ATINIT__    = []; // functions called during startup
var __ATMAIN__    = []; // functions called when main() is to be run
var __ATEXIT__    = []; // functions called during shutdown
var __ATPOSTRUN__ = []; // functions called after the main() is called

var runtimeInitialized = false;

var runtimeKeepaliveCounter = 0;

function keepRuntimeAlive() {
  return noExitRuntime || runtimeKeepaliveCounter > 0;
}

function preRun() {
  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }
  callRuntimeCallbacks(__ATPRERUN__);
}

function initRuntime() {
  assert(!runtimeInitialized);
  runtimeInitialized = true;

  checkStackCookie();

  
  callRuntimeCallbacks(__ATINIT__);
}

function preMain() {
  checkStackCookie();
  
  callRuntimeCallbacks(__ATMAIN__);
}

function postRun() {
  checkStackCookie();

  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}

function addOnInit(cb) {
  __ATINIT__.unshift(cb);
}

function addOnPreMain(cb) {
  __ATMAIN__.unshift(cb);
}

function addOnExit(cb) {
}

function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}

// include: runtime_math.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc

assert(Math.imul, 'This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
assert(Math.fround, 'This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
assert(Math.clz32, 'This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
assert(Math.trunc, 'This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');

// end include: runtime_math.js
// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// Module.preRun (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled
var runDependencyTracking = {};

function getUniqueRunDependency(id) {
  var orig = id;
  while (1) {
    if (!runDependencyTracking[id]) return id;
    id = orig + Math.random();
  }
}

function addRunDependency(id) {
  runDependencies++;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

  if (id) {
    assert(!runDependencyTracking[id]);
    runDependencyTracking[id] = 1;
    if (runDependencyWatcher === null && typeof setInterval != 'undefined') {
      // Check for missing dependencies every few seconds
      runDependencyWatcher = setInterval(function() {
        if (ABORT) {
          clearInterval(runDependencyWatcher);
          runDependencyWatcher = null;
          return;
        }
        var shown = false;
        for (var dep in runDependencyTracking) {
          if (!shown) {
            shown = true;
            err('still waiting on run dependencies:');
          }
          err('dependency: ' + dep);
        }
        if (shown) {
          err('(end of list)');
        }
      }, 10000);
    }
  } else {
    err('warning: run dependency added without ID');
  }
}

function removeRunDependency(id) {
  runDependencies--;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

  if (id) {
    assert(runDependencyTracking[id]);
    delete runDependencyTracking[id];
  } else {
    err('warning: run dependency removed without ID');
  }
  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback(); // can add another dependenciesFulfilled
    }
  }
}

/** @param {string|number=} what */
function abort(what) {
  if (Module['onAbort']) {
    Module['onAbort'](what);
  }

  what = 'Aborted(' + what + ')';
  // TODO(sbc): Should we remove printing and leave it up to whoever
  // catches the exception?
  err(what);

  ABORT = true;
  EXITSTATUS = 1;

  // Use a wasm runtime error, because a JS error might be seen as a foreign
  // exception, which means we'd run destructors on it. We need the error to
  // simply make the program stop.
  // FIXME This approach does not work in Wasm EH because it currently does not assume
  // all RuntimeErrors are from traps; it decides whether a RuntimeError is from
  // a trap or not based on a hidden field within the object. So at the moment
  // we don't have a way of throwing a wasm trap from JS. TODO Make a JS API that
  // allows this in the wasm spec.

  // Suppress closure compiler warning here. Closure compiler's builtin extern
  // defintion for WebAssembly.RuntimeError claims it takes no arguments even
  // though it can.
  // TODO(https://github.com/google/closure-compiler/pull/3913): Remove if/when upstream closure gets fixed.
  /** @suppress {checkTypes} */
  var e = new WebAssembly.RuntimeError(what);

  readyPromiseReject(e);
  // Throw the error whether or not MODULARIZE is set because abort is used
  // in code paths apart from instantiation where an exception is expected
  // to be thrown when abort is called.
  throw e;
}

// include: memoryprofiler.js
// end include: memoryprofiler.js
// show errors on likely calls to FS when it was not included
var FS = {
  error: function() {
    abort('Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with -sFORCE_FILESYSTEM');
  },
  init: function() { FS.error() },
  createDataFile: function() { FS.error() },
  createPreloadedFile: function() { FS.error() },
  createLazyFile: function() { FS.error() },
  open: function() { FS.error() },
  mkdev: function() { FS.error() },
  registerDevice: function() { FS.error() },
  analyzePath: function() { FS.error() },
  loadFilesFromDB: function() { FS.error() },

  ErrnoError: function ErrnoError() { FS.error() },
};
Module['FS_createDataFile'] = FS.createDataFile;
Module['FS_createPreloadedFile'] = FS.createPreloadedFile;

// include: URIUtils.js
// Prefix of data URIs emitted by SINGLE_FILE and related options.
var dataURIPrefix = 'data:application/octet-stream;base64,';

// Indicates whether filename is a base64 data URI.
function isDataURI(filename) {
  // Prefix of data URIs emitted by SINGLE_FILE and related options.
  return filename.startsWith(dataURIPrefix);
}

// Indicates whether filename is delivered via file protocol (as opposed to http/https)
function isFileURI(filename) {
  return filename.startsWith('file://');
}

// end include: URIUtils.js
/** @param {boolean=} fixedasm */
function createExportWrapper(name, fixedasm) {
  return function() {
    var displayName = name;
    var asm = fixedasm;
    if (!fixedasm) {
      asm = Module['asm'];
    }
    assert(runtimeInitialized, 'native function `' + displayName + '` called before runtime initialization');
    if (!asm[name]) {
      assert(asm[name], 'exported native function `' + displayName + '` not found');
    }
    return asm[name].apply(null, arguments);
  };
}

// include: runtime_exceptions.js
// end include: runtime_exceptions.js
var wasmBinaryFile;
if (Module['locateFile']) {
  wasmBinaryFile = 'zydis.wasm';
  if (!isDataURI(wasmBinaryFile)) {
    wasmBinaryFile = locateFile(wasmBinaryFile);
  }
} else {
  // Use bundler-friendly `new URL(..., import.meta.url)` pattern; works in browsers too.
  wasmBinaryFile = new URL('zydis.wasm', import.meta.url).href;
}

function getBinary(file) {
  try {
    if (file == wasmBinaryFile && wasmBinary) {
      return new Uint8Array(wasmBinary);
    }
    if (readBinary) {
      return readBinary(file);
    }
    throw "both async and sync fetching of the wasm failed";
  }
  catch (err) {
    abort(err);
  }
}

function getBinaryPromise(binaryFile) {
  // If we don't have the binary yet, try to load it asynchronously.
  // Fetch has some additional restrictions over XHR, like it can't be used on a file:// url.
  // See https://github.com/github/fetch/pull/92#issuecomment-140665932
  // Cordova or Electron apps are typically loaded from a file:// url.
  // So use fetch if it is available and the url is not a file, otherwise fall back to XHR.
  if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
    if (typeof fetch == 'function'
      && !isFileURI(binaryFile)
    ) {
      return fetch(binaryFile, { credentials: 'same-origin' }).then(function(response) {
        if (!response['ok']) {
          throw "failed to load wasm binary file at '" + binaryFile + "'";
        }
        return response['arrayBuffer']();
      }).catch(function () {
          return getBinary(binaryFile);
      });
    }
    else {
      if (readAsync) {
        // fetch is not available or url is file => try XHR (readAsync uses XHR internally)
        return new Promise(function(resolve, reject) {
          readAsync(binaryFile, function(response) { resolve(new Uint8Array(/** @type{!ArrayBuffer} */(response))) }, reject)
        });
      }
    }
  }

  // Otherwise, getBinary should be able to get it synchronously
  return Promise.resolve().then(function() { return getBinary(binaryFile); });
}

function instantiateArrayBuffer(binaryFile, imports, receiver) {
  return getBinaryPromise(binaryFile).then(function(binary) {
    return WebAssembly.instantiate(binary, imports);
  }).then(function (instance) {
    return instance;
  }).then(receiver, function(reason) {
    err('failed to asynchronously prepare wasm: ' + reason);

    // Warn on some common problems.
    if (isFileURI(wasmBinaryFile)) {
      err('warning: Loading from a file URI (' + wasmBinaryFile + ') is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing');
    }
    abort(reason);
  });
}

function instantiateAsync(binary, binaryFile, imports, callback) {
  if (!binary &&
      typeof WebAssembly.instantiateStreaming == 'function' &&
      !isDataURI(binaryFile) &&
      // Don't use streaming for file:// delivered objects in a webview, fetch them synchronously.
      !isFileURI(binaryFile) &&
      // Avoid instantiateStreaming() on Node.js environment for now, as while
      // Node.js v18.1.0 implements it, it does not have a full fetch()
      // implementation yet.
      //
      // Reference:
      //   https://github.com/emscripten-core/emscripten/pull/16917
      !ENVIRONMENT_IS_NODE &&
      typeof fetch == 'function') {
    return fetch(binaryFile, { credentials: 'same-origin' }).then(function(response) {
      // Suppress closure warning here since the upstream definition for
      // instantiateStreaming only allows Promise<Repsponse> rather than
      // an actual Response.
      // TODO(https://github.com/google/closure-compiler/pull/3913): Remove if/when upstream closure is fixed.
      /** @suppress {checkTypes} */
      var result = WebAssembly.instantiateStreaming(response, imports);

      return result.then(
        callback,
        function(reason) {
          // We expect the most common failure cause to be a bad MIME type for the binary,
          // in which case falling back to ArrayBuffer instantiation should work.
          err('wasm streaming compile failed: ' + reason);
          err('falling back to ArrayBuffer instantiation');
          return instantiateArrayBuffer(binaryFile, imports, callback);
        });
    });
  } else {
    return instantiateArrayBuffer(binaryFile, imports, callback);
  }
}

// Create the wasm instance.
// Receives the wasm imports, returns the exports.
function createWasm() {
  // prepare imports
  var info = {
    'env': wasmImports,
    'wasi_snapshot_preview1': wasmImports,
  };
  // Load the wasm module and create an instance of using native support in the JS engine.
  // handle a generated wasm instance, receiving its exports and
  // performing other necessary setup
  /** @param {WebAssembly.Module=} module*/
  function receiveInstance(instance, module) {
    var exports = instance.exports;

    Module['asm'] = exports;

    wasmMemory = Module['asm']['memory'];
    assert(wasmMemory, "memory not found in wasm exports");
    // This assertion doesn't hold when emscripten is run in --post-link
    // mode.
    // TODO(sbc): Read INITIAL_MEMORY out of the wasm file in post-link mode.
    //assert(wasmMemory.buffer.byteLength === 16777216);
    updateMemoryViews();

    wasmTable = Module['asm']['__indirect_function_table'];
    assert(wasmTable, "table not found in wasm exports");

    addOnInit(Module['asm']['__wasm_call_ctors']);

    removeRunDependency('wasm-instantiate');

    return exports;
  }
  // wait for the pthread pool (if any)
  addRunDependency('wasm-instantiate');

  // Prefer streaming instantiation if available.
  // Async compilation can be confusing when an error on the page overwrites Module
  // (for example, if the order of elements is wrong, and the one defining Module is
  // later), so we save Module and check it later.
  var trueModule = Module;
  function receiveInstantiationResult(result) {
    // 'result' is a ResultObject object which has both the module and instance.
    // receiveInstance() will swap in the exports (to Module.asm) so they can be called
    assert(Module === trueModule, 'the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?');
    trueModule = null;
    // TODO: Due to Closure regression https://github.com/google/closure-compiler/issues/3193, the above line no longer optimizes out down to the following line.
    // When the regression is fixed, can restore the above PTHREADS-enabled path.
    receiveInstance(result['instance']);
  }

  // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
  // to manually instantiate the Wasm module themselves. This allows pages to
  // run the instantiation parallel to any other async startup actions they are
  // performing.
  // Also pthreads and wasm workers initialize the wasm instance through this
  // path.
  if (Module['instantiateWasm']) {

    try {
      return Module['instantiateWasm'](info, receiveInstance);
    } catch(e) {
      err('Module.instantiateWasm callback failed with error: ' + e);
        // If instantiation fails, reject the module ready promise.
        readyPromiseReject(e);
    }
  }

  // If instantiation fails, reject the module ready promise.
  instantiateAsync(wasmBinary, wasmBinaryFile, info, receiveInstantiationResult).catch(readyPromiseReject);
  return {}; // no exports yet; we'll fill them in later
}

// Globals used by JS i64 conversions (see makeSetValue)
var tempDouble;
var tempI64;

// include: runtime_debug.js
function legacyModuleProp(prop, newName) {
  if (!Object.getOwnPropertyDescriptor(Module, prop)) {
    Object.defineProperty(Module, prop, {
      configurable: true,
      get: function() {
        abort('Module.' + prop + ' has been replaced with plain ' + newName + ' (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)');
      }
    });
  }
}

function ignoredModuleProp(prop) {
  if (Object.getOwnPropertyDescriptor(Module, prop)) {
    abort('`Module.' + prop + '` was supplied but `' + prop + '` not included in INCOMING_MODULE_JS_API');
  }
}

// forcing the filesystem exports a few things by default
function isExportedByForceFilesystem(name) {
  return name === 'FS_createPath' ||
         name === 'FS_createDataFile' ||
         name === 'FS_createPreloadedFile' ||
         name === 'FS_unlink' ||
         name === 'addRunDependency' ||
         // The old FS has some functionality that WasmFS lacks.
         name === 'FS_createLazyFile' ||
         name === 'FS_createDevice' ||
         name === 'removeRunDependency';
}

function missingGlobal(sym, msg) {
  if (typeof globalThis !== 'undefined') {
    Object.defineProperty(globalThis, sym, {
      configurable: true,
      get: function() {
        warnOnce('`' + sym + '` is not longer defined by emscripten. ' + msg);
        return undefined;
      }
    });
  }
}

missingGlobal('buffer', 'Please use HEAP8.buffer or wasmMemory.buffer');

function missingLibrarySymbol(sym) {
  if (typeof globalThis !== 'undefined' && !Object.getOwnPropertyDescriptor(globalThis, sym)) {
    Object.defineProperty(globalThis, sym, {
      configurable: true,
      get: function() {
        // Can't `abort()` here because it would break code that does runtime
        // checks.  e.g. `if (typeof SDL === 'undefined')`.
        var msg = '`' + sym + '` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line';
        // DEFAULT_LIBRARY_FUNCS_TO_INCLUDE requires the name as it appears in
        // library.js, which means $name for a JS name with no prefix, or name
        // for a JS name like _name.
        var librarySymbol = sym;
        if (!librarySymbol.startsWith('_')) {
          librarySymbol = '$' + sym;
        }
        msg += " (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE=" + librarySymbol + ")";
        if (isExportedByForceFilesystem(sym)) {
          msg += '. Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you';
        }
        warnOnce(msg);
        return undefined;
      }
    });
  }
  // Any symbol that is not included from the JS libary is also (by definition)
  // not exported on the Module object.
  unexportedRuntimeSymbol(sym);
}

function unexportedRuntimeSymbol(sym) {
  if (!Object.getOwnPropertyDescriptor(Module, sym)) {
    Object.defineProperty(Module, sym, {
      configurable: true,
      get: function() {
        var msg = "'" + sym + "' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)";
        if (isExportedByForceFilesystem(sym)) {
          msg += '. Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you';
        }
        abort(msg);
      }
    });
  }
}

// Used by XXXXX_DEBUG settings to output debug messages.
function dbg(text) {
  // TODO(sbc): Make this configurable somehow.  Its not always convenient for
  // logging to show up as errors.
  console.error(text);
}

// end include: runtime_debug.js
// === Body ===

var ASM_CONSTS = {
  493456: ($0) => { throw 'Zydis error: ' + $0.toString(16); },  
 493501: ($0) => { throw 'Zydis error: ' + $0.toString(16); },  
 493546: ($0) => { throw 'Zydis error: ' + $0.toString(16); },  
 493591: ($0) => { throw 'Zydis error: ' + $0.toString(16); },  
 493636: ($0) => { throw 'Zydis error: ' + $0.toString(16); },  
 493681: ($0) => { throw 'Zydis error: ' + $0.toString(16); },  
 493726: ($0) => { throw 'Zydis error: ' + $0.toString(16); },  
 493771: ($0) => { throw 'Zydis error: ' + $0.toString(16); },  
 493816: ($0) => { throw 'Zydis error: ' + $0.toString(16); },  
 493861: ($0) => { throw 'Zydis error: ' + $0.toString(16); },  
 493906: ($0) => { throw 'Zydis error: ' + $0.toString(16); }
};



// end include: preamble.js

  /** @constructor */
  function ExitStatus(status) {
      this.name = 'ExitStatus';
      this.message = 'Program terminated with exit(' + status + ')';
      this.status = status;
    }

  function callRuntimeCallbacks(callbacks) {
      while (callbacks.length > 0) {
        // Pass the module as the first argument.
        callbacks.shift()(Module);
      }
    }

  
    /**
     * @param {number} ptr
     * @param {string} type
     */
  function getValue(ptr, type = 'i8') {
    if (type.endsWith('*')) type = '*';
    switch (type) {
      case 'i1': return HEAP8[((ptr)>>0)];
      case 'i8': return HEAP8[((ptr)>>0)];
      case 'i16': return HEAP16[((ptr)>>1)];
      case 'i32': return HEAP32[((ptr)>>2)];
      case 'i64': return HEAP64[((ptr)>>3)];
      case 'float': return HEAPF32[((ptr)>>2)];
      case 'double': return HEAPF64[((ptr)>>3)];
      case '*': return HEAPU32[((ptr)>>2)];
      default: abort('invalid type for getValue: ' + type);
    }
  }

  function ptrToString(ptr) {
      assert(typeof ptr === 'number');
      return '0x' + ptr.toString(16).padStart(8, '0');
    }

  
    /**
     * @param {number} ptr
     * @param {number} value
     * @param {string} type
     */
  function setValue(ptr, value, type = 'i8') {
    if (type.endsWith('*')) type = '*';
    switch (type) {
      case 'i1': HEAP8[((ptr)>>0)] = value; break;
      case 'i8': HEAP8[((ptr)>>0)] = value; break;
      case 'i16': HEAP16[((ptr)>>1)] = value; break;
      case 'i32': HEAP32[((ptr)>>2)] = value; break;
      case 'i64': (tempI64 = [value>>>0,(tempDouble=value,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((ptr)>>2)] = tempI64[0],HEAP32[(((ptr)+(4))>>2)] = tempI64[1]); break;
      case 'float': HEAPF32[((ptr)>>2)] = value; break;
      case 'double': HEAPF64[((ptr)>>3)] = value; break;
      case '*': HEAPU32[((ptr)>>2)] = value; break;
      default: abort('invalid type for setValue: ' + type);
    }
  }

  function warnOnce(text) {
      if (!warnOnce.shown) warnOnce.shown = {};
      if (!warnOnce.shown[text]) {
        warnOnce.shown[text] = 1;
        if (ENVIRONMENT_IS_NODE) text = 'warning: ' + text;
        err(text);
      }
    }

  var readEmAsmArgsArray = [];
  function readEmAsmArgs(sigPtr, buf) {
      // Nobody should have mutated _readEmAsmArgsArray underneath us to be something else than an array.
      assert(Array.isArray(readEmAsmArgsArray));
      // The input buffer is allocated on the stack, so it must be stack-aligned.
      assert(buf % 16 == 0);
      readEmAsmArgsArray.length = 0;
      var ch;
      // Most arguments are i32s, so shift the buffer pointer so it is a plain
      // index into HEAP32.
      buf >>= 2;
      while (ch = HEAPU8[sigPtr++]) {
        var chr = String.fromCharCode(ch);
        var validChars = ['d', 'f', 'i'];
        // In WASM_BIGINT mode we support passing i64 values as bigint.
        validChars.push('j');
        assert(validChars.includes(chr), 'Invalid character ' + ch + '("' + chr + '") in readEmAsmArgs! Use only [' + validChars + '], and do not specify "v" for void return argument.');
        // Floats are always passed as doubles, and doubles and int64s take up 8
        // bytes (two 32-bit slots) in memory, align reads to these:
        buf += (ch != 105/*i*/) & buf;
        readEmAsmArgsArray.push(
          ch == 105/*i*/ ? HEAP32[buf] :
         (ch == 106/*j*/ ? HEAP64 : HEAPF64)[buf++ >> 1]
        );
        ++buf;
      }
      return readEmAsmArgsArray;
    }
  function runEmAsmFunction(code, sigPtr, argbuf) {
      var args = readEmAsmArgs(sigPtr, argbuf);
      if (!ASM_CONSTS.hasOwnProperty(code)) abort('No EM_ASM constant found at address ' + code);
      return ASM_CONSTS[code].apply(null, args);
    }
  function _emscripten_asm_const_int(code, sigPtr, argbuf) {
      return runEmAsmFunction(code, sigPtr, argbuf);
    }

  function getHeapMax() {
      return HEAPU8.length;
    }
  
  function abortOnCannotGrowMemory(requestedSize) {
      abort('Cannot enlarge memory arrays to size ' + requestedSize + ' bytes (OOM). Either (1) compile with -sINITIAL_MEMORY=X with X higher than the current value ' + HEAP8.length + ', (2) compile with -sALLOW_MEMORY_GROWTH which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with -sABORTING_MALLOC=0');
    }
  function _emscripten_resize_heap(requestedSize) {
      var oldSize = HEAPU8.length;
      requestedSize = requestedSize >>> 0;
      abortOnCannotGrowMemory(requestedSize);
    }

  
  var SYSCALLS = {varargs:undefined,get:function() {
        assert(SYSCALLS.varargs != undefined);
        SYSCALLS.varargs += 4;
        var ret = HEAP32[(((SYSCALLS.varargs)-(4))>>2)];
        return ret;
      },getStr:function(ptr) {
        var ret = UTF8ToString(ptr);
        return ret;
      }};
  function _proc_exit(code) {
      EXITSTATUS = code;
      if (!keepRuntimeAlive()) {
        if (Module['onExit']) Module['onExit'](code);
        ABORT = true;
      }
      quit_(code, new ExitStatus(code));
    }
  /** @param {boolean|number=} implicit */
  function exitJS(status, implicit) {
      EXITSTATUS = status;
  
      checkUnflushedContent();
  
      // if exit() was called explicitly, warn the user if the runtime isn't actually being shut down
      if (keepRuntimeAlive() && !implicit) {
        var msg = 'program exited (with status: ' + status + '), but keepRuntimeAlive() is set (counter=' + runtimeKeepaliveCounter + ') due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)';
        readyPromiseReject(msg);
        err(msg);
      }
  
      _proc_exit(status);
    }

  function handleException(e) {
      // Certain exception types we do not treat as errors since they are used for
      // internal control flow.
      // 1. ExitStatus, which is thrown by exit()
      // 2. "unwind", which is thrown by emscripten_unwind_to_js_event_loop() and others
      //    that wish to return to JS event loop.
      if (e instanceof ExitStatus || e == 'unwind') {
        return EXITSTATUS;
      }
      checkStackCookie();
      if (e instanceof WebAssembly.RuntimeError) {
        if (_emscripten_stack_get_current() <= 0) {
          err('Stack overflow detected.  You can try increasing -sSTACK_SIZE (currently set to ' + 65536 + ')');
        }
      }
      quit_(1, e);
    }
function checkIncomingModuleAPI() {
  ignoredModuleProp('fetchSettings');
}
var wasmImports = {
  "emscripten_asm_const_int": _emscripten_asm_const_int,
  "emscripten_resize_heap": _emscripten_resize_heap
};
var asm = createWasm();
/** @type {function(...*):?} */
var ___wasm_call_ctors = createExportWrapper("__wasm_call_ctors");
/** @type {function(...*):?} */
var _zyjsNewDecoder = Module["_zyjsNewDecoder"] = createExportWrapper("zyjsNewDecoder");
/** @type {function(...*):?} */
var _malloc = Module["_malloc"] = createExportWrapper("malloc");
/** @type {function(...*):?} */
var _free = Module["_free"] = createExportWrapper("free");
/** @type {function(...*):?} */
var _zyjsDecoderSetMode = Module["_zyjsDecoderSetMode"] = createExportWrapper("zyjsDecoderSetMode");
/** @type {function(...*):?} */
var _zyjsDecoderDecode = Module["_zyjsDecoderDecode"] = createExportWrapper("zyjsDecoderDecode");
/** @type {function(...*):?} */
var _zyjsNewEncReq = Module["_zyjsNewEncReq"] = createExportWrapper("zyjsNewEncReq");
/** @type {function(...*):?} */
var _zyjsEncReqEncode = Module["_zyjsEncReqEncode"] = createExportWrapper("zyjsEncReqEncode");
/** @type {function(...*):?} */
var _zyjsEncReqEncodeAbs = Module["_zyjsEncReqEncodeAbs"] = createExportWrapper("zyjsEncReqEncodeAbs");
/** @type {function(...*):?} */
var _zyjsEncNop = Module["_zyjsEncNop"] = createExportWrapper("zyjsEncNop");
/** @type {function(...*):?} */
var _zyjsNewFormatter = Module["_zyjsNewFormatter"] = createExportWrapper("zyjsNewFormatter");
/** @type {function(...*):?} */
var _zyjsFormatterSetProperty = Module["_zyjsFormatterSetProperty"] = createExportWrapper("zyjsFormatterSetProperty");
/** @type {function(...*):?} */
var _zyjsFormatterFormatInsn = Module["_zyjsFormatterFormatInsn"] = createExportWrapper("zyjsFormatterFormatInsn");
/** @type {function(...*):?} */
var _zyjsFormatterFormatOperand = Module["_zyjsFormatterFormatOperand"] = createExportWrapper("zyjsFormatterFormatOperand");
/** @type {function(...*):?} */
var _zyjsRegisterEncode = Module["_zyjsRegisterEncode"] = createExportWrapper("zyjsRegisterEncode");
/** @type {function(...*):?} */
var _zyjsRegisterGetId = Module["_zyjsRegisterGetId"] = createExportWrapper("zyjsRegisterGetId");
/** @type {function(...*):?} */
var _zyjsRegisterGetClass = Module["_zyjsRegisterGetClass"] = createExportWrapper("zyjsRegisterGetClass");
/** @type {function(...*):?} */
var _zyjsRegisterGetWidth = Module["_zyjsRegisterGetWidth"] = createExportWrapper("zyjsRegisterGetWidth");
/** @type {function(...*):?} */
var _zyjsRegisterClassGetWidth = Module["_zyjsRegisterClassGetWidth"] = createExportWrapper("zyjsRegisterClassGetWidth");
/** @type {function(...*):?} */
var _zyjsRegisterGetLargestEnclosing = Module["_zyjsRegisterGetLargestEnclosing"] = createExportWrapper("zyjsRegisterGetLargestEnclosing");
/** @type {function(...*):?} */
var _zyjsDecInsnGet_mnemonic = Module["_zyjsDecInsnGet_mnemonic"] = createExportWrapper("zyjsDecInsnGet_mnemonic");
/** @type {function(...*):?} */
var _zyjsDecInsnSet_mnemonic = Module["_zyjsDecInsnSet_mnemonic"] = createExportWrapper("zyjsDecInsnSet_mnemonic");
/** @type {function(...*):?} */
var _zyjsDecInsnGet_length = Module["_zyjsDecInsnGet_length"] = createExportWrapper("zyjsDecInsnGet_length");
/** @type {function(...*):?} */
var _zyjsDecInsnSet_length = Module["_zyjsDecInsnSet_length"] = createExportWrapper("zyjsDecInsnSet_length");
/** @type {function(...*):?} */
var _zyjsDecInsnGet_encoding = Module["_zyjsDecInsnGet_encoding"] = createExportWrapper("zyjsDecInsnGet_encoding");
/** @type {function(...*):?} */
var _zyjsDecInsnSet_encoding = Module["_zyjsDecInsnSet_encoding"] = createExportWrapper("zyjsDecInsnSet_encoding");
/** @type {function(...*):?} */
var _zyjsDecInsnGet_opcodeMap = Module["_zyjsDecInsnGet_opcodeMap"] = createExportWrapper("zyjsDecInsnGet_opcodeMap");
/** @type {function(...*):?} */
var _zyjsDecInsnSet_opcodeMap = Module["_zyjsDecInsnSet_opcodeMap"] = createExportWrapper("zyjsDecInsnSet_opcodeMap");
/** @type {function(...*):?} */
var _zyjsDecInsnGet_opcode = Module["_zyjsDecInsnGet_opcode"] = createExportWrapper("zyjsDecInsnGet_opcode");
/** @type {function(...*):?} */
var _zyjsDecInsnSet_opcode = Module["_zyjsDecInsnSet_opcode"] = createExportWrapper("zyjsDecInsnSet_opcode");
/** @type {function(...*):?} */
var _zyjsDecInsnGet_stackWidth = Module["_zyjsDecInsnGet_stackWidth"] = createExportWrapper("zyjsDecInsnGet_stackWidth");
/** @type {function(...*):?} */
var _zyjsDecInsnSet_stackWidth = Module["_zyjsDecInsnSet_stackWidth"] = createExportWrapper("zyjsDecInsnSet_stackWidth");
/** @type {function(...*):?} */
var _zyjsDecInsnGet_operandWidth = Module["_zyjsDecInsnGet_operandWidth"] = createExportWrapper("zyjsDecInsnGet_operandWidth");
/** @type {function(...*):?} */
var _zyjsDecInsnSet_operandWidth = Module["_zyjsDecInsnSet_operandWidth"] = createExportWrapper("zyjsDecInsnSet_operandWidth");
/** @type {function(...*):?} */
var _zyjsDecInsnGet_addressWidth = Module["_zyjsDecInsnGet_addressWidth"] = createExportWrapper("zyjsDecInsnGet_addressWidth");
/** @type {function(...*):?} */
var _zyjsDecInsnSet_addressWidth = Module["_zyjsDecInsnSet_addressWidth"] = createExportWrapper("zyjsDecInsnSet_addressWidth");
/** @type {function(...*):?} */
var _zyjsDecInsnGet_operandCount = Module["_zyjsDecInsnGet_operandCount"] = createExportWrapper("zyjsDecInsnGet_operandCount");
/** @type {function(...*):?} */
var _zyjsDecInsnSet_operandCount = Module["_zyjsDecInsnSet_operandCount"] = createExportWrapper("zyjsDecInsnSet_operandCount");
/** @type {function(...*):?} */
var _zyjsDecInsnGet_visibleOperandCount = Module["_zyjsDecInsnGet_visibleOperandCount"] = createExportWrapper("zyjsDecInsnGet_visibleOperandCount");
/** @type {function(...*):?} */
var _zyjsDecInsnSet_visibleOperandCount = Module["_zyjsDecInsnSet_visibleOperandCount"] = createExportWrapper("zyjsDecInsnSet_visibleOperandCount");
/** @type {function(...*):?} */
var _zyjsDecInsnGet_attributes = Module["_zyjsDecInsnGet_attributes"] = createExportWrapper("zyjsDecInsnGet_attributes");
/** @type {function(...*):?} */
var _zyjsDecInsnSet_attributes = Module["_zyjsDecInsnSet_attributes"] = createExportWrapper("zyjsDecInsnSet_attributes");
/** @type {function(...*):?} */
var _zyjsDecInsnGet_cpuFlagsPtr = Module["_zyjsDecInsnGet_cpuFlagsPtr"] = createExportWrapper("zyjsDecInsnGet_cpuFlagsPtr");
/** @type {function(...*):?} */
var _zyjsDecInsnSet_cpuFlagsPtr = Module["_zyjsDecInsnSet_cpuFlagsPtr"] = createExportWrapper("zyjsDecInsnSet_cpuFlagsPtr");
/** @type {function(...*):?} */
var _zyjsDecInsnGet_fpuFlagsPtr = Module["_zyjsDecInsnGet_fpuFlagsPtr"] = createExportWrapper("zyjsDecInsnGet_fpuFlagsPtr");
/** @type {function(...*):?} */
var _zyjsDecInsnSet_fpuFlagsPtr = Module["_zyjsDecInsnSet_fpuFlagsPtr"] = createExportWrapper("zyjsDecInsnSet_fpuFlagsPtr");
/** @type {function(...*):?} */
var _zyjsDecInsnGet_category = Module["_zyjsDecInsnGet_category"] = createExportWrapper("zyjsDecInsnGet_category");
/** @type {function(...*):?} */
var _zyjsDecInsnSet_category = Module["_zyjsDecInsnSet_category"] = createExportWrapper("zyjsDecInsnSet_category");
/** @type {function(...*):?} */
var _zyjsDecInsnGet_isaSet = Module["_zyjsDecInsnGet_isaSet"] = createExportWrapper("zyjsDecInsnGet_isaSet");
/** @type {function(...*):?} */
var _zyjsDecInsnSet_isaSet = Module["_zyjsDecInsnSet_isaSet"] = createExportWrapper("zyjsDecInsnSet_isaSet");
/** @type {function(...*):?} */
var _zyjsDecInsnGet_isaExt = Module["_zyjsDecInsnGet_isaExt"] = createExportWrapper("zyjsDecInsnGet_isaExt");
/** @type {function(...*):?} */
var _zyjsDecInsnSet_isaExt = Module["_zyjsDecInsnSet_isaExt"] = createExportWrapper("zyjsDecInsnSet_isaExt");
/** @type {function(...*):?} */
var _zyjsDecInsnGet_branchType = Module["_zyjsDecInsnGet_branchType"] = createExportWrapper("zyjsDecInsnGet_branchType");
/** @type {function(...*):?} */
var _zyjsDecInsnSet_branchType = Module["_zyjsDecInsnSet_branchType"] = createExportWrapper("zyjsDecInsnSet_branchType");
/** @type {function(...*):?} */
var _zyjsDecInsnGet_exceptionClass = Module["_zyjsDecInsnGet_exceptionClass"] = createExportWrapper("zyjsDecInsnGet_exceptionClass");
/** @type {function(...*):?} */
var _zyjsDecInsnSet_exceptionClass = Module["_zyjsDecInsnSet_exceptionClass"] = createExportWrapper("zyjsDecInsnSet_exceptionClass");
/** @type {function(...*):?} */
var _zyjsDecInsnGet_vectorLength = Module["_zyjsDecInsnGet_vectorLength"] = createExportWrapper("zyjsDecInsnGet_vectorLength");
/** @type {function(...*):?} */
var _zyjsDecInsnSet_vectorLength = Module["_zyjsDecInsnSet_vectorLength"] = createExportWrapper("zyjsDecInsnSet_vectorLength");
/** @type {function(...*):?} */
var _zyjsDecInsnGet_maskMode = Module["_zyjsDecInsnGet_maskMode"] = createExportWrapper("zyjsDecInsnGet_maskMode");
/** @type {function(...*):?} */
var _zyjsDecInsnSet_maskMode = Module["_zyjsDecInsnSet_maskMode"] = createExportWrapper("zyjsDecInsnSet_maskMode");
/** @type {function(...*):?} */
var _zyjsDecInsnGet_maskReg = Module["_zyjsDecInsnGet_maskReg"] = createExportWrapper("zyjsDecInsnGet_maskReg");
/** @type {function(...*):?} */
var _zyjsDecInsnSet_maskReg = Module["_zyjsDecInsnSet_maskReg"] = createExportWrapper("zyjsDecInsnSet_maskReg");
/** @type {function(...*):?} */
var _zyjsDecInsnGet_isBroadcastStatic = Module["_zyjsDecInsnGet_isBroadcastStatic"] = createExportWrapper("zyjsDecInsnGet_isBroadcastStatic");
/** @type {function(...*):?} */
var _zyjsDecInsnSet_isBroadcastStatic = Module["_zyjsDecInsnSet_isBroadcastStatic"] = createExportWrapper("zyjsDecInsnSet_isBroadcastStatic");
/** @type {function(...*):?} */
var _zyjsDecInsnGet_broadcastMode = Module["_zyjsDecInsnGet_broadcastMode"] = createExportWrapper("zyjsDecInsnGet_broadcastMode");
/** @type {function(...*):?} */
var _zyjsDecInsnSet_broadcastMode = Module["_zyjsDecInsnSet_broadcastMode"] = createExportWrapper("zyjsDecInsnSet_broadcastMode");
/** @type {function(...*):?} */
var _zyjsDecInsnGet_roundingMode = Module["_zyjsDecInsnGet_roundingMode"] = createExportWrapper("zyjsDecInsnGet_roundingMode");
/** @type {function(...*):?} */
var _zyjsDecInsnSet_roundingMode = Module["_zyjsDecInsnSet_roundingMode"] = createExportWrapper("zyjsDecInsnSet_roundingMode");
/** @type {function(...*):?} */
var _zyjsDecInsnGet_swizzleMode = Module["_zyjsDecInsnGet_swizzleMode"] = createExportWrapper("zyjsDecInsnGet_swizzleMode");
/** @type {function(...*):?} */
var _zyjsDecInsnSet_swizzleMode = Module["_zyjsDecInsnSet_swizzleMode"] = createExportWrapper("zyjsDecInsnSet_swizzleMode");
/** @type {function(...*):?} */
var _zyjsDecInsnGet_conversionMode = Module["_zyjsDecInsnGet_conversionMode"] = createExportWrapper("zyjsDecInsnGet_conversionMode");
/** @type {function(...*):?} */
var _zyjsDecInsnSet_conversionMode = Module["_zyjsDecInsnSet_conversionMode"] = createExportWrapper("zyjsDecInsnSet_conversionMode");
/** @type {function(...*):?} */
var _zyjsDecInsnGet_hasSAE = Module["_zyjsDecInsnGet_hasSAE"] = createExportWrapper("zyjsDecInsnGet_hasSAE");
/** @type {function(...*):?} */
var _zyjsDecInsnSet_hasSAE = Module["_zyjsDecInsnSet_hasSAE"] = createExportWrapper("zyjsDecInsnSet_hasSAE");
/** @type {function(...*):?} */
var _zyjsDecInsnGet_hasEvictionHint = Module["_zyjsDecInsnGet_hasEvictionHint"] = createExportWrapper("zyjsDecInsnGet_hasEvictionHint");
/** @type {function(...*):?} */
var _zyjsDecInsnSet_hasEvictionHint = Module["_zyjsDecInsnSet_hasEvictionHint"] = createExportWrapper("zyjsDecInsnSet_hasEvictionHint");
/** @type {function(...*):?} */
var _zyjsDecInsnRefOperand = Module["_zyjsDecInsnRefOperand"] = createExportWrapper("zyjsDecInsnRefOperand");
/** @type {function(...*):?} */
var _zyjsDecOpGet_id = Module["_zyjsDecOpGet_id"] = createExportWrapper("zyjsDecOpGet_id");
/** @type {function(...*):?} */
var _zyjsDecOpSet_id = Module["_zyjsDecOpSet_id"] = createExportWrapper("zyjsDecOpSet_id");
/** @type {function(...*):?} */
var _zyjsDecOpGet_visiblity = Module["_zyjsDecOpGet_visiblity"] = createExportWrapper("zyjsDecOpGet_visiblity");
/** @type {function(...*):?} */
var _zyjsDecOpSet_visiblity = Module["_zyjsDecOpSet_visiblity"] = createExportWrapper("zyjsDecOpSet_visiblity");
/** @type {function(...*):?} */
var _zyjsDecOpGet_actions = Module["_zyjsDecOpGet_actions"] = createExportWrapper("zyjsDecOpGet_actions");
/** @type {function(...*):?} */
var _zyjsDecOpSet_actions = Module["_zyjsDecOpSet_actions"] = createExportWrapper("zyjsDecOpSet_actions");
/** @type {function(...*):?} */
var _zyjsDecOpGet_encoding = Module["_zyjsDecOpGet_encoding"] = createExportWrapper("zyjsDecOpGet_encoding");
/** @type {function(...*):?} */
var _zyjsDecOpSet_encoding = Module["_zyjsDecOpSet_encoding"] = createExportWrapper("zyjsDecOpSet_encoding");
/** @type {function(...*):?} */
var _zyjsDecOpGet_size = Module["_zyjsDecOpGet_size"] = createExportWrapper("zyjsDecOpGet_size");
/** @type {function(...*):?} */
var _zyjsDecOpSet_size = Module["_zyjsDecOpSet_size"] = createExportWrapper("zyjsDecOpSet_size");
/** @type {function(...*):?} */
var _zyjsDecOpGet_elementType = Module["_zyjsDecOpGet_elementType"] = createExportWrapper("zyjsDecOpGet_elementType");
/** @type {function(...*):?} */
var _zyjsDecOpSet_elementType = Module["_zyjsDecOpSet_elementType"] = createExportWrapper("zyjsDecOpSet_elementType");
/** @type {function(...*):?} */
var _zyjsDecOpGet_elementSize = Module["_zyjsDecOpGet_elementSize"] = createExportWrapper("zyjsDecOpGet_elementSize");
/** @type {function(...*):?} */
var _zyjsDecOpSet_elementSize = Module["_zyjsDecOpSet_elementSize"] = createExportWrapper("zyjsDecOpSet_elementSize");
/** @type {function(...*):?} */
var _zyjsDecOpGet_elementCount = Module["_zyjsDecOpGet_elementCount"] = createExportWrapper("zyjsDecOpGet_elementCount");
/** @type {function(...*):?} */
var _zyjsDecOpSet_elementCount = Module["_zyjsDecOpSet_elementCount"] = createExportWrapper("zyjsDecOpSet_elementCount");
/** @type {function(...*):?} */
var _zyjsDecOpGet_attributes = Module["_zyjsDecOpGet_attributes"] = createExportWrapper("zyjsDecOpGet_attributes");
/** @type {function(...*):?} */
var _zyjsDecOpSet_attributes = Module["_zyjsDecOpSet_attributes"] = createExportWrapper("zyjsDecOpSet_attributes");
/** @type {function(...*):?} */
var _zyjsDecOpGet_type = Module["_zyjsDecOpGet_type"] = createExportWrapper("zyjsDecOpGet_type");
/** @type {function(...*):?} */
var _zyjsDecOpSet_type = Module["_zyjsDecOpSet_type"] = createExportWrapper("zyjsDecOpSet_type");
/** @type {function(...*):?} */
var _zyjsDecOpGet_immSigned = Module["_zyjsDecOpGet_immSigned"] = createExportWrapper("zyjsDecOpGet_immSigned");
/** @type {function(...*):?} */
var _zyjsDecOpSet_immSigned = Module["_zyjsDecOpSet_immSigned"] = createExportWrapper("zyjsDecOpSet_immSigned");
/** @type {function(...*):?} */
var _zyjsDecOpGet_immRelative = Module["_zyjsDecOpGet_immRelative"] = createExportWrapper("zyjsDecOpGet_immRelative");
/** @type {function(...*):?} */
var _zyjsDecOpSet_immRelative = Module["_zyjsDecOpSet_immRelative"] = createExportWrapper("zyjsDecOpSet_immRelative");
/** @type {function(...*):?} */
var _zyjsDecOpGet_imms = Module["_zyjsDecOpGet_imms"] = createExportWrapper("zyjsDecOpGet_imms");
/** @type {function(...*):?} */
var _zyjsDecOpSet_imms = Module["_zyjsDecOpSet_imms"] = createExportWrapper("zyjsDecOpSet_imms");
/** @type {function(...*):?} */
var _zyjsDecOpGet_immu = Module["_zyjsDecOpGet_immu"] = createExportWrapper("zyjsDecOpGet_immu");
/** @type {function(...*):?} */
var _zyjsDecOpSet_immu = Module["_zyjsDecOpSet_immu"] = createExportWrapper("zyjsDecOpSet_immu");
/** @type {function(...*):?} */
var _zyjsDecOpGet_ptrSeg = Module["_zyjsDecOpGet_ptrSeg"] = createExportWrapper("zyjsDecOpGet_ptrSeg");
/** @type {function(...*):?} */
var _zyjsDecOpSet_ptrSeg = Module["_zyjsDecOpSet_ptrSeg"] = createExportWrapper("zyjsDecOpSet_ptrSeg");
/** @type {function(...*):?} */
var _zyjsDecOpGet_ptrOff = Module["_zyjsDecOpGet_ptrOff"] = createExportWrapper("zyjsDecOpGet_ptrOff");
/** @type {function(...*):?} */
var _zyjsDecOpSet_ptrOff = Module["_zyjsDecOpSet_ptrOff"] = createExportWrapper("zyjsDecOpSet_ptrOff");
/** @type {function(...*):?} */
var _zyjsDecOpGet_regv = Module["_zyjsDecOpGet_regv"] = createExportWrapper("zyjsDecOpGet_regv");
/** @type {function(...*):?} */
var _zyjsDecOpSet_regv = Module["_zyjsDecOpSet_regv"] = createExportWrapper("zyjsDecOpSet_regv");
/** @type {function(...*):?} */
var _zyjsDecOpGet_memType = Module["_zyjsDecOpGet_memType"] = createExportWrapper("zyjsDecOpGet_memType");
/** @type {function(...*):?} */
var _zyjsDecOpSet_memType = Module["_zyjsDecOpSet_memType"] = createExportWrapper("zyjsDecOpSet_memType");
/** @type {function(...*):?} */
var _zyjsDecOpGet_memSeg = Module["_zyjsDecOpGet_memSeg"] = createExportWrapper("zyjsDecOpGet_memSeg");
/** @type {function(...*):?} */
var _zyjsDecOpSet_memSeg = Module["_zyjsDecOpSet_memSeg"] = createExportWrapper("zyjsDecOpSet_memSeg");
/** @type {function(...*):?} */
var _zyjsDecOpGet_memBase = Module["_zyjsDecOpGet_memBase"] = createExportWrapper("zyjsDecOpGet_memBase");
/** @type {function(...*):?} */
var _zyjsDecOpSet_memBase = Module["_zyjsDecOpSet_memBase"] = createExportWrapper("zyjsDecOpSet_memBase");
/** @type {function(...*):?} */
var _zyjsDecOpGet_memIndex = Module["_zyjsDecOpGet_memIndex"] = createExportWrapper("zyjsDecOpGet_memIndex");
/** @type {function(...*):?} */
var _zyjsDecOpSet_memIndex = Module["_zyjsDecOpSet_memIndex"] = createExportWrapper("zyjsDecOpSet_memIndex");
/** @type {function(...*):?} */
var _zyjsDecOpGet_memScale = Module["_zyjsDecOpGet_memScale"] = createExportWrapper("zyjsDecOpGet_memScale");
/** @type {function(...*):?} */
var _zyjsDecOpSet_memScale = Module["_zyjsDecOpSet_memScale"] = createExportWrapper("zyjsDecOpSet_memScale");
/** @type {function(...*):?} */
var _zyjsDecOpGet_memHasDisp = Module["_zyjsDecOpGet_memHasDisp"] = createExportWrapper("zyjsDecOpGet_memHasDisp");
/** @type {function(...*):?} */
var _zyjsDecOpSet_memHasDisp = Module["_zyjsDecOpSet_memHasDisp"] = createExportWrapper("zyjsDecOpSet_memHasDisp");
/** @type {function(...*):?} */
var _zyjsDecOpGet_memDisp = Module["_zyjsDecOpGet_memDisp"] = createExportWrapper("zyjsDecOpGet_memDisp");
/** @type {function(...*):?} */
var _zyjsDecOpSet_memDisp = Module["_zyjsDecOpSet_memDisp"] = createExportWrapper("zyjsDecOpSet_memDisp");
/** @type {function(...*):?} */
var _zyjsEncOpGet_type = Module["_zyjsEncOpGet_type"] = createExportWrapper("zyjsEncOpGet_type");
/** @type {function(...*):?} */
var _zyjsEncOpSet_type = Module["_zyjsEncOpSet_type"] = createExportWrapper("zyjsEncOpSet_type");
/** @type {function(...*):?} */
var _zyjsEncOpGet_imms = Module["_zyjsEncOpGet_imms"] = createExportWrapper("zyjsEncOpGet_imms");
/** @type {function(...*):?} */
var _zyjsEncOpSet_imms = Module["_zyjsEncOpSet_imms"] = createExportWrapper("zyjsEncOpSet_imms");
/** @type {function(...*):?} */
var _zyjsEncOpGet_immu = Module["_zyjsEncOpGet_immu"] = createExportWrapper("zyjsEncOpGet_immu");
/** @type {function(...*):?} */
var _zyjsEncOpSet_immu = Module["_zyjsEncOpSet_immu"] = createExportWrapper("zyjsEncOpSet_immu");
/** @type {function(...*):?} */
var _zyjsEncOpGet_ptrSeg = Module["_zyjsEncOpGet_ptrSeg"] = createExportWrapper("zyjsEncOpGet_ptrSeg");
/** @type {function(...*):?} */
var _zyjsEncOpSet_ptrSeg = Module["_zyjsEncOpSet_ptrSeg"] = createExportWrapper("zyjsEncOpSet_ptrSeg");
/** @type {function(...*):?} */
var _zyjsEncOpGet_ptrOff = Module["_zyjsEncOpGet_ptrOff"] = createExportWrapper("zyjsEncOpGet_ptrOff");
/** @type {function(...*):?} */
var _zyjsEncOpSet_ptrOff = Module["_zyjsEncOpSet_ptrOff"] = createExportWrapper("zyjsEncOpSet_ptrOff");
/** @type {function(...*):?} */
var _zyjsEncOpGet_regv = Module["_zyjsEncOpGet_regv"] = createExportWrapper("zyjsEncOpGet_regv");
/** @type {function(...*):?} */
var _zyjsEncOpSet_regv = Module["_zyjsEncOpSet_regv"] = createExportWrapper("zyjsEncOpSet_regv");
/** @type {function(...*):?} */
var _zyjsEncOpGet_regIs4 = Module["_zyjsEncOpGet_regIs4"] = createExportWrapper("zyjsEncOpGet_regIs4");
/** @type {function(...*):?} */
var _zyjsEncOpSet_regIs4 = Module["_zyjsEncOpSet_regIs4"] = createExportWrapper("zyjsEncOpSet_regIs4");
/** @type {function(...*):?} */
var _zyjsEncOpGet_memBase = Module["_zyjsEncOpGet_memBase"] = createExportWrapper("zyjsEncOpGet_memBase");
/** @type {function(...*):?} */
var _zyjsEncOpSet_memBase = Module["_zyjsEncOpSet_memBase"] = createExportWrapper("zyjsEncOpSet_memBase");
/** @type {function(...*):?} */
var _zyjsEncOpGet_memIndex = Module["_zyjsEncOpGet_memIndex"] = createExportWrapper("zyjsEncOpGet_memIndex");
/** @type {function(...*):?} */
var _zyjsEncOpSet_memIndex = Module["_zyjsEncOpSet_memIndex"] = createExportWrapper("zyjsEncOpSet_memIndex");
/** @type {function(...*):?} */
var _zyjsEncOpGet_memScale = Module["_zyjsEncOpGet_memScale"] = createExportWrapper("zyjsEncOpGet_memScale");
/** @type {function(...*):?} */
var _zyjsEncOpSet_memScale = Module["_zyjsEncOpSet_memScale"] = createExportWrapper("zyjsEncOpSet_memScale");
/** @type {function(...*):?} */
var _zyjsEncOpGet_memDisp = Module["_zyjsEncOpGet_memDisp"] = createExportWrapper("zyjsEncOpGet_memDisp");
/** @type {function(...*):?} */
var _zyjsEncOpSet_memDisp = Module["_zyjsEncOpSet_memDisp"] = createExportWrapper("zyjsEncOpSet_memDisp");
/** @type {function(...*):?} */
var _zyjsEncReqGet_machineMode = Module["_zyjsEncReqGet_machineMode"] = createExportWrapper("zyjsEncReqGet_machineMode");
/** @type {function(...*):?} */
var _zyjsEncReqSet_machineMode = Module["_zyjsEncReqSet_machineMode"] = createExportWrapper("zyjsEncReqSet_machineMode");
/** @type {function(...*):?} */
var _zyjsEncReqGet_allowedEncodings = Module["_zyjsEncReqGet_allowedEncodings"] = createExportWrapper("zyjsEncReqGet_allowedEncodings");
/** @type {function(...*):?} */
var _zyjsEncReqSet_allowedEncodings = Module["_zyjsEncReqSet_allowedEncodings"] = createExportWrapper("zyjsEncReqSet_allowedEncodings");
/** @type {function(...*):?} */
var _zyjsEncReqGet_mnemonic = Module["_zyjsEncReqGet_mnemonic"] = createExportWrapper("zyjsEncReqGet_mnemonic");
/** @type {function(...*):?} */
var _zyjsEncReqSet_mnemonic = Module["_zyjsEncReqSet_mnemonic"] = createExportWrapper("zyjsEncReqSet_mnemonic");
/** @type {function(...*):?} */
var _zyjsEncReqGet_prefixes = Module["_zyjsEncReqGet_prefixes"] = createExportWrapper("zyjsEncReqGet_prefixes");
/** @type {function(...*):?} */
var _zyjsEncReqSet_prefixes = Module["_zyjsEncReqSet_prefixes"] = createExportWrapper("zyjsEncReqSet_prefixes");
/** @type {function(...*):?} */
var _zyjsEncReqGet_branchType = Module["_zyjsEncReqGet_branchType"] = createExportWrapper("zyjsEncReqGet_branchType");
/** @type {function(...*):?} */
var _zyjsEncReqSet_branchType = Module["_zyjsEncReqSet_branchType"] = createExportWrapper("zyjsEncReqSet_branchType");
/** @type {function(...*):?} */
var _zyjsEncReqGet_branchWidth = Module["_zyjsEncReqGet_branchWidth"] = createExportWrapper("zyjsEncReqGet_branchWidth");
/** @type {function(...*):?} */
var _zyjsEncReqSet_branchWidth = Module["_zyjsEncReqSet_branchWidth"] = createExportWrapper("zyjsEncReqSet_branchWidth");
/** @type {function(...*):?} */
var _zyjsEncReqGet_addressSizeHint = Module["_zyjsEncReqGet_addressSizeHint"] = createExportWrapper("zyjsEncReqGet_addressSizeHint");
/** @type {function(...*):?} */
var _zyjsEncReqSet_addressSizeHint = Module["_zyjsEncReqSet_addressSizeHint"] = createExportWrapper("zyjsEncReqSet_addressSizeHint");
/** @type {function(...*):?} */
var _zyjsEncReqGet_operandSizeHint = Module["_zyjsEncReqGet_operandSizeHint"] = createExportWrapper("zyjsEncReqGet_operandSizeHint");
/** @type {function(...*):?} */
var _zyjsEncReqSet_operandSizeHint = Module["_zyjsEncReqSet_operandSizeHint"] = createExportWrapper("zyjsEncReqSet_operandSizeHint");
/** @type {function(...*):?} */
var _zyjsEncReqGet_operandCount = Module["_zyjsEncReqGet_operandCount"] = createExportWrapper("zyjsEncReqGet_operandCount");
/** @type {function(...*):?} */
var _zyjsEncReqSet_operandCount = Module["_zyjsEncReqSet_operandCount"] = createExportWrapper("zyjsEncReqSet_operandCount");
/** @type {function(...*):?} */
var _zyjsEncReqGet_evexBroadcast = Module["_zyjsEncReqGet_evexBroadcast"] = createExportWrapper("zyjsEncReqGet_evexBroadcast");
/** @type {function(...*):?} */
var _zyjsEncReqSet_evexBroadcast = Module["_zyjsEncReqSet_evexBroadcast"] = createExportWrapper("zyjsEncReqSet_evexBroadcast");
/** @type {function(...*):?} */
var _zyjsEncReqGet_evexRounding = Module["_zyjsEncReqGet_evexRounding"] = createExportWrapper("zyjsEncReqGet_evexRounding");
/** @type {function(...*):?} */
var _zyjsEncReqSet_evexRounding = Module["_zyjsEncReqSet_evexRounding"] = createExportWrapper("zyjsEncReqSet_evexRounding");
/** @type {function(...*):?} */
var _zyjsEncReqGet_evexSAE = Module["_zyjsEncReqGet_evexSAE"] = createExportWrapper("zyjsEncReqGet_evexSAE");
/** @type {function(...*):?} */
var _zyjsEncReqSet_evexSAE = Module["_zyjsEncReqSet_evexSAE"] = createExportWrapper("zyjsEncReqSet_evexSAE");
/** @type {function(...*):?} */
var _zyjsEncReqGet_evexZeroingMask = Module["_zyjsEncReqGet_evexZeroingMask"] = createExportWrapper("zyjsEncReqGet_evexZeroingMask");
/** @type {function(...*):?} */
var _zyjsEncReqSet_evexZeroingMask = Module["_zyjsEncReqSet_evexZeroingMask"] = createExportWrapper("zyjsEncReqSet_evexZeroingMask");
/** @type {function(...*):?} */
var _zyjsEncReqGet_mvexBroadcast = Module["_zyjsEncReqGet_mvexBroadcast"] = createExportWrapper("zyjsEncReqGet_mvexBroadcast");
/** @type {function(...*):?} */
var _zyjsEncReqSet_mvexBroadcast = Module["_zyjsEncReqSet_mvexBroadcast"] = createExportWrapper("zyjsEncReqSet_mvexBroadcast");
/** @type {function(...*):?} */
var _zyjsEncReqGet_mvexRounding = Module["_zyjsEncReqGet_mvexRounding"] = createExportWrapper("zyjsEncReqGet_mvexRounding");
/** @type {function(...*):?} */
var _zyjsEncReqSet_mvexRounding = Module["_zyjsEncReqSet_mvexRounding"] = createExportWrapper("zyjsEncReqSet_mvexRounding");
/** @type {function(...*):?} */
var _zyjsEncReqGet_mvexSAE = Module["_zyjsEncReqGet_mvexSAE"] = createExportWrapper("zyjsEncReqGet_mvexSAE");
/** @type {function(...*):?} */
var _zyjsEncReqSet_mvexSAE = Module["_zyjsEncReqSet_mvexSAE"] = createExportWrapper("zyjsEncReqSet_mvexSAE");
/** @type {function(...*):?} */
var _zyjsEncReqGet_mvexConversion = Module["_zyjsEncReqGet_mvexConversion"] = createExportWrapper("zyjsEncReqGet_mvexConversion");
/** @type {function(...*):?} */
var _zyjsEncReqSet_mvexConversion = Module["_zyjsEncReqSet_mvexConversion"] = createExportWrapper("zyjsEncReqSet_mvexConversion");
/** @type {function(...*):?} */
var _zyjsEncReqGet_mvexSwizzle = Module["_zyjsEncReqGet_mvexSwizzle"] = createExportWrapper("zyjsEncReqGet_mvexSwizzle");
/** @type {function(...*):?} */
var _zyjsEncReqSet_mvexSwizzle = Module["_zyjsEncReqSet_mvexSwizzle"] = createExportWrapper("zyjsEncReqSet_mvexSwizzle");
/** @type {function(...*):?} */
var _zyjsEncReqGet_mvexEvictionHint = Module["_zyjsEncReqGet_mvexEvictionHint"] = createExportWrapper("zyjsEncReqGet_mvexEvictionHint");
/** @type {function(...*):?} */
var _zyjsEncReqSet_mvexEvictionHint = Module["_zyjsEncReqSet_mvexEvictionHint"] = createExportWrapper("zyjsEncReqSet_mvexEvictionHint");
/** @type {function(...*):?} */
var _zyjsEncReqRefOperand = Module["_zyjsEncReqRefOperand"] = createExportWrapper("zyjsEncReqRefOperand");
/** @type {function(...*):?} */
var _zyjsFlagSetGet_tested = Module["_zyjsFlagSetGet_tested"] = createExportWrapper("zyjsFlagSetGet_tested");
/** @type {function(...*):?} */
var _zyjsFlagSetGet_modified = Module["_zyjsFlagSetGet_modified"] = createExportWrapper("zyjsFlagSetGet_modified");
/** @type {function(...*):?} */
var _zyjsFlagSetGet_unset = Module["_zyjsFlagSetGet_unset"] = createExportWrapper("zyjsFlagSetGet_unset");
/** @type {function(...*):?} */
var _zyjsFlagSetGet_set = Module["_zyjsFlagSetGet_set"] = createExportWrapper("zyjsFlagSetGet_set");
/** @type {function(...*):?} */
var _zyjsFlagSetGet_undef = Module["_zyjsFlagSetGet_undef"] = createExportWrapper("zyjsFlagSetGet_undef");
/** @type {function(...*):?} */
var _zyjsGetMajorVersion = Module["_zyjsGetMajorVersion"] = createExportWrapper("zyjsGetMajorVersion");
/** @type {function(...*):?} */
var _zyjsGetMinorVersion = Module["_zyjsGetMinorVersion"] = createExportWrapper("zyjsGetMinorVersion");
/** @type {function(...*):?} */
var _zyjsGetPatchVersion = Module["_zyjsGetPatchVersion"] = createExportWrapper("zyjsGetPatchVersion");
/** @type {function(...*):?} */
var _zyjsGetBuildVersion = Module["_zyjsGetBuildVersion"] = createExportWrapper("zyjsGetBuildVersion");
/** @type {function(...*):?} */
var _zyjsHasFeature = Module["_zyjsHasFeature"] = createExportWrapper("zyjsHasFeature");
/** @type {function(...*):?} */
var _main = Module["_main"] = createExportWrapper("main");
/** @type {function(...*):?} */
var ___errno_location = createExportWrapper("__errno_location");
/** @type {function(...*):?} */
var _fflush = Module["_fflush"] = createExportWrapper("fflush");
/** @type {function(...*):?} */
var _emscripten_stack_init = function() {
  return (_emscripten_stack_init = Module["asm"]["emscripten_stack_init"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _emscripten_stack_get_free = function() {
  return (_emscripten_stack_get_free = Module["asm"]["emscripten_stack_get_free"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _emscripten_stack_get_base = function() {
  return (_emscripten_stack_get_base = Module["asm"]["emscripten_stack_get_base"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var _emscripten_stack_get_end = function() {
  return (_emscripten_stack_get_end = Module["asm"]["emscripten_stack_get_end"]).apply(null, arguments);
};

/** @type {function(...*):?} */
var stackSave = createExportWrapper("stackSave");
/** @type {function(...*):?} */
var stackRestore = createExportWrapper("stackRestore");
/** @type {function(...*):?} */
var stackAlloc = createExportWrapper("stackAlloc");
/** @type {function(...*):?} */
var _emscripten_stack_get_current = function() {
  return (_emscripten_stack_get_current = Module["asm"]["emscripten_stack_get_current"]).apply(null, arguments);
};



// include: postamble.js
// === Auto-generated postamble setup entry stuff ===

Module["UTF8ToString"] = UTF8ToString;
Module["stringToUTF8"] = stringToUTF8;
var missingLibrarySymbols = [
  'zeroMemory',
  'stringToNewUTF8',
  'emscripten_realloc_buffer',
  'isLeapYear',
  'ydayFromDate',
  'arraySum',
  'addDays',
  'setErrNo',
  'inetPton4',
  'inetNtop4',
  'inetPton6',
  'inetNtop6',
  'readSockaddr',
  'writeSockaddr',
  'getHostByName',
  'initRandomFill',
  'randomFill',
  'traverseStack',
  'getCallstack',
  'emscriptenLog',
  'convertPCtoSourceLocation',
  'runMainThreadEmAsm',
  'jstoi_q',
  'jstoi_s',
  'getExecutableName',
  'listenOnce',
  'autoResumeAudioContext',
  'getDynCaller',
  'dynCall',
  'runtimeKeepalivePush',
  'runtimeKeepalivePop',
  'callUserCallback',
  'maybeExit',
  'safeSetTimeout',
  'asmjsMangle',
  'asyncLoad',
  'alignMemory',
  'mmapAlloc',
  'HandleAllocator',
  'getNativeTypeSize',
  'STACK_SIZE',
  'STACK_ALIGN',
  'POINTER_SIZE',
  'ASSERTIONS',
  'writeI53ToI64',
  'writeI53ToI64Clamped',
  'writeI53ToI64Signaling',
  'writeI53ToU64Clamped',
  'writeI53ToU64Signaling',
  'readI53FromI64',
  'readI53FromU64',
  'convertI32PairToI53',
  'convertI32PairToI53Checked',
  'convertU32PairToI53',
  'bigintToI53Checked',
  'getCFunc',
  'ccall',
  'cwrap',
  'uleb128Encode',
  'sigToWasmTypes',
  'generateFuncType',
  'convertJsFunctionToWasm',
  'getEmptyTableSlot',
  'updateTableMap',
  'getFunctionAddress',
  'addFunction',
  'removeFunction',
  'reallyNegative',
  'unSign',
  'strLen',
  'reSign',
  'formatString',
  'intArrayFromString',
  'intArrayToString',
  'AsciiToString',
  'stringToAscii',
  'UTF16ToString',
  'stringToUTF16',
  'lengthBytesUTF16',
  'UTF32ToString',
  'stringToUTF32',
  'lengthBytesUTF32',
  'allocateUTF8',
  'allocateUTF8OnStack',
  'writeStringToMemory',
  'writeArrayToMemory',
  'writeAsciiToMemory',
  'getSocketFromFD',
  'getSocketAddress',
  'registerKeyEventCallback',
  'maybeCStringToJsString',
  'findEventTarget',
  'findCanvasEventTarget',
  'getBoundingClientRect',
  'fillMouseEventData',
  'registerMouseEventCallback',
  'registerWheelEventCallback',
  'registerUiEventCallback',
  'registerFocusEventCallback',
  'fillDeviceOrientationEventData',
  'registerDeviceOrientationEventCallback',
  'fillDeviceMotionEventData',
  'registerDeviceMotionEventCallback',
  'screenOrientation',
  'fillOrientationChangeEventData',
  'registerOrientationChangeEventCallback',
  'fillFullscreenChangeEventData',
  'registerFullscreenChangeEventCallback',
  'JSEvents_requestFullscreen',
  'JSEvents_resizeCanvasForFullscreen',
  'registerRestoreOldStyle',
  'hideEverythingExceptGivenElement',
  'restoreHiddenElements',
  'setLetterbox',
  'softFullscreenResizeWebGLRenderTarget',
  'doRequestFullscreen',
  'fillPointerlockChangeEventData',
  'registerPointerlockChangeEventCallback',
  'registerPointerlockErrorEventCallback',
  'requestPointerLock',
  'fillVisibilityChangeEventData',
  'registerVisibilityChangeEventCallback',
  'registerTouchEventCallback',
  'fillGamepadEventData',
  'registerGamepadEventCallback',
  'registerBeforeUnloadEventCallback',
  'fillBatteryEventData',
  'battery',
  'registerBatteryEventCallback',
  'setCanvasElementSize',
  'getCanvasElementSize',
  'demangle',
  'demangleAll',
  'jsStackTrace',
  'stackTrace',
  'getEnvStrings',
  'checkWasiClock',
  'flush_NO_FILESYSTEM',
  'createDyncallWrapper',
  'setImmediateWrapped',
  'clearImmediateWrapped',
  'polyfillSetImmediate',
  'getPromise',
  'makePromise',
  'makePromiseCallback',
  'ExceptionInfo',
  'exception_addRef',
  'exception_decRef',
  'setMainLoop',
  '_setNetworkCallback',
  'heapObjectForWebGLType',
  'heapAccessShiftForWebGLHeap',
  'webgl_enable_ANGLE_instanced_arrays',
  'webgl_enable_OES_vertex_array_object',
  'webgl_enable_WEBGL_draw_buffers',
  'webgl_enable_WEBGL_multi_draw',
  'emscriptenWebGLGet',
  'computeUnpackAlignedImageSize',
  'colorChannelsInGlTextureFormat',
  'emscriptenWebGLGetTexPixelData',
  '__glGenObject',
  'emscriptenWebGLGetUniform',
  'webglGetUniformLocation',
  'webglPrepareUniformLocationsBeforeFirstUse',
  'webglGetLeftBracePos',
  'emscriptenWebGLGetVertexAttrib',
  '__glGetActiveAttribOrUniform',
  'writeGLArray',
  'registerWebGlEventCallback',
  'runAndAbortIfError',
  'SDL_unicode',
  'SDL_ttfContext',
  'SDL_audio',
  'GLFW_Window',
  'ALLOC_NORMAL',
  'ALLOC_STACK',
  'allocate',
];
missingLibrarySymbols.forEach(missingLibrarySymbol)

var unexportedSymbols = [
  'run',
  'UTF8ArrayToString',
  'stringToUTF8Array',
  'lengthBytesUTF8',
  'addOnPreRun',
  'addOnInit',
  'addOnPreMain',
  'addOnExit',
  'addOnPostRun',
  'addRunDependency',
  'removeRunDependency',
  'FS_createFolder',
  'FS_createPath',
  'FS_createDataFile',
  'FS_createPreloadedFile',
  'FS_createLazyFile',
  'FS_createLink',
  'FS_createDevice',
  'FS_unlink',
  'out',
  'err',
  'callMain',
  'abort',
  'keepRuntimeAlive',
  'wasmMemory',
  'stackAlloc',
  'stackSave',
  'stackRestore',
  'getTempRet0',
  'setTempRet0',
  'writeStackCookie',
  'checkStackCookie',
  'ptrToString',
  'exitJS',
  'getHeapMax',
  'abortOnCannotGrowMemory',
  'ENV',
  'MONTH_DAYS_REGULAR',
  'MONTH_DAYS_LEAP',
  'MONTH_DAYS_REGULAR_CUMULATIVE',
  'MONTH_DAYS_LEAP_CUMULATIVE',
  'ERRNO_CODES',
  'ERRNO_MESSAGES',
  'DNS',
  'Protocols',
  'Sockets',
  'timers',
  'warnOnce',
  'UNWIND_CACHE',
  'readEmAsmArgsArray',
  'readEmAsmArgs',
  'runEmAsmFunction',
  'handleException',
  'MAX_INT53',
  'MIN_INT53',
  'freeTableIndexes',
  'functionsInTableMap',
  'setValue',
  'getValue',
  'PATH',
  'PATH_FS',
  'UTF16Decoder',
  'SYSCALLS',
  'JSEvents',
  'specialHTMLTargets',
  'currentFullscreenStrategy',
  'restoreOldWindowedStyle',
  'ExitStatus',
  'dlopenMissingError',
  'promiseMap',
  'uncaughtExceptionCount',
  'exceptionLast',
  'exceptionCaught',
  'Browser',
  'wget',
  'FS',
  'MEMFS',
  'TTY',
  'PIPEFS',
  'SOCKFS',
  'tempFixedLengthArray',
  'miniTempWebGLFloatBuffers',
  'miniTempWebGLIntBuffers',
  'GL',
  'emscripten_webgl_power_preferences',
  'AL',
  'GLUT',
  'EGL',
  'GLEW',
  'IDBStore',
  'SDL',
  'SDL_gfx',
  'GLFW',
];
unexportedSymbols.forEach(unexportedRuntimeSymbol);



var calledRun;

dependenciesFulfilled = function runCaller() {
  // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
  if (!calledRun) run();
  if (!calledRun) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
};

function callMain() {
  assert(runDependencies == 0, 'cannot call main when async dependencies remain! (listen on Module["onRuntimeInitialized"])');
  assert(__ATPRERUN__.length == 0, 'cannot call main when preRun functions remain to be called');

  var entryFunction = _main;

  var argc = 0;
  var argv = 0;

  try {

    var ret = entryFunction(argc, argv);

    // if we're not running an evented main loop, it's time to exit
    exitJS(ret, /* implicit = */ true);
    return ret;
  }
  catch (e) {
    return handleException(e);
  }
}

function stackCheckInit() {
  // This is normally called automatically during __wasm_call_ctors but need to
  // get these values before even running any of the ctors so we call it redundantly
  // here.
  _emscripten_stack_init();
  // TODO(sbc): Move writeStackCookie to native to to avoid this.
  writeStackCookie();
}

function run() {

  if (runDependencies > 0) {
    return;
  }

    stackCheckInit();

  preRun();

  // a preRun added a dependency, run will be called later
  if (runDependencies > 0) {
    return;
  }

  function doRun() {
    // run may have just been called through dependencies being fulfilled just in this very frame,
    // or while the async setStatus time below was happening
    if (calledRun) return;
    calledRun = true;
    Module['calledRun'] = true;

    if (ABORT) return;

    initRuntime();

    preMain();

    readyPromiseResolve(Module);
    if (Module['onRuntimeInitialized']) Module['onRuntimeInitialized']();

    if (shouldRunNow) callMain();

    postRun();
  }

  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(function() {
      setTimeout(function() {
        Module['setStatus']('');
      }, 1);
      doRun();
    }, 1);
  } else
  {
    doRun();
  }
  checkStackCookie();
}

function checkUnflushedContent() {
  // Compiler settings do not allow exiting the runtime, so flushing
  // the streams is not possible. but in ASSERTIONS mode we check
  // if there was something to flush, and if so tell the user they
  // should request that the runtime be exitable.
  // Normally we would not even include flush() at all, but in ASSERTIONS
  // builds we do so just for this check, and here we see if there is any
  // content to flush, that is, we check if there would have been
  // something a non-ASSERTIONS build would have not seen.
  // How we flush the streams depends on whether we are in SYSCALLS_REQUIRE_FILESYSTEM=0
  // mode (which has its own special function for this; otherwise, all
  // the code is inside libc)
  var oldOut = out;
  var oldErr = err;
  var has = false;
  out = err = (x) => {
    has = true;
  }
  try { // it doesn't matter if it fails
    _fflush(0);
  } catch(e) {}
  out = oldOut;
  err = oldErr;
  if (has) {
    warnOnce('stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the FAQ), or make sure to emit a newline when you printf etc.');
    warnOnce('(this may also be due to not including full filesystem support - try building with -sFORCE_FILESYSTEM)');
  }
}

if (Module['preInit']) {
  if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
  while (Module['preInit'].length > 0) {
    Module['preInit'].pop()();
  }
}

// shouldRunNow refers to calling main(), not run().
var shouldRunNow = true;

if (Module['noInitialRun']) shouldRunNow = false;

run();


// end include: postamble.js


  return Module.ready
}

);
})();
export default Module;