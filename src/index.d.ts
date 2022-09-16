import * as validators from './validators';
import * as enums from './enums';

export const Validate = validators

export default {
  ...validators,
  ...enums,
  text: {
    en: Object,
  },
};
