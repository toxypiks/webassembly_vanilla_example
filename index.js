async function start() {
    const wasm = await fetch("./hello.wasm");
    console.log(wasm);
}

start().catch((e) => console.error(e));
