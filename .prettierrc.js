module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: true,
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^assets/(.*)$',
    '^components/(.*)$',
    '^context/(.*)$',
    '^forms/(.*)$',
    '^hooks/(.*)$',
    '^navigation/(.*)$',
    '^screens/(.*)$',
    '^services/(.*)$',
    '^themes/(.*)$',
    '^types/(.*)$',
    '^utils/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
};
