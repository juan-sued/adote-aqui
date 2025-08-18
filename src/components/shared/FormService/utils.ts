import paramsSite from '@/data/paramsSite'
import { CreateCustomerValues } from './types'
import { useEffect, useState } from 'react'

function sendContactWhatsAppMessage({
  name,
  interest,
  contactForm,
  observation,
}: CreateCustomerValues) {
  const typeContact: string = contactForm === 'message' ? 'mensagem' : 'ligação'

  const message = `
Olá, meu nome é *${name}*.
Pretendo ser contatado via *${typeContact}*.

${
  interest
    ? `Observação:
*${interest}*.`
    : ''
}
${
  observation
    ? `Observação:
*${observation}*.`
    : ''
}
  `
  const formattedMessage = encodeURIComponent(message.trim())

  const phoneNumber = paramsSite.contactList[0]?.href.match(/(\d+)/)?.[0] ?? ''

  // Monta a URL do WhatsApp com o número extraído e a mensagem formatada
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${formattedMessage}`
  window.open(whatsappUrl, '_blank')
}
function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false,
  )

  useEffect(() => {
    if (typeof window === 'undefined') return
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [matches, query])

  return matches
}
export { sendContactWhatsAppMessage, useMediaQuery }
