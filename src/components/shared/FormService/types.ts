import { z } from 'zod'
import { createCustomerSchema } from './schemas'

export type CreateCustomerValues = z.infer<typeof createCustomerSchema>
