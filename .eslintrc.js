module.exports = {
  root: true, // So parent files don't get applied
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: [
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 7,
  },
  plugins: [
    // 'eslint-plugin-material-ui',
    // 'eslint-plugin-react-hooks',
    '@typescript-eslint/eslint-plugin',
  ],
  settings: {
    // 'import/resolver': {
    //   webpack: {
    //     config: path.join(__dirname, './webpackBaseConfig.js'),
    //   },
    // },
  },
  /**
   * Sorted alphanumerically within each group. built-in and each plugin form
   * their own groups.
   */
  rules: {
    "no-var": "error",
    "no-multiple-empty-lines": "error",
    'consistent-this': ['error', 'self'],
    // Just as bad as "max components per file"
    'max-classes-per-file': 'off',
    // Too interruptive
    'no-alert': 'error',
    // Stylistic opinion
    'arrow-body-style': 'off',
    // Allow warn and error for dev environments
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-param-reassign': 'off', // It's fine.
    // Airbnb use warn https://github.com/airbnb/javascript/blob/63098cbb6c05376dbefc9a91351f5727540c1ce1/packages/eslint-config-airbnb-base/rules/style.js#L97
    // but eslint recommands error
    'func-names': 'error',
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          '@material-ui/*/*/*',
          // Begin block: Packages with files instead of packages in the top level
          // Importing from the top level pulls in CommonJS instead of ES modules
          // Allowing /icons as to reduce cold-start of dev builds significantly.
          // There's nothing to tree-shake when importing from /icons this way:
          // '@material-ui/icons/*/',
          '@material-ui/system/*',
          '@material-ui/utils/*',
          // End block
          // Macros are fine since their import path is transpiled away
          '!@material-ui/utils/macros',
          '@material-ui/utils/macros/*',
          '!@material-ui/utils/macros/*.macro',
        ],
      },
    ],
    'no-constant-condition': 'error',
    // Use the proptype inheritance chain
    'no-prototype-builtins': 'off',
    'no-underscore-dangle': 'error',
    'nonblock-statement-body-position': 'error',
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
  },
};
