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
  ADMIN: (user, { can, cannot }) => {
    can('manage', 'all')
    cannot(['transfer_ownership', 'update'], 'Organization')
    can(['transfer_ownership', 'update'], 'Organization', {
      ownerId: { $eq: user.id },
    })
  },
  MEMBER: (user, { can }) => {
    can('get', 'User')
    can(['create', 'get'], 'User')
    can(['update', 'delete'], 'Project', { ownerId: { $eq: user.id } })
  },
  BILLING: (_, { can }) => {
    can('manage', 'Billing')
  },
}
