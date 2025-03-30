async function start() {
    const wasm = await WebAssembly.instantiateStreaming(fetch("./hello.wasm"));
    console.log(wasm.instance.exports.hello(34, 35));
    console.log(wasm);
}

start().catch((e) => console.error(e));
