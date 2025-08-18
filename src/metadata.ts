// metadata.ts

import { Metadata } from 'next'

const metaData: Metadata = {
  applicationName: 'AdoteAqui',
  title: 'AdoteAqui | Conectando quem doa com quem adota',
  description:
    'No AdoteAqui, você encontra um espaço para doar ou adotar animais de forma simples e responsável. Anuncie filhotes, cadastre animais em gestação e ajude a combater o abandono.',
  keywords:
    'adoção de animais, doar filhotes, adotar cachorro, adotar gato, adoção responsável, pets para adoção, doação de animais, cães, gatos, bichinhos',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'AdoteAqui | Conectando quem doa com quem adota',
    description:
      'Plataforma para facilitar a adoção responsável de cães e gatos. Anuncie animais grávidos, agende a doação de filhotes e encontre seu novo amigo.',
    url: 'https://adoteaqui.vercel.app',
    images: [
      {
        url: '/assets/adoteaqui-og.jpg',
        width: 1200,
        height: 630,
        alt: 'AdoteAqui - plataforma de adoção responsável de animais',
      },
    ],
    type: 'website',
    locale: 'pt_BR',
    siteName: 'AdoteAqui',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AdoteAqui',
    description:
      'Plataforma para conectar pessoas que querem doar ou adotar animais de estimação com amor e responsabilidade.',
    images: [
      {
        url: '/assets/adoteaqui-og.jpg',
        alt: 'AdoteAqui - plataforma de adoção responsável de animais',
      },
    ],
  },
  authors: [
    {
      name: 'AdoteAqui Team',
      url: 'https://adoteaqui.vercel.app',
    },
  ],
  robots:
    'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  alternates: {
    canonical: 'https://adoteaqui.vercel.app',
  },
  category: 'Adoção de Animais',
  abstract:
    'AdoteAqui é um espaço digital para conectar quem deseja doar animais com famílias que buscam adotar, promovendo a adoção responsável.',
  appleWebApp: false,
  appLinks: {},
  assets: '/public/assets',
  classification: 'Adoção responsável de animais',
  creator: 'AdoteAqui',
  generator: 'NextJS',
  formatDetection: { telephone: true, address: false, email: true },
  icons: {
    icon: '/favicon.ico',
  },
  publisher: 'AdoteAqui',
  referrer: 'no-referrer-when-downgrade',
}

export default metaData
