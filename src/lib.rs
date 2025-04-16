//! # Template Bun WASM Rust Library
//!
//! `flowscripter_template_bun_wasm_rust_library` provides a sample function to be called from JavaScript.

use flowscripter_template_rust_library::adder;
use wasm_bindgen::prelude::*;

/// Adds two numbers together.
///
///
/// # Examples
/// ```
/// let arg1 = 3;
/// let arg2 = 3;
/// let answer = flowscripter_template_bun_wasm_rust_library::add(arg1, arg2);
///
/// assert_eq!(6, answer);
/// ```
#[wasm_bindgen]
pub fn add(a: i32, b: i32) -> i32 {
    adder(a, b)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn adder_works() {
        assert_eq!(6, add(3, 3));
    }
}
