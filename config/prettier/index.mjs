/** @type {import('prettier').Config} PrettierConfig */
/**
 * @type {PrettierConfig}
 */

const config = {
  printWidth: 80,
  plugins: ['prettier-plugin-tailwindcss'],
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  trailingComma: 'es5',
  bracketSpacing: true,
  errorParams: 'always',
  endOfLine: 'auto',
  bracketSemiLine: false,
}

export default config