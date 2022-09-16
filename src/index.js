import * as enums from './enums.js';
import * as schemas from './schemas.js';
import * as text_en from './translations/en.json' assert {type: 'json'};

export default {
  ...enums,
  ...schemas,
  text: {
    en: text_en,
  },
};
