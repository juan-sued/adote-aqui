import { redirect } from 'next/navigation'

function getScroll(): number {
  const porcentagemScroll = window.scrollY
  return porcentagemScroll
}
const { format: formatPrice } = new Intl.NumberFormat('pt-br', {
  style: 'currency',
  currency: 'BRL',
})

function formatWeight(grams: number): string {
  if (grams >= 1000) {
    const kg = grams / 1000
    return kg % 1 === 0 ? `${kg}kg` : `${kg.toFixed(2).replace('.', ',')}kg`
  }
  return `${grams}g`
}
function getInitials(title: string): string {
  const nameArray = title.split(' ') // Divide o nome em palavras
  const initials = nameArray[0][0] + nameArray[1][0] // Pega a primeira letra de cada palavra
  return initials.toUpperCase() // Retorna as iniciais em maiúsculo
}

function incrementStarsFeedback(stars: number) {
  const arrStars = []

  while (arrStars.length < 5) {
    if (arrStars.length < stars) {
      arrStars.push('star-full.svg')
    } else if (arrStars.length === stars) {
      arrStars.push('star-middle.svg')
    } else {
      arrStars.push('star-empty.svg')
    }
  }

  return arrStars
}

function getRandomStarValue(minValue = 0): number {
  const possibleValues = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]

  // Filtra valores que são maiores ou iguais ao minValue
  const filteredValues = possibleValues.filter((value) => value >= minValue)

  // Seleciona um valor aleatório a partir da lista filtrada
  const randomIndex = Math.floor(Math.random() * filteredValues.length)
  return filteredValues[randomIndex]
}

/**
 * Redirects to a specified path with an encoded message as a query parameter.
 * @param {('error' | 'success')} type - The type of message, either 'error' or 'success'.
 * @param {string} path - The path to redirect to.
 * @param {string} message - The message to be encoded and added as a query parameter.
 * @returns {never} This function doesn't return as it triggers a redirect.
 */
export function encodedRedirect(
  type: 'error' | 'success',
  path: string,
  message: string,
) {
  return redirect(`${path}?${type}=${encodeURIComponent(message)}`)
}

export const utils = {
  getRandomStarValue,
  getScroll,
  getInitials,
  incrementStarsFeedback,
  formatPrice,
  formatWeight,
  encodedRedirect,
}
