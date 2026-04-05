import { defineConfig } from 'tsdown'

export default defineConfig({
   entry: ['./src/index.ts'],
    // We don't want to bundle them with the library,
    // as the consuming project will provide them.
    platform: 'neutral',
    dts: true,
    sourcemap: true,
})
