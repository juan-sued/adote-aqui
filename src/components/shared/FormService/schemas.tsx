import { z } from 'zod'

export const createCustomerSchema = z.object({
  name: z
    .string({ required_error: 'O nome é obrigatório.' })
    .min(5, {
      message: 'O nome deve conter mais de 2 caracteres.',
    })
    .max(255, {
      message: 'O nome deve conter menos de 255 caracteres.',
    }),

  interest: z
    .string()
    .min(1, {
      message:
        'O campo produtos de interesse deve conter mais de 8 caracteres.',
    })
    .max(500, {
      message:
        'O campo produtos de interesse deve conter menos de 8 caracteres.',
    })
    .optional(),
  observation: z
    .string()
    .min(1, {
      message: 'A observação deve conter mais de 8 caracteres.',
    })
    .max(500, {
      message: 'A observação deve conter menos de 500 caracteres.',
    })
    .optional(),

  contactForm: z.enum(['message', 'call'], {
    required_error: 'A forma de contato é obrigatória.',
    invalid_type_error:
      'Forma de contato inválida. Escolha entre "ligação" ou "mensagem".',
  }),
})
