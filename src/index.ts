export type FuncWASMObject = {
    schemaVersion: 1
    funcVersion: string
    module: any
    wasmBase64: string
};

export const object: FuncWASMObject = {
    schemaVersion: 1,
    funcVersion: '0.4.0',
    module: require('./funcfiftlib.js'),
    wasmBase64: require('./funcfiftlib.wasm.js').FuncFiftLibWasm,
};