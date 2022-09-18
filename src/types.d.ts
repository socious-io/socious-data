declare type TSocialCauses =
  | 'SOCIAL'
  | 'POVERTY'
  | 'HOMELESSNESS'
  | 'HUNGER'
  | 'HEALTH'
  | 'SUBSTANCE_ABUSE'
  | 'MENTAL'
  | 'BULLYING'
  | 'SECURITY'
  | 'EDUCATION'
  | 'GENDER_EQUALITY'
  | 'GENDER_BASED_VIOLENCE'
  | 'SEXUAL_VIOLENCE'
  | 'DOMESTIC_VIOLENCE'
  | 'WATER_SANITATION'
  | 'SUSTAINABLE_ENERGY'
  | 'DECENT_WORK'
  | 'INEQUALITY'
  | 'MINORITY'
  | 'MULTICULTURALISM'
  | 'DIVERSITY_INCLUSION'
  | 'INDIGENOUS_PEOPLES'
  | 'DISABILITY'
  | 'LGBTQI'
  | 'REFUGEE'
  | 'MIGRANTS'
  | 'ORPHANS'
  | 'CHILD_PROTECTION'
  | 'COMMUNITY_DEVELOPMENT'
  | 'DEPOPULATION'
  | 'OVERPOPULATION'
  | 'HUMAN_RIGHTS'
  | 'SUSTAINABILITY'
  | 'RESPONSIBLE_CONSUMPTION'
  | 'CLIMATE_CHANGE'
  | 'NATURAL_DISASTERS'
  | 'BIODIVERSITY'
  | 'ANIMAL_RIGHTS'
  | 'ARMED_CONFLICT'
  | 'PEACEBUILDING'
  | 'DEMOCRACY'
  | 'CIVIC_ENGAGEMENT'
  | 'JUSTICE'
  | 'GOVERNANCE'
  | 'CRIME_PREVENTION'
  | 'CORRUPTION'
  | 'OTHER'
  | 'RURAL_DEVELOPMENT'
  | 'VEGANISM'
  | 'BLACK_LIVES_MATTER'
  | 'ISLAMOPHOBIA'
  | 'ANTI_SEMITISM';

export declare const SocialCauses: {[index: TSocialCauses]: TSocialCauses};

declare type TApplicantStatus =
  | 'PENDING'
  | 'OFFERED'
  | 'REJECTED'
  | 'WITHRAWN'
  | 'APPROVED'
  | 'HIRED';

declare type TUserStatus = 'ACTIVE' | 'INACTIVE' | 'SUSPEND';

declare type TProjectLength =
  | 'LESS_THAN_A_DAY'
  | 'LESS_THAN_A_MONTH'
  | 'ONE_THREE_MONTHS'
  | 'THREE_SIX_MONTHS'
  | 'SIX_MONTHS_OR_MORE';

declare type TProject = 'ONE_OFF' | 'PART_TIME' | 'FULL_TIME';

declare type TProjectRemotePreference = 'ONSITE' | 'REMOOTE' | 'HYBRID';

declare type TProjectStatus = 'DRAFT' | 'EXPIRE' | 'ACTIVE';

declare type TProjectPayment = 'VOLUNTEER' | 'PAID';

declare type TProjectPaymentScheme = 'HOURL' | 'FIXED';

declare type TOrganization =
  | 'SOCIAL'
  | 'NONPROFIT'
  | 'COOP'
  | 'IIF'
  | 'PUBLIC'
  | 'INTERGOV'
  | 'DEPARTMENT'
  | 'OTHER';

declare type TNotification =
  | 'FOLLOWED'
  | 'COMMENT_LIKE'
  | 'POST_LIKE'
  | 'CHAT'
  | 'SHARE_POST'
  | 'SHARE_PROJECT'
  | 'COMMENT'
  | 'APPLICATION';

declare type TIdentity = 'organizations' | 'users';

declare type TChat = 'CHAT' | 'GROUPED' | 'CHANNEL';

declare type TChatMember = 'MEMBER' | 'ADMIN';

declare type TLanguage = 'en' | 'ja';

export declare const Text: {
  [lang: TLanguage]: Map<string, string>;
};
