import * as enums from './enums.js';
import * as validators from './validators.js';
import Text from './text.js';

export const validate = validators;
export {Text};
// function form makes TS happier when interpolating the key
export function getText(lang, key) {
  if (key === undefined) return Text[lang];
  return Text[lang].get(key);
}

export default {
  ...enums,
  ...validators,
};
