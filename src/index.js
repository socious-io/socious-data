import * as enums from './enums.js';
import * as validators from './validators.js';
import en from './translations/en.json' assert {type: 'json'};

export const validate = validators

export default {
  ...enums,
  ...validators,
  text: {
    en
  },
};
