import { z } from 'zod'

export const projectsSubject = z.tuple([
  z.union([
    z.literal('delete'),
    z.literal('manage'),
    z.literal('get'),
    z.literal('update'),
  ]),
  z.literal('Project'),
])

export type ProjectSubject = z.infer<typeof projectsSubject>
