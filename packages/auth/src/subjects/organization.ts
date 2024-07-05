import { z } from 'zod'

export const organizationSubject = z.tuple([
  z.union([
    z.literal('create'),
    z.literal('delete'),
    z.literal('manage'),
    z.literal('get'),
    z.literal('transfer_ownership'),
  ]),
  z.literal('Organization'),
])

export type ProjectSubject = z.infer<typeof organizationSubject>
