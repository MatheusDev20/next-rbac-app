import { z } from 'zod'

export const billingSubject = z.tuple([
  z.union([
    z.literal('create'),
    z.literal('delete'),
    z.literal('manage'),
    z.literal('export'),
    z.literal('get'),
  ]),
  z.literal('Billing'),
])

export type BilingSubject = z.infer<typeof billingSubject>
