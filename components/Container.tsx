import { useRouter } from 'next/router'
import Head from 'next/head'

import Footer from 'components/Footer'
import Header from 'components/Header'
import Share from 'components/Share'

export default function Container (props) {
  const { children, ...customMeta } = props
  const router = useRouter()
  const meta = {
    title: 'Alexander Saavedra – Software Frontend Engineer.',
    description: 'Front-end developer, JavaScript lover.',
    image: 'https://mralexsaavedra.dev/static/images/banner.png',
    type: 'website',
    ...customMeta
  }

  return (
    <div className='bg-white dark:bg-black'>
      <Head>
        <title>{meta.title}</title>
        <meta name='robots' content='follow, index' />
        <meta content={meta.description} name='description' />
        <meta property='og:url' content={`https://mralexsaavedra.dev${router.asPath}`} />
        <link rel='canonical' href={`https://mralexsaavedra.dev${router.asPath}`} />
        <meta property='og:type' content={meta.type} />
        <meta property='og:site_name' content='Alexander Saavedra' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        <meta property='og:image' content={meta.image} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@mralexsaavedra' />
        <meta name='twitter:title' content={meta.title} />
        <meta name='twitter:description' content={meta.description} />
        <meta name='twitter:image' content={meta.image} />
        {meta.date && (
          <meta property='article:published_time' content={meta.date} />
        )}
      </Head>

      <Header />

      <main
        id='skip'
        className='flex flex-col justify-center px-8 bg-white dark:bg-black'
      >
        {children}
        <Footer />
      </main>

      <Share />
    </div>
  )
}
