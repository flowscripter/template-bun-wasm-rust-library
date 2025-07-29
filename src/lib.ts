import init, {
  add,
} from "../pkg/flowscripter_template_bun_wasm_rust_library.js";

// TODO: when https://github.com/oven-sh/bun/pull/20503 is released I believe the following can be removed
import wasm from "../pkg/flowscripter_template_bun_wasm_rust_library_bg.wasm";
const wasmBuffer = typeof Bun !== "undefined"
  ? await Bun.file(wasm).arrayBuffer()
  : await fetch(wasm).then((response) => response.arrayBuffer());

/**
 * Adds 3 and 3 and logs the result as "World 6"
 */
export async function world(): Promise<void> {
  // init WASM module
  // TODO: when https://github.com/oven-sh/bun/pull/20503 is released I believe the following can be simply `await init();`
  await init({ module_or_path: wasmBuffer });

  console.info(`World ${add(3, 3)}`);
}
