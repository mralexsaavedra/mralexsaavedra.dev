const title = 'Alexander Saavedra – Software Frontend Engineer.'
const description =
  'Front-end developer, JavaScript lover.'

const SEO = {
  title,
  description,
  canonical: 'https://mralexsaavedra.dev',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://mralexsaavedra.dev',
    title,
    description,
    images: [
      {
        url: 'https://mralexsaavedra.dev/static/images/banner.png',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  },
  twitter: {
    handle: '@mralexsaavedra',
    site: '@mralexsaavedra',
    cardType: 'summary_large_image'
  }
}

export default SEO
