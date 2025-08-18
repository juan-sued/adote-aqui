// paramsSite.ts

import {
  PawPrintIcon,
  CalendarHeartIcon,
  HeartHandshakeIcon,
  HouseIcon,
  InstagramIcon,
  MailIcon,
  MessageCircleIcon,
  MessagesSquareIcon,
  HeartIcon,
} from 'lucide-react'
import { Cormorant_Garamond as CormorantGaramond } from 'next/font/google'

const fontFamily = CormorantGaramond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

export interface IHowItWorks {
  id: number
  text: string
  description: string
  trigger: number
  Icon: React.ElementType
}

type ParamsSite = {
  fontFamily: typeof fontFamily
  applicationName: string
  title: string
  catchPhrase: string
  headline: string
  subheadline: string
  ctaButtonText: string
  ctaDescriptionText: string
  sections: {
    title: string
    href: string
  }[]
  benefits: Array<{
    icon: React.ElementType
    title: string
    description: string
  }>
  about: {
    name: string
    crp: string
    description: string[]
  }
  steps: IHowItWorks[]
  faq: Array<{
    id: number
    question: string
    answer: string
  }>

  styleGuide: {
    themeColor: string
    fontFamily: string
    iconsStyle: string
  }
  keywords: string
  specialty: {
    name: string
    description: string
  }
  siteUrl: string
  contactList: Array<{
    icon: React.ElementType
    title: string
    textApresentation: string
    href: string
    description: string
  }>
}

const paramsSite: ParamsSite = {
  fontFamily,

  applicationName: 'AdoteAqui',
  title: 'AdoteAqui | Conectando quem doa com quem adota',
  catchPhrase: 'Adotar é um ato de amor. Doe, adote, transforme vidas.',
  headline:
    'Aqui, cada bichinho encontra a chance de ter um lar cheio de carinho.',
  subheadline:
    'No AdoteAqui, você pode anunciar animais para adoção, cadastrar pets em gestação e agendar doações responsáveis para quando nascerem.',
  ctaButtonText: 'Encontre um amigo',
  ctaDescriptionText:
    'Adotar salva vidas. Cada clique pode ser o início de uma nova história de amor.',
  sections: [
    { title: 'Início', href: '#home' },
    { title: 'Benefícios', href: '#benefits' },
    { title: 'Passos', href: '#steps' },
    { title: 'Sobre Nós', href: '#about-us' },
    { title: 'FAQ', href: '#faq' },
  ],
  benefits: [
    {
      icon: PawPrintIcon,
      title: 'Adoção responsável',
      description: 'Conectamos doadores e adotantes de forma segura e ética.',
    },
    {
      icon: HeartHandshakeIcon,
      title: 'Cuidado e amor',
      description: 'Animais ganham novas famílias preparadas para recebê-los.',
    },
    {
      icon: CalendarHeartIcon,
      title: 'Agendamento de doações',
      description:
        'Cadastre animais em gestação e programe a doação dos filhotes.',
    },
    {
      icon: HouseIcon,
      title: 'Um lar para cada pet',
      description: 'Ajudamos a reduzir o abandono e a dar novas chances.',
    },
  ],
  about: {
    name: 'AdoteAqui',
    crp: '',
    description: [
      'O AdoteAqui nasceu com o propósito de unir quem precisa doar animais com famílias dispostas a adotar.',
      'Queremos reduzir o abandono e facilitar a adoção responsável de cães e gatos.',
      'Acreditamos que cada bichinho merece amor, cuidado e um lar seguro.',
    ],
  },
  steps: [
    {
      id: 1,
      text: 'Anuncie seu pet',
      description: 'Cadastre o animal disponível para adoção ou em gestação.',
      trigger: 5,
      Icon: MessagesSquareIcon,
    },
    {
      id: 2,
      text: 'Agende a doação',
      description:
        'Se o animal está grávido, você pode agendar a data para disponibilizar os filhotes.',
      trigger: 35,
      Icon: CalendarHeartIcon,
    },
    {
      id: 3,
      text: 'Encontre adotantes',
      description:
        'Interessados entram em contato para conhecer e adotar o pet.',
      trigger: 65,
      Icon: HeartIcon,
    },
    {
      id: 4,
      text: 'Finalização',
      description:
        'O bichinho encontra um novo lar cheio de carinho e cuidado.',
      trigger: 95,
      Icon: HeartHandshakeIcon,
    },
  ],
  faq: [
    {
      id: 1,
      question: 'É gratuito anunciar um animal?',
      answer:
        'Sim, o AdoteAqui é 100% gratuito para quem doa e para quem adota.',
    },
    {
      id: 2,
      question: 'Posso anunciar animais ainda grávidos?',
      answer:
        'Sim, você pode cadastrar e agendar a doação para quando os filhotes nascerem.',
    },
    {
      id: 3,
      question: 'Quais animais posso anunciar?',
      answer:
        'Cães e gatos são aceitos. Outros animais de estimação podem ser avaliados futuramente.',
    },
    {
      id: 4,
      question: 'Como garantir que o adotante cuidará bem?',
      answer:
        'Você pode conversar com os interessados antes de confirmar a adoção.',
    },
    {
      id: 5,
      question: 'Preciso pagar alguma taxa?',
      answer:
        'Não. Nosso objetivo é facilitar a adoção responsável sem custos.',
    },
  ],

  styleGuide: {
    themeColor: '#F6EFEF', // tom aconchegante e acolhedor
    fontFamily: `'Lora', serif`,
    iconsStyle: 'friendly-line', // estilo amigável para ícones
  },

  keywords:
    'adoção de animais, adote aqui, doar filhotes, adotar cachorro, adotar gato, adoção responsável, pets, cães, gatos, bichinhos',
  specialty: {
    name: 'Adoção responsável',
    description:
      'Facilitamos a conexão entre quem doa e quem adota animais, sempre com foco no bem-estar dos pets.',
  },
  siteUrl: 'https://adoteaqui.vercel.app',
  contactList: [
    {
      icon: MessageCircleIcon,
      title: 'WhatsApp',
      textApresentation: '+55 (81) 90000-0000',
      href: 'https://wa.me/5581900000000?text=Gostaria%20de%20saber%20mais%20sobre%20o%20AdoteAqui.',
      description: 'Fale conosco pelo WhatsApp',
    },
    {
      icon: InstagramIcon,
      title: 'Instagram',
      href: 'https://www.instagram.com/adoteaqui',
      textApresentation: '@adoteaqui',
      description: 'Acompanhe histórias de adoção e novidades',
    },
    {
      icon: MailIcon,
      title: 'Email',
      description: 'Envie-nos uma mensagem',
      textApresentation: 'contato@adoteaqui.com',
      href: 'mailto:contato@adoteaqui.com',
    },
  ],
}

export default paramsSite
