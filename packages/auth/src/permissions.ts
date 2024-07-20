/* eslint-disable @typescript-eslint/no-explicit-any */
import { AbilityBuilder } from '@casl/ability'

import { AppAbility } from '.'
import { Role } from './models/roles'
import { User } from './models/user'

type PermissionsByRole = (
  user: User,
  builder: AbilityBuilder<AppAbility>,
) => void

export const permissions: Record<Role, PermissionsByRole> = {
  ADMIN: (_, { can }) => {
    can('manage', 'all')
  },
  MEMBER: (user, { can }) => {
    can('invite', 'User')
    can('manage', 'Project')
    can('transfer_ownership', 'Organization')
    can(['update', 'delete'], 'Project', {})
    can('delete', 'Organization', { ownerId: { $eq: user.id } })
  },
  BILLING: () => {},
}
