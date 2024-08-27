import { z } from 'zod'

export const userSubject = z.tuple([
  z.union([
    z.literal('get'),
    z.literal('create'),
    z.literal('delete'),
    z.literal('manage'),
    z.literal('invite'),
  ]),
  z.literal('User'),
])
