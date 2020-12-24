module.exports = {
  root: true,
  ignorePatterns: ['node_modules/*'],
  overrides: [
    {
      files: ['*.js', '*.ts'],
      parserOptions: {
        project: ['tsconfig.json', 'e2e/tsconfig.json'],
        createDefaultProgram: true,
      },
      extends: [
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
        'plugin:@angular-eslint/ng-cli-compat',
        'plugin:@angular-eslint/ng-cli-compat--formatting-add-on',
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/template/process-inline-templates',
      ],
      rules: {
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'comma-dangle': ['warn', 'always-multiline'],
        'space-before-function-paren': 'off',
        'no-use-before-define': 'off',
        'max-len': ['warn', 120],
        'no-useless-rename': ['error'],
        '@typescript-eslint/semi': ['error', 'always'],
        '@typescript-eslint/no-empty-interface': ['off'],
        '@typescript-eslint/consistent-type-assertions': ['error', { assertionStyle: 'angle-bracket' }],
        '@typescript-eslint/explicit-function-return-type': ['warn'],
        '@typescript-eslint/no-unused-vars': ['off'],
        '@typescript-eslint/no-inferrable-types': ['off'],
        '@typescript-eslint/naming-convention': [
          'warn',
          {
            selector: 'interface',
            format: ['PascalCase'],
            prefix: ['I'],
          },
          {
            selector: ['typeAlias', 'enum'],
            format: ['PascalCase'],
            suffix: ['Type'],
          },
          {
            selector: 'variable',
            format: ['camelCase', 'UPPER_CASE'],
          },
        ],
        '@typescript-eslint/space-before-function-paren': [
          'error',
          {
            anonymous: 'never',
            named: 'never',
            asyncArrow: 'always',
          },
        ],
        '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false }],
        'jest/no-test-callback': ['off'],
        '@angular-eslint/component-selector': [
          'error',
          {
            type: 'element',
            prefix: 'app',
            style: 'kebab-case',
          },
        ],
        '@angular-eslint/directive-selector': [
          'error',
          {
            type: 'attribute',
            prefix: 'app',
            style: 'camelCase',
          },
        ],
      },
    },
    {
      files: ['*.html'],
      extends: ['plugin:@angular-eslint/template/recommended'],
      rules: {},
    },
  ],
};
