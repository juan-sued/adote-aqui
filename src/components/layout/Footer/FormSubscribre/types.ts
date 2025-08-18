import { z } from 'zod'
import { subscribreNewsListSchema } from './schemas'

export type SubscribreNewsListValues = z.infer<typeof subscribreNewsListSchema>
