import Joi from 'joi';
import * as types from '../types.js';

export const PostUpsertSchem = Joi.object({
  content: Joi.string().required(),
  causes_tags: Joi.array()
    .items(Joi.string().valid(...Object.values(types.SocialCauses)))
    .required(),
  hashtags: Joi.array().items(Joi.string()),
  identity_tags: Joi.array().items(Joi.string()),
  media: Joi.array().max(10).items(Joi.string().uuid()),
});

export const CommentUpsertSchem = Joi.object({
  content: Joi.string().required(),
  reply_id: Joi.string().uuid(),
});

export const ProjectUpsertSchem = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  remote_preference: Joi.string()
    .valid(...Object.values(types.ProjectRemotePreferenceTypes))
    .required(),
  payment_type: Joi.string().valid(...Object.values(types.ProjectPaymentTypes)),
  payment_scheme: Joi.string().valid(
    ...Object.values(types.ProjectPaymentSchemeTypes),
  ),
  payment_currency: Joi.string().allow(null),
  payment_range_lower: Joi.string().allow(null),
  payment_range_higher: Joi.string().allow(null),
  experience_level: Joi.number(),
  status: Joi.string().valid(...Object.values(types.ProjectStatusTypes)),
});

export const ApplicantUpsertSchem = Joi.object({
  cover_letter: Joi.string().required(),
  payment_type: Joi.number(),
  payment_rate: Joi.number(),
});

export const ApplicantofferSchem = Joi.object({
  offer_rate: Joi.string().required(),
  offer_message: Joi.string().required(),
  due_date: Joi.string().isoDate(),
  assignment_total: Joi.number(),
});

export const ApplicantrejectSchem = Joi.object({
  feedback: Joi.string(),
});

export const ChatNewSchem = Joi.object({
  name: Joi.string().required(),
  description: Joi.string(),
  type: Joi.string().valid(...Object.values(Types)),
  participants: Joi.array()
    .unique()
    .min(1)
    .max(250)
    .items(Joi.string().uuid())
    .required(),
});

export const ChatUpdateSchem = Joi.object({
  name: Joi.string().required(),
  description: Joi.string(),
  type: Joi.string().valid(...Object.values(types.ChatTypes)),
});

export const MessageUpsertSchem = Joi.object({
  text: Joi.string().required(),
  media: Joi.string().uuid(),
});

export const DeviceNewSchem = Joi.object({
  token: Joi.string().required(),
  meta: Joi.object({
    app_version: Joi.string(),
    os: Joi.string().valid('IOS', 'ANDROID', 'WINDOWS', 'WEBAPP'),
    os_version: Joi.string(),
  }).required(),
});

export const OrganizationUpsertSchem = Joi.object({
  name: Joi.string().required(),
  bio: Joi.string(),
  description: Joi.string(),
  email: Joi.string().email().required(),
  phone: Joi.string(),
  type: Joi.string().valid(...Object.values(types.OrganizationType)),
  city: Joi.string(),
  address: Joi.string(),
  country: Joi.string().min(2).max(3),
  social_causes: Joi.array().items(
    Joi.string().valid(...Object.values(types.SocialCauses)),
  ),
  website: Joi.string().uri(),
  mobile_country_code: Joi.string().regex(/^\+[0-9 -]+/),
});

export const usernamePattern =
  /^(?=.{6,24}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;

export const languagePattern = /^[a-z][a-z](-[a-z][a-z])?$/;

export const UpdateProfileSchem = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  username: Joi.string().regex(usernamePattern).required(),
  bio: Joi.string(),
  mission: Joi.string(),
  language: Joi.string().regex(languagePattern),
  city: Joi.string(),
  address: Joi.string(),
  country: Joi.string().min(2).max(3),
  phone: Joi.string(),
  wallet_address: Joi.string(),
  avatar: Joi.string().uuid(),
  cover_image: Joi.string().uuid(),
  social_causes: Joi.array().items(
    Joi.string().valid(...Object.values(types.SocialCauses)),
  ),
  skills: Joi.array().items(Joi.string()),
  mobile_country_code: Joi.string().regex(/^\+[0-9 -]+/),
});
