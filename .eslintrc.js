module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/essential', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue', 'eslint-plugin-prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': [
      'warn',
      {
        printWith: 80,
        tabWidth: 2,
        useTabs: false,
        semi: true,
        singleQuote: true,
        arrowParens: 'avoid',
        bracketSpacing: true,
        endOfLine: 'auto',
        htmlWhitespaceSensitivity: 'css',
        trailingComma: 'es5',
        requirePragma: false,
        insertPragma: false,
        proseWrap: 'preserve',
        vueIndentScriptAndStyle: false,
      },
    ],
    'default-case': 'warn',
    'prefer-destructuring': ['warn', { array: false }],
    'no-magic-numbers': 0,
    'import/namespace': 0,
    'no-unused-vars': ['warn', {}],
    'vue/no-parsing-error': [0, {}],
    'no-lonely-if': 0,
    'vue/multi-word-component-names': 0,
  },
  overrides: [
    {
      files: ['src/components/*'],
      rules: {
        'vue/multi-word-component-names': 'error',
      },
    },
  ],
};
