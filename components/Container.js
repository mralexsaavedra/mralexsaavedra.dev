import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import Head from 'next/head'
import NextLink from 'next/link'
import styled from 'styled-components'

import Footer from '@/components/Footer'

const Div = styled.div`
  background-color: rgba(255, 255, 255, 1);
  /* dark:bg-black */
`

const Nav = styled.nav`
  /* sticky-nav */
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  justify-content: space-between;
  margin-bottom: 0px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0px;
  max-width: 56rem;
  padding: 2rem;
  width: 100%;

  @media (min-width: 768px) {
    margin-bottom: 2rem;
    margin-top: 2rem;
  }

  /* dark:bg-black --tw-bg-opacity: 0.6; */
`

const Button = styled.button`
  /* dark:bg-gray-800 */
  background-color: rgba(229, 231, 235, 1);
  border-radius: 0.25rem;
  height: 2.5rem;
  padding: 0.75rem;
  width: 2.5rem;
`

const Svg = styled.svg`
  /* dark:text-gray-200 */
  color: rgba(31, 41, 55, 1);
  height: 1rem;
  width: 1rem;
`

const StyledLink = styled.a`
  /* dark:text-gray-100 */
  color: rgba(17, 24, 39, 1);
  padding: 0.25rem;

  @media (min-width: 640px) {
    padding: 1rem;
  }
`

const Main = styled.main`
  /* dark:bg-black */
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 2rem;
  padding-right: 2rem;
`

export default function Container (props) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), [])

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
      <nav className='sticky-nav flex justify-between items-center max-w-4xl w-full p-8 my-0 md:my-8 mx-auto bg-white dark:bg-black bg-opacity-60'>
        <a href='#skip' className='sr-only focus:not-sr-only'>
          Ir al contenido
        </a>
        <button
          aria-label='Toggle Dark Mode'
          type='button'
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {mounted && (
            <Svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              stroke='currentColor'
            >
              {theme === 'dark'
                ? <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                  />
                : <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                  />}
            </Svg>
          )}
        </button>
        <div>
          {/* <NextLink href="/blog">
            <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">Blog</a>
          </NextLink> */}
          <NextLink href='/about'>
            <StyledLink>Sobre mí</StyledLink>
          </NextLink>
          <NextLink href='/'>
            <StyledLink>Inicio</StyledLink>
          </NextLink>
        </div>
      </nav>
      <main
        id='skip'
        className='flex flex-col justify-center bg-white dark:bg-black px-8'
      >
        {children}
        <Footer />
      </main>
    </div>
  )
}
