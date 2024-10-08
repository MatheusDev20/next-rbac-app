import { z } from 'zod'

import { organizationSchema } from '../models/organization'

export const organizationSubject = z.tuple([
  z.union([
    z.literal('create'),
    z.literal('delete'),
    z.literal('manage'),
    z.literal('update'),
    z.literal('get'),
    z.literal('transfer_ownership'),
  ]),
  z.union([z.literal('Organization'), organizationSchema]),
])

export type ProjectSubject = z.infer<typeof organizationSubject>
