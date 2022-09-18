export const SocialCauses = {
  SOCIAL: 'SOCIAL',
  POVERTY: 'POVERTY',
  HOMELESSNESS: 'HOMELESSNESS',
  HUNGER: 'HUNGER',
  HEALTH: 'HEALTH',
  SUBSTANCE_ABUSE: 'SUBSTANCE_ABUSE',
  MENTAL: 'MENTAL',
  BULLYING: 'BULLYING',
  SECURITY: 'SECURITY',
  EDUCATION: 'EDUCATION',
  GENDER_EQUALITY: 'GENDER_EQUALITY',
  GENDER_BASED_VIOLENCE: 'GENDER_BASED_VIOLENCE',
  SEXUAL_VIOLENCE: 'SEXUAL_VIOLENCE',
  DOMESTIC_VIOLENCE: 'DOMESTIC_VIOLENCE',
  WATER_SANITATION: 'WATER_SANITATION',
  SUSTAINABLE_ENERGY: 'SUSTAINABLE_ENERGY',
  DECENT_WORK: 'DECENT_WORK',
  INEQUALITY: 'INEQUALITY',
  MINORITY: 'MINORITY',
  MULTICULTURALISM: 'MULTICULTURALISM',
  DIVERSITY_INCLUSION: 'DIVERSITY_INCLUSION',
  INDIGENOUS_PEOPLES: 'INDIGENOUS_PEOPLES',
  DISABILITY: 'DISABILITY',
  LGBTQI: 'LGBTQI+',
  REFUGEE: 'REFUGEE',
  MIGRANTS: 'MIGRANTS',
  ORPHANS: 'ORPHANS',
  CHILD_PROTECTION: 'CHILD_PROTECTION',
  COMMUNITY_DEVELOPMENT: 'COMMUNITY_DEVELOPMENT',
  DEPOPULATION: 'DEPOPULATION',
  OVERPOPULATION: 'OVERPOPULATION',
  HUMAN_RIGHTS: 'HUMAN_RIGHTS',
  SUSTAINABILITY: 'SUSTAINABILITY',
  RESPONSIBLE_CONSUMPTION: 'RESPONSIBLE_CONSUMPTION',
  CLIMATE_CHANGE: 'CLIMATE_CHANGE',
  NATURAL_DISASTERS: 'NATURAL_DISASTERS',
  BIODIVERSITY: 'BIODIVERSITY',
  ANIMAL_RIGHTS: 'ANIMAL_RIGHTS',
  ARMED_CONFLICT: 'ARMED_CONFLICT',
  PEACEBUILDING: 'PEACEBUILDING',
  DEMOCRACY: 'DEMOCRACY',
  CIVIC_ENGAGEMENT: 'CIVIC_ENGAGEMENT',
  JUSTICE: 'JUSTICE',
  GOVERNANCE: 'GOVERNANCE',
  CRIME_PREVENTION: 'CRIME_PREVENTION',
  CORRUPTION: 'CORRUPTION',
  OTHER: 'OTHER',
  RURAL_DEVELOPMENT: 'RURAL_DEVELOPMENT',
  VEGANISM: 'VEGANISM',
  BLACK_LIVES_MATTER: 'BLACK_LIVES_MATTER',
  ISLAMOPHOBIA: 'ISLAMOPHOBIA',
  ANTI_SEMITISM: 'ANTI-SEMITISM',
};

export const ApplicantStatus = {
  PENDING: 'PENDING',
  OFFERED: 'OFFERED',
  REJECTED: 'REJECTED',
  WITHRAWN: 'WITHDRAWN',
  APPROVED: 'APPROVED',
  HIRED: 'HIRED',
};

export const UserStatusType = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  SUSPEND: 'SUSPEND',
};

export const ProjectLengthType = {
  LESS_THAN_A_DAY: 'LESS_THAN_A_DAY',
  LESS_THAN_A_MONTH: 'LESS_THAN_A_MONTH',
  ONE_THREE_MONTHS: '1_3_MONTHS',
  THREE_SIX_MONTHS: '3_6_MONTHS',
  SIX_MONTHS_OR_MORE: '6_MONTHS_OR_MORE',
};

export const ProjectType = {
  ONE_OFF: 'ONE_OFF',
  PART_TIME: 'PART_TIME',
  FULL_TIME: 'FULL_TIME',
};

export const ProjectRemotePreferenceType = {
  ONSITE: 'ONSITE',
  REMOTE: 'REMOTE',
  HYBRID: 'HYBRID',
};

export const ProjectStatusType = {
  DRAFT: 'DRAFT',
  EXPIRE: 'EXPIRE',
  ACTIVE: 'ACTIVE',
};

export const ProjectPaymentType = {
  VOLUNTEER: 'VOLUNTEER',
  PAID: 'PAID',
};

export const ProjectPaymentSchemeType = {
  HOURL: 'HOURLY',
  FIXED: 'FIXED',
};

export const OrganizationType = {
  SOCIAL: 'SOCIAL',
  NONPROFIT: 'NONPROFIT',
  COOP: 'COOP',
  IIF: 'IIF',
  PUBLIC: 'PUBLIC',
  INTERGOV: 'INTERGOV',
  DEPARTMENT: 'DEPARTMENT',
  OTHER: 'OTHER',
};

export const NotificationType = {
  FOLLOWED: 'FOLLOWED',
  COMMENT_LIKE: 'COMMENT_LIKE',
  POST_LIKE: 'POST_LIKE',
  CHAT: 'CHAT',
  SHARE_POST: 'SHARE_POST',
  SHARE_PROJECT: 'SHARE_PROJECT',
  COMMENT: 'COMMENT',
  APPLICATION: 'APPLICATION',
};


export const NotificationTitle = {
  FOLLOWED: 'Followed',
  COMMENT_LIKE: 'Comment liked',
  POST_LIKE: 'Post liked',
  CHAT: 'New Message',
  SHARE_POST: 'Post shared',
  SHARE_PROJECT: 'Project shared',
  COMMENT: 'New commented',
  APPLICATION: 'Project applied',
};


export const IdentityType = {
  ORG: 'organizations',
  USER: 'users',
};

export const ChatType = {
  CHAT: 'CHAT',
  GROUPED: 'GROUPED',
  CHANNEL: 'CHANNEL',
};

export const ChatMemberType = {
  MEMBER: 'MEMBER',
  ADMIN: 'ADMIN',
};

export const SearchType = {
  POSTS: 'posts',
  USERS: 'users',
  RELATED_USERS: 'related_users',
  PROJECTS: 'projects',
  CHATS: 'chats',
  ORGANIZATIONS: 'organizations'
}