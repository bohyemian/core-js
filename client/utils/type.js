/* global object */
const typeOf = (data) => Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
const isType = (data, type) => typeOf(data) === type;

// const isObject = (data) => typeOf(data) === 'object';
// const isArray = (data) => typeOf(data) === 'array';
// const isBoolean = (data) => typeOf(data) === 'boolean';
// const isString = (data) => typeOf(data) === 'string';
// const isNumber = (data) => typeOf(data) === 'number';
// const isBigInt = (data) => typeOf(data) === 'bigint';
// const isFunction = (data) => typeOf(data) === 'function';
// const isMath = (data) => typeOf(data) === 'math';
// const isUndefined = (data) => typeOf(data) === 'undefined';
