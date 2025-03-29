async function start() {
    const wasm = await WebAssembly.instantiateStreaming(fetch("./hello.wasm"));
    console.log(wasm);
}

start().catch((e) => console.error(e));
