import * as enums from './enums.js';
import * as validators from './validators.js';
import * as text_en from './translations/en.json' assert {type: 'json'};

export const Validate = validators

export default {
  ...enums,
  ...validators,
  text: {
    en: text_en,
  },
};
