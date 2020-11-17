import React, { useState, useEffect } from 'react'
import { DefaultSeo } from 'next-seo'
import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider, ColorModeProvider } from '@chakra-ui/core'
import Head from 'next/head'
import useDarkMode from 'use-dark-mode'

import MDXComponents from '../components/MDXComponents'

import { GlobalStyle } from '../styles/GlobalStyle'
import theme from '../styles/theme'

import SEO from '../next-seo.config'

const App = ({ Component, pageProps }) => {
  const [isMounted, setIsMounted] = useState(false)
  const { value } = useDarkMode(false)
  const themeColor = value ? 'dark' : 'light'

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <MDXProvider components={MDXComponents}>
        <ColorModeProvider value={themeColor}>
          <GlobalStyle>
            <Head>
              <meta content='IE=edge' httpEquiv='X-UA-Compatible' />
              <meta
                content='width=device-width, initial-scale=1'
                name='viewport'
              />
              <meta content='#ffffff' name='theme-color' />
              <meta content='#ffffff' name='msapplication-TileColor' />
              <meta
                content='/static/favicons/browserconfig.xml'
                name='msapplication-config'
              />
              {/* TODO: google-site-verification */}
              <meta
                content='qs2b2XPmsxoe1R3-eM6fB8ameiAk7xIF1A_H9XkC_Xo'
                name='google-site-verification'
              />
            </Head>
            <DefaultSeo {...SEO} />
            {isMounted && <Component {...pageProps} />}
          </GlobalStyle>
        </ColorModeProvider>
      </MDXProvider>
    </ThemeProvider>
  )
}

export default App
