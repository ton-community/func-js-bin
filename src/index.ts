export type FuncWASMObject = {
    schemaVersion: 1
    funcVersion: string
    module: any
    wasmBase64: string
    debugger: {
        module: any
        gzipPatchBase64: string
    }
};

export const object: FuncWASMObject = {
    schemaVersion: 1,
    funcVersion: '0.4.6',
    module: require('./funcfiftlib.js'),
    wasmBase64: require('./funcfiftlib.wasm.js').FuncFiftLibWasm,
    debugger: {
        module: require('./funcfiftlib.debugger.js'),
        gzipPatchBase64: require('./funcfiftlib.debugger.bpatch.gzip.js').DebuggerPatchGzip,
    }
};
