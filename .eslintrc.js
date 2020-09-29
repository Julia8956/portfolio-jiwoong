module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        useTabs: true,
        tabWidth: 2,
        trailingComma: 'all',
        printWidth: 80,
        bracketSpacing: true,
        arrowParens: 'avoid',
      }
    ],
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  //   quotes: ['error', 'single'],
  //   semi: ['error', 'always'],
  //   'semi-style': ['error', 'last'],
  //   'comma-dangle': [
  //     'error',
  //     {
  //       arrays: 'always-multiline',
  //       objects: 'always-multiline',
  //       imports: 'always-multiline',
  //       exports: 'always-multiline',
  //       functions: 'never',
  //     },
  //   ],
  //   'no-unused-vars': [
  //     'error',
  //     {
  //       argsIgnorePattern: '^_',
  //     },
  //   ],
  //   'no-unneeded-ternary': 'off',
  //   'no-new': 'off',
  //   'space-before-function-paren': 'off',
  //   'vue/html-quotes': ['error', 'double'],
  //   'vue/no-parsing-error': [
  //     // Disable template errors regarding invalid end tags
  //     'error',
  //     {
  //       'x-invalid-end-tag': false,
  //     },
  //   ],
  //   'vue/max-attributes-per-line': [
  //     'error',
  //     {
  //       singleline: 5,
  //       multiline: {
  //         max: 1,
  //         allowFirstLine: false,
  //       },
  //     },
  //   ],
  //   'vue/html-self-closing': [
  //     'error',
  //     {
  //       html: {
  //         void: 'always',
  //         normal: 'never',
  //         component: 'always',
  //       },
  //       svg: 'always',
  //       math: 'always',
  //     },
  //   ],
  //   'vue/singleline-html-element-content-newline': [
  //     'error',
  //     {
  //       ignoreWhenNoAttributes: true,
  //       ignoreWhenEmpty: true,
  //       ignores: [
  //         'pre',
  //         'textarea',
  //         'div',
  //         'li',
  //         'span',
  //         'strong',
  //         'router-link',
  //       ],
  //     },
  //   ],
  //   'vue/component-name-in-template-casing': ['error', 'PascalCase'],
  //   'vue/name-property-casing': ['error', 'PascalCase'],
  //   'vue/prop-name-casing': ['error', 'snake_case'],
  //   'vue/attributes-order': [
  //     'error',
  //     {
  //       order: [
  //         'DEFINITION',
  //         'LIST_RENDERING',
  //         'CONDITIONALS',
  //         'RENDER_MODIFIERS',
  //         'GLOBAL',
  //         'UNIQUE',
  //         'TWO_WAY_BINDING',
  //         'OTHER_DIRECTIVES',
  //         'OTHER_ATTR',
  //         'EVENTS',
  //         'CONTENT',
  //       ],
  //     },
  //   ],
  //   'vue/no-v-html': 'off',
  //   '@typescript-eslint/no-var-requires': 'off',
  //   '@typescript-eslint/no-explicit-any': 'off',
  //   '@typescript-eslint/camelcase': 'off',
  //   '@typescript-eslint/no-non-null-assertion': 'off',
  },
};
