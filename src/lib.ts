import init, {
  add,
} from "../pkg/flowscripter_template_bun_wasm_rust_library.js";

/**
 * Adds 3 and 3 and logs the result as "World 6"
 */
export async function world(): Promise<void> {
  // init WASM module
  await init();

  console.info(`World ${add(3, 3)}`);
}
