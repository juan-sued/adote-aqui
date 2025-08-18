import { z } from 'zod'

export const subscribreNewsListSchema = z.object({
  email: z
    .string({ message: 'O email é obrigatório' })
    .email({ message: 'O email é obrigatório' })
    .min(5, {
      message: 'O nome deve conter mais de 2 caracteres.',
    })
    .max(255, {
      message: 'O nome deve conter menos de 255 caracteres.',
    }),
})
