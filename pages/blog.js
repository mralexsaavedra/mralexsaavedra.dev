import React, { useState } from 'react'
import { NextSeo } from 'next-seo'
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Input,
  InputGroup
} from '@chakra-ui/core'

import Container from '../components/Container'
// import BlogPost from '../components/BlogPost'

import { frontMatter as blogPosts } from './blog/*.mdx'

const url = 'https://mralexsaavedra.dev/blog'
const title = 'Blog – Alexander Saavedra'
const description =
  'Thoughts on the software industry, programming, tech, videography, music, and my personal life.'

const Blog = () => {
  const [searchValue, setSearchValue] = useState('')
  const { colorMode } = useColorMode()
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  }

  const filteredBlogPosts = blogPosts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    )

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
              📝 Blog
            </Heading>
            <Text color={secondaryTextColor[colorMode]}>
              {`Aquí encontrarás todo el contenido que vaya escribiendo.
                En total, hay ${blogPosts.length} artículos.
                Usa el buscador para filtrar por título.`}
            </Text>
            <InputGroup my={4} mr={4} w='100%'>
              <Input
                aria-label='Buscar artículos 🔍'
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder='Buscar artículos 🔍'
              />
            </InputGroup>
          </Flex>
          <Flex
            flexDirection='column'
            justifyContent='flex-start'
            alignItems='flex-start'
            maxWidth='700px'
            width='100%'
            mt={8}
          >
            No se encuentran artículos 🥴
            {/* {!filteredBlogPosts.length && 'No se encuentran artículos 🥴'}
            {filteredBlogPosts.map((frontMatter) => (
              <BlogPost key={frontMatter.title} {...frontMatter} />
            ))} */}
          </Flex>
        </Stack>
      </Container>
    </>
  )
}

export default Blog
