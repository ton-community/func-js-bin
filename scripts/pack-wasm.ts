import * as fs from "fs";

function encode(src: string, dest: string, name: string) {
    const data = fs.readFileSync(src);
    const out = `module.exports = { ${name}: '${data.toString('base64')}'}\n`;
    fs.writeFileSync(dest, out);
}

encode('./src/funcfiftlib.wasm', './src/funcfiftlib.wasm.js', 'FuncFiftLibWasm');
encode('./src/funcfiftlib.debugger.bpatch.gzip', './src/funcfiftlib.debugger.bpatch.gzip.js', 'DebuggerPatchGzip');
