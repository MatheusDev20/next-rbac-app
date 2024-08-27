import {
  AbilityBuilder,
  CreateAbility,
  createMongoAbility,
  MongoAbility,
} from '@casl/ability'
import { z } from 'zod'

import { User } from './models/user'
import { permissions } from './permissions'
import { billingSubject } from './subjects/billing'
import { inviteSubject } from './subjects/invite'
import { organizationSubject } from './subjects/organization'
import { projectsSubject } from './subjects/project'
import { userSubject } from './subjects/user'

const appAbilities = z.union([
  projectsSubject,
  organizationSubject,
  billingSubject,
  inviteSubject,
  userSubject,
  z.tuple([z.literal('manage'), z.literal('all')]),
])

export * from './models/organization'
export * from './models/project'
export * from './models/user'

type AppAbilities = z.infer<typeof appAbilities>

export type AppAbility = MongoAbility<AppAbilities>
export const createAppAbility = createMongoAbility as CreateAbility<AppAbility>

export function defineAbilityFor(user: User) {
  const builder = new AbilityBuilder(createAppAbility)

  if (typeof permissions[user.role] !== 'function')
    throw new Error(`Unknown role: ${user.role}`)

  permissions[user.role](user, builder)

  const ability = builder.build({
    detectSubjectType: (object) => object.__typename,
  })

  return ability
}
