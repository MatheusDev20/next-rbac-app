import { z } from 'zod'

export const billingSubject = z.tuple([
  z.union([
    z.literal('create'),
    z.literal('delete'),
    z.literal('manage'),
    z.literal('export'),
    z.literal('get'),
  ]),
  z.literal('Invite'),
])

export type ProjectSubject = z.infer<typeof billingSubject>
