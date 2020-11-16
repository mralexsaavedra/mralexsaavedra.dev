import React from 'react'
import { NextSeo } from 'next-seo'
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  List
} from '@chakra-ui/core'

import Container from '../components/Container'
import Subscribe from '../components/Subscribe'
// import NewsletterLink from '../components/NewsletterLink'

import { frontMatter as newsletters } from './newsletter/**/*.mdx'

const url = 'https://mralexsaavedra.dev/newsletter'
const title = 'Newsletter – Alexander Saavedra'
const description =
  'Reflexiones sobre la industria del software, la programación, la tecnología, la filmografía, la música y mi vida personal.'

const Newsletter = () => {
  const { colorMode } = useColorMode()
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  }

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description
        }}
      />
      <Container>
        <Stack
          as='main'
          spacing={8}
          justifyContent='center'
          alignItems='flex-start'
          m='0 auto 4rem auto'
          maxWidth='700px'
        >
          <Flex
            flexDirection='column'
            justifyContent='flex-start'
            alignItems='flex-start'
            maxWidth='700px'
          >
            <Heading letterSpacing='tight' mb={2} as='h1' size='2xl'>
              ¡Apúntate a la newsletter!
            </Heading>
            <Text color={secondaryTextColor[colorMode]}>
              Venga va, <b>anímate</b> y <b>suscríbete</b>. Te aseguro que recibirás artículos <b>muuuuy interesantes</b>. Y como te prometo abajo, el <b>spam</b> está totalmente <b>prohibido</b> ⛔
            </Text>
          </Flex>
          <Subscribe />
          <Flex
            flexDirection='column'
            justifyContent='flex-start'
            alignItems='flex-start'
            maxWidth='700px'
            mt={8}
          >
            <Heading letterSpacing='tight' mb={4} size='xl' fontWeight={700}>
              Archivos
            </Heading>
            No se encuentran artículos 🥴
            <List styleType='disc'>
              {/* {newsletters
                .sort(
                  (a, b) =>
                    Number(new Date(b.publishedAt)) -
                    Number(new Date(a.publishedAt))
                )
                .map((frontMatter) => (
                  <NewsletterLink key={frontMatter.title} {...frontMatter} />
                ))} */}
            </List>
          </Flex>
        </Stack>
      </Container>
    </>
  )
}

export default Newsletter
