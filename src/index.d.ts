import * as validators from './validators';
import * as enums from './enums';
import Text from './text';

export const validate = validators;
export {Text};
export declare function getText(lang: string): Map<string, string>;
export declare function getText(lang: string, key: string): string;

export default {
  ...validators,
  ...enums,
};
