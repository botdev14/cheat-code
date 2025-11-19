import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/client.ts', 'src/seed.ts'],
  format: ['esm'],
  sourcemap: true,
  splitting: false,
  clean: true,
  dts: false,
  watch: process.env.NODE_ENV === 'development',
})
