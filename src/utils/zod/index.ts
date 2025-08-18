import { z } from 'zod'

interface IGenericString {
  fieldName: string
  maxLength: number
  minLength: number
}

function genericString({ fieldName, maxLength, minLength }: IGenericString) {
  return z
    .string({
      required_error: `${fieldName} é obrigatório.`,
      invalid_type_error: `${fieldName} deve ser uma palavra .`,
    })
    .min(minLength, {
      message: `${fieldName} deve conter mais de ${minLength} caracteres.`,
    })
    .max(maxLength, {
      message: `${fieldName} deve conter menos de  ${maxLength} caracteres.`,
    })
}

interface IGenericNumberFloat {
  fieldName: string
  maxLength?: number
  minLength?: number
}

function genericNumberFloat({
  fieldName,
  maxLength = 99999,
  minLength = 0,
}: IGenericNumberFloat) {
  return z.coerce
    .number({
      required_error: `${fieldName} é obrigatório.`,
      invalid_type_error: `${fieldName} deve ser um número.`,
    })
    .min(minLength, {
      message: `${fieldName} deve ser maior que ${minLength}.`,
    })
    .max(maxLength, {
      message: `${fieldName} deve ser menor que  ${maxLength}.`,
    })
}

export const zodUtils = { genericString, genericNumberFloat }
