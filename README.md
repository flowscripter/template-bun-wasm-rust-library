# template-bun-wasm-rust-library

[![version](https://img.shields.io/github/v/release/flowscripter/template-bun-wasm-rust-library?sort=semver)](https://github.com/flowscripter/template-bun-wasm-rust-library/releases)
[![build](https://img.shields.io/github/actions/workflow/status/flowscripter/template-bun-wasm-rust-library/release-bun-wasm-rust-library.yml)](https://github.com/flowscripter/template-bun-wasm-rust-library/actions/workflows/release-bun-wasm-rust-library.yml)
[![coverage](https://codecov.io/gh/flowscripter/template-bun-wasm-rust-library/graph/badge.svg?token=uWK0oWsBjr)](https://codecov.io/gh/flowscripter/template-bun-wasm-rust-library)
[![docs](https://img.shields.io/badge/docs-API-blue)](https://flowscripter.github.io/template-bun-wasm-rust-library/index.html)
[![license: MIT](https://img.shields.io/github/license/flowscripter/template-bun-wasm-rust-library)](https://github.com/flowscripter/template-bun-wasm-rust-library/blob/main/LICENSE)

> Project template for a Rust library compiled to WASM exposed as a Bun module.

## Template Usage

Create a new Bun project using this as a template:

`bun create @flowscripter/template-bun-wasm-rust-library`

## Bun Module Usage

Add the module:

`bun add @flowscripter/template-bun-wasm-rust-library`

Use the module:

```typescript
import { world } from "@flowscripter/template-bun-wasm-rust-library";

world();
```

## Development

Install [wasm-pack](https://rustwasm.github.io/wasm-pack/):

`cargo install wasm-pack`

Install dependencies:

`bun install`

Build (remove generated `.gitignore` to allow npm publish from root of repository):

`wasm-pack build --target web --no-pack && rm pkg/.gitignore`

Test:

`cargo test && bun test`

**NOTE**: The following tasks use Deno as it excels at these and Bun does not
currently provide such functionality:

Format:

`deno fmt`

Lint:

`cargo fmt && deno lint index.ts src/ tests/`

Generate HTML API Documentation:

`deno doc --html --name=template-bun-wasm-rust-library index.ts`

## Documentation

### Overview

Sample mermaid diagram to test rendering in markdown:

```mermaid
classDiagram
    Foo <|-- Bar
```

### API

Link to auto-generated API docs:

[API Documentation](https://flowscripter.github.io/template-bun-wasm-rust-library/index.html)

## License

MIT © Flowscripter
