import Joi from 'joi';
import * as enums from './enums.js';

export const PostSchema = Joi.object({
  content: Joi.string().required(),
  causes_tags: Joi.array()
    .items(Joi.string().valid(...Object.values(enums.SocialCauses)))
    .required(),
  hashtags: Joi.array().items(Joi.string()),
  identity_tags: Joi.array().items(Joi.string()),
  media: Joi.array().max(10).items(Joi.string().uuid()),
});

export const CommentSchema = Joi.object({
  content: Joi.string().required(),
  reply_id: Joi.string().uuid(),
});

export const AnswerSchema = Joi.object({
  id: Joi.string().uuid().required(),
  answer: Joi.string(),
  selected_option: Joi.number().min(1).max(5),
});

export const ApplicantSchema = Joi.object({
  cover_letter: Joi.string().required(),
  payment_type: Joi.string().valid(...Object.values(enums.ProjectPaymentType)),
  payment_rate: Joi.number(),
  cv_name: Joi.string(),
  cv_link: Joi.string().uri(),
  share_contact_info: Joi.boolean(),
  answers: Joi.array().items(AnswerSchema),
  attachment: Joi.string().uuid(),
});

export const OfferSchema = Joi.object({
  payment_mode: Joi.string().valid(...Object.values(enums.PaymentMode)),
  offer_rate: Joi.number(),
  offer_message: Joi.string().required(),
  due_date: Joi.string().isoDate(),
  assignment_total: Joi.number().required(),
  weekly_limit: Joi.number(),
  total_hours: Joi.number(),
  currency: Joi.string().valid(...Object.values(enums.PaymentCurrency)),
  crypto_currency_address: Joi.alternatives().conditional('payment_mode', {
    is: enums.PaymentMode.CRYPTO,
    then: Joi.string().required(),
    otherwise: Joi.forbidden(),
  }),
});

export const ReportSchema = Joi.object({
  blocked: Joi.boolean(),
  comment: Joi.string().required(),
});

export const SubmitWorkSchema = Joi.object({
  total_hours: Joi.number(),
  start_at: Joi.string().isoDate().required(),
  end_at: Joi.string().isoDate().required(),
});

export const ApplicantRejectSchema = Joi.object({
  feedback: Joi.string(),
});

export const ChatSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string(),
  type: Joi.string().valid(...Object.values(enums.ChatType)),
  participants: Joi.array()
    .unique()
    .min(1)
    .max(250)
    .items(Joi.string().uuid())
    .required(),
});

export const ChatUpdateSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string(),
  type: Joi.string().valid(...Object.values(enums.ChatType)),
});

export const MessageSchema = Joi.object({
  text: Joi.string().required(),
  media: Joi.string().uuid(),
});

export const FindChatSchema = Joi.object({
  participants: Joi.array()
    .unique()
    .min(1)
    .max(250)
    .items(Joi.string().uuid())
    .required(),
});

export const DeviceNewSchema = Joi.object({
  token: Joi.string().required(),
  meta: Joi.object({
    app_version: Joi.string(),
    os: Joi.string().valid('IOS', 'ANDROID', 'WINDOWS', 'WEBAPP'),
    os_version: Joi.string(),
  }).required(),
});

export const OrganizationSchema = Joi.object({
  name: Joi.string().required(),
  shortname: Joi.string().required(),
  bio: Joi.string(),
  industry: Joi.string(),
  description: Joi.string(),
  email: Joi.string().email().required(),
  phone: Joi.string(),
  size: Joi.string().valid(...Object.values(enums.OrganizationSize)),
  type: Joi.string().valid(...Object.values(enums.OrganizationType)),
  country: Joi.string().min(2).max(3),
  city: Joi.string(),
  geoname_id: Joi.number().integer().min(0).empty(null).optional(),
  address: Joi.string(),
  social_causes: Joi.array().items(
    Joi.string().valid(...Object.values(enums.SocialCauses)),
  ),
  website: Joi.string().uri(),
  mobile_country_code: Joi.string().regex(/^\+[0-9 -]+/),
  image: Joi.string().uuid(),
  cover_image: Joi.string().uuid(),
  mission: Joi.string(),
  culture: Joi.string(),
});

export const usernamePattern =
  /^(?=.{6,24}$)(?![_.])(?!.*[_.]{2})[a-z0-9._-]+$/;

export const languagePattern = /^[a-z][a-z](-[a-z][a-z])?$/;
export const namesPattern = /(\p{L}+)(\s\p{L}+)*/;

export const UpdateProfileSchema = Joi.object({
  first_name: Joi.string().regex(namesPattern).required(),
  last_name: Joi.string().regex(namesPattern).required(),
  username: Joi.string().regex(usernamePattern).required(),
  bio: Joi.string(),
  mission: Joi.string(),
  language: Joi.string().regex(languagePattern),
  country: Joi.string().min(2).max(3),
  city: Joi.string(),
  geoname_id: Joi.number().integer().min(0).empty(null).optional(),
  address: Joi.string(),
  phone: Joi.string(),
  wallet_address: Joi.string(),
  avatar: Joi.string().uuid(),
  cover_image: Joi.string().uuid(),
  social_causes: Joi.array().items(
    Joi.string().valid(...Object.values(enums.SocialCauses)),
  ),
  skills: Joi.array().items(Joi.string()),
  mobile_country_code: Joi.string().regex(/^\+[0-9 -]+/),
  certificates: Joi.array().items(Joi.string()),
  goals: Joi.string(),
  educations: Joi.array().items(Joi.string()),
});

export const ProjectSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  remote_preference: Joi.string()
    .valid(...Object.values(enums.ProjectRemotePreferenceType))
    .required(),
  payment_type: Joi.string().valid(...Object.values(enums.ProjectPaymentType)),
  payment_scheme: Joi.string().valid(
    ...Object.values(enums.ProjectPaymentSchemeType),
  ),
  payment_currency: Joi.string().allow(null),
  payment_range_lower: Joi.string().allow(null),
  payment_range_higher: Joi.string().allow(null),
  weekly_hours_lower: Joi.string().allow(null),
  weekly_hours_higher: Joi.string().allow(null),
  commitment_hours_lower: Joi.string().allow(null),
  commitment_hours_higher: Joi.string().allow(null),
  experience_level: Joi.number().min(0).max(3),
  status: Joi.string().valid(...Object.values(enums.ProjectStatusType)),
  project_type: Joi.string().valid(...Object.values(enums.ProjectType)),
  project_length: Joi.string().valid(...Object.values(enums.ProjectLengthType)),
  skills: Joi.array().items(Joi.string()),
  causes_tags: Joi.array()
    .max(1)
    .items(Joi.string().valid(...Object.values(enums.SocialCauses))),
  country: Joi.string().min(2).max(3),
  city: Joi.string(),
  geoname_id: Joi.number().integer().min(0).empty(null).optional(),
  job_category_id: Joi.string().uuid().required(),
});

export const QuestionSchema = Joi.object({
  question: Joi.string().required(),
  required: Joi.boolean(),
  options: Joi.array().min(2).max(5).items(Joi.string()),
});

export const SearchSchema = Joi.object({
  q: Joi.string(),
  type: Joi.string()
    .valid(...Object.values(enums.SearchType))
    .required(),
  filter: Joi.object(),
});

export const EscrowSchema = Joi.object({
  service: Joi.string()
    .valid(...Object.values(enums.PaymentService))
    .required(),
  source: Joi.string().required(),
  txHash: Joi.alternatives().conditional('service', {
    is: enums.PaymentService.CRYPTO,
    then: Joi.string().required(),
    otherwise: Joi.forbidden(),
  }),
  meta: Joi.object(),
});

export const UUID = Joi.string().uuid();

export const UUIDs = Joi.array().items(Joi.string().uuid());

export const CardSchema = Joi.object({
  holder_name: Joi.string(),
  token: Joi.string().required(),
  meta: Joi.object(),
});

export const PaymentSchema = Joi.object({
  amount: Joi.number().required(),
  service: Joi.string()
    .valid(...Object.values(enums.PaymentService))
    .required(),
  source: Joi.string().required(),
  currency: Joi.string().valid(...Object.values(enums.PaymentCurrency)),
  description: Joi.string(),
  txHash: Joi.alternatives().conditional('service', {
    is: enums.PaymentService.CRYPTO,
    then: Joi.string().required(),
    otherwise: Joi.forbidden(),
  }),
});

export const ProfileExperienceSchema = Joi.object({
  org_id: Joi.string().uuid().required(),
  title: Joi.string().required(),
  description: Joi.string(),
  country: Joi.string(),
  city: Joi.string(),
  job_category_id: Joi.string(),
  employment_type: Joi.string()
    .valid(...Object.values(enums.EmploymentType))
    .required(),
  skills: Joi.array().items(Joi.string()),
  start_at: Joi.string().isoDate().required(),
  end_at: Joi.string().isoDate(),
});

export const ProfileAddLanguageSchema = Joi.object({
  name: Joi.string()
    .valid(...Object.keys(enums.Languages))
    .required(),
  level: Joi.string().valid(...Object.values(enums.LanguageLevel)),
});

export const NotificationsSettingsSchema = Joi.object({
  settings: Joi.array().items(
    Joi.object({
      type: Joi.string()
        .valid(...Object.values(enums.NotificationType))
        .required(),
      email: Joi.boolean().required(),
      in_app: Joi.boolean().required(),
      push: Joi.boolean().required(),
    }),
  ),
});

export const ConnectSchema = Joi.object({
  text: Joi.string().max(300),
});

export const OAuthStripeSchema = Joi.object({
  code: Joi.string().required(),
});

export const AdditinalSchema = Joi.object({
  type: Joi.string()
    .valid(...Object.values(enums.AdditionalType))
    .required(),
  title: Joi.string().required(),
  description: Joi.string(),
  url: Joi.string(),
  image: Joi.string(),
  sub_image: Joi.string(),
  meta: Joi.object(),
  ref_identity_id: Joi.alternatives().conditional('type', {
    is: enums.AdditionalType.RECOMMENDATIONS,
    then: Joi.string().required(),
    otherwise: Joi.forbidden(),
  }),
  enabled: Joi.boolean(),
});
