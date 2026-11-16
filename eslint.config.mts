import js from '@eslint/js'
import { defineConfig, globalIgnores } from 'eslint/config'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'
import tseslint from 'typescript-eslint'

const sourceFiles = ['**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}']
const typescriptFiles = ['**/*.{ts,tsx,mts,cts}']
const frontendFiles = [
  'src/**/*.{js,jsx,ts,tsx}',
  '.storybook/**/*.tsx',
  'playground/src/**/*.{js,jsx,ts,tsx}',
  'docsite/src/**/*.{js,jsx,ts,tsx}',
  'docsite/Example/**/*.{js,jsx,ts,tsx}',
  'docsite/docs/**/*.{js,jsx,ts,tsx}'
]

export default defineConfig(
  globalIgnores([
    '**/node_modules/**',
    'dist/**',
    'playground/dist/**',
    'docsite/build/**',
    'storybook-static/**',
    '**/.docusaurus/**',
    '**/.cache/**',
    '**/.cache-loader/**',
    '**/.vite/**',
    '**/.vite-temp/**',
    'src/components/Icon/material/**',
    'src/components/Icon/Icon.constants.ts',
    'docsite/APIdocs.ts',
    'docsite/Example/**/{Examples,snippets}.{js,jsx,ts,tsx}'
  ]),
  {
    files: sourceFiles,
    extends: [js.configs.recommended],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    rules: {
      'no-unused-vars': 'off'
    }
  },
  {
    files: typescriptFiles,
    extends: [tseslint.configs.recommended],
    rules: {
      'no-undef': 'off',
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        { prefer: 'type-imports', fixStyle: 'inline-type-imports' }
      ],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          ignoreRestSiblings: true
        }
      ]
    }
  },
  {
    files: frontendFiles,
    extends: [
      react.configs.flat.recommended,
      react.configs.flat['jsx-runtime']
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } }
    },
    plugins: {
      'react-hooks': reactHooks
    },
    settings: {
      react: { version: 'detect' }
    },
    rules: {
      'react/prop-types': 'off',
      'react/jsx-boolean-value': 'warn',
      'react/require-render-return': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn'
    }
  },
  {
    files: [
      '*.{ts,cts,mts}',
      '.storybook/*.{ts,mts}',
      'scripts/**/*.{js,cjs,mjs,ts,cts,mts}',
      'docsite/*.{ts,cts,mts}',
      'playground/*.{ts,cts,mts}'
    ],
    languageOptions: {
      globals: globals.node
    }
  },
  {
    files: ['**/*.cts'],
    languageOptions: {
      sourceType: 'commonjs'
    }
  }
)
