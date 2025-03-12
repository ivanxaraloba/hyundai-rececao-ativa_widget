const react = require('eslint-plugin-react');
const globals = require('globals');

module.exports = [
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    plugins: {
      react: plugins['@eslint-react'],
      'react-dom': plugins['@eslint-react/dom'],
      'react-hooks': pluginReactHooks,
      'react-hooks-extra': plugins['@eslint-react/hooks-extra'],
      'react-naming-convention': plugins['@eslint-react/naming-convention'],
      'react-refresh': pluginReactRefresh,
    },
    languageOptions: {
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { ...globals.browser },
    },
    rules: {
      'no-undef': 0,
      'no-control-regex': 0,
      'no-useless-escape': 0,
      'react/prop-types': 0,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
];
