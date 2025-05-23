/// <reference types="vitest/config" />

// 参考：https://innei.in/posts/tech/write-a-universally-compatible-js-library-with-fully-types
// 参考：https://arethetypeswrong.github.io/
// 作为library是没有必要压缩的，除非需要输出umd格式给浏览器端使用
// 当前库因为依赖inversify，所以没有输出给浏览器使用的umd版本
// 注意inversify，reflect-metadata，vue等库都是peerDependencies，不应该打包到当前库中
import { resolve } from 'path';
import { writeFileSync } from 'fs';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      // rollupTypes: true,
      tsconfigPath: './tsconfig.app.json',
      beforeWriteFile: (filePath, content) => {
        writeFileSync(filePath.replace('.d.ts', '.d.cts'), content);
        return { filePath, content };
      },
    }),
  ],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
      },
      name: 'UseReactService',
      // the proper extensions will be added
      // fileName: (format, entryName) => `${entryName}.${format}.js`,
      formats: ['cjs', 'es'],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        'react',
        'react/jsx-runtime',
        'react-dom',
        'react-dom/client',
        '@kaokei/di',
        '@vue/reactivity',
      ],
      output: {
        compact: true,
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@kaokei/di': 'DI',
          '@vue/reactivity': 'VueReactivity',
        },
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
    coverage: {
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      exclude: ['src/generated/**/*.ts'],
      reporter: ['text', 'html', 'lcov'],
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@tests': resolve(__dirname, './tests'),
      '@demo': resolve(__dirname, './demo'),
    },
  },
});
