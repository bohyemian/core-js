import globals from 'globals';
import pluginJs from '@eslint/js';

const types = {
  typeOf: true,
  isType: true,
};

export default [
  pluginJs.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...types,
      },
    },
    rules: {
      'no-unused-vars': 'warn',
    },
  },
];
