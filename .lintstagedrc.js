/** @type {import('lint-staged').Config} */
const config = {
  '**/*.{js,jsx,ts,tsx}': ['eslint --fix'],
  '**/*.{json,md,css,scss,yml,yaml}': ['prettier --write'],
};

export default config;
