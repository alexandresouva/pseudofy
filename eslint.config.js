// @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import angular from 'angular-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
      eslintPluginPrettierRecommended
    ],
    processor: angular.processInlineTemplates,
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase'
        }
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case'
        }
      ],
      // OFF
      '@angular-eslint/prefer-standalone': 'off',
      // ERROR
      'no-param-reassign': 'error',
      'array-callback-return': 'error',
      'default-case': 'error',
      'dot-location': ['error', 'property'],
      'no-empty-function': 'error',
      eqeqeq: 'error',
      // WARN
      'no-console': 'warn',
      'spaced-comment': 'warn',
      'prefer-destructuring': ['warn', { object: true, array: true }]
    },
    ignores: ['**/*.spec.ts']
  },
  {
    files: ['**/*.html'],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility
    ],
    rules: {}
  }
);
