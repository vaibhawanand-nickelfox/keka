module.exports = {
  root: true,
  extends: ['@react-native', 'plugin:testing-library/react'],
  ignorePatterns: ['coverage/*', 'src/types/models/*', 'jest/*.js'],
  rules: {
    "prettier/prettier": 0,
    quotes: 0,
    curly: 0,
    semi: ["error", "never"],
    "keyword-spacing": 0,
    "jsx-quotes": 0,
    "consistent-this": 0,
    "eol-last": ["error", "always"],
    "new-parens": 0,
    "no-array-constructor": 0,
    "no-empty-character-class": 0,
    "no-new-object": 0,
    "no-spaced-func": 0,
    "no-trailing-spaces": 0,
    "no-mixed-spaces-and-tabs": 0,
    "space-infix-ops": 0,
    "space-unary-ops": 0,
    "comma-dangle": [
      "error",
      {
        arrays: "never",
        objects: "never",
        imports: "never",
        exports: "never",
        functions: "never"
      }
    ],
    "no-extra-boolean-cast": 0,
    "react-native/no-inline-styles": 0,
    "react-hooks/exhaustive-deps": 0,
    "dot-notation": 0,
    "no-useless-escape": 0,
    "react/no-unstable-nested-components": 0,
    "no-shadow": 0,
    "jest/expect-expect": 0,
    "jest/no-identical-title": 0,
    "no-console": "error",
    eqeqeq: 0,
    "react/self-closing-comp": "off",
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: "*",
        next: "function"
      },
      {
        blankLine: "always",
        prev: "*",
        next: "multiline-block-like"
      },
      {
        blankLine: "always",
        prev: "*",
        next: "block-like"
      }
    ]
  }
};
