import globals from 'globals';
import pluginJs from '@eslint/js';

const types = {
  typeOf: true,
  isType: true,
};
const dom = {
  getNode: true,
  getAttr: true,
};
const error = {
  typeError: true,
};

export default [
  pluginJs.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...types,
        ...dom,
        ...error,
      },
    },
    rules: {
      'no-unused-vars': 'warn',
    },
  },
];
