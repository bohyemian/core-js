import globals from 'globals';
import pluginJs from '@eslint/js';

const types = {
  typeOf: true,
  isObject: true,
  isArray: true,
  isBoolean: true,
  isString: true,
  isNumber: true,
  isBigInt: true,
  isFunction: true,
  isMath: true,
  isUndefined: true,
  isNull: true,
};
const dom = {
  getNode: true,
  getAttr: true,
  setAttr: true,
  attr: true,
  insertBefore: true,
  insertFirst: true,
  insertLast: true,
  insertAfter: true,
};
const error = {
  typeError: true,
  syntaxError: true,
  refError: true,
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
        gsap: true,
      },
    },
    rules: {
      'no-unused-vars': 'warn',
    },
  },
];
