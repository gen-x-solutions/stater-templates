/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true, // prevents ESLint from looking outside this project
  parser: '@typescript-eslint/parser', // allows ESLint to understand TypeScript
  parserOptions: {
    ecmaVersion: 'latest', // enables latest ECMAScript features
    sourceType: 'module',  // enables use of imports
    project: './tsconfig.json', // required for rules like no-floating-promises
  },
  plugins: [
    '@typescript-eslint', // TS-specific rules
    'prettier'            // syncs with Prettier rules
  ],
  extends: [
    'next',                         // Next.js base rules
    'next/core-web-vitals',        // Web vitals recommended rules
    'plugin:@typescript-eslint/recommended', // Recommended TS rules
    'plugin:prettier/recommended', // Prettier plugin + recommended config
  ],
  rules: {
    // Example rule customizations (edit as needed)
    'prettier/prettier': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'sibling', 'parent', 'index'],
        'newlines-between': 'always',
      },
    ],
  },
};
