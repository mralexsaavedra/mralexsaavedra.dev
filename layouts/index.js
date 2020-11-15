import React from 'react'
import { parseISO, format } from 'date-fns'
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Avatar,
  Link,
  Box
} from '@chakra-ui/core'

import Container from '../components/Container'
import Subscribe from '../components/Subscribe'
import BlogSeo from '../components/BlogSeo'

const editUrl = (slug) =>
  `https://github.com/mralexsaavedra/mralexsaavedra.dev/edit/master/pages/blog/${slug}.mdx`
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://mralexsaavedra.dev/blog/${slug}`
  )}`

export default function BlogLayout ({ children, frontMatter }) {
  const slug = frontMatter.__resourcePath
    .replace('blog/', '')
    .replace('.mdx', '')
  const { colorMode } = useColorMode()
  const textColor = {
    light: 'gray.700',
    dark: 'gray.400'
  }

  return (
    <Container>
      <BlogSeo url={`https://mralexsaavedra.dev/blog/${slug}`} {...frontMatter} />
      <Stack
        as='article'
        spacing={8}
        justifyContent='center'
        alignItems='flex-start'
        m='0 auto 4rem auto'
        maxWidth='700px'
        w='100%'
      >
        <Flex
          flexDirection='column'
          justifyContent='flex-start'
          alignItems='flex-start'
          maxWidth='700px'
          w='100%'
        >
          <Heading letterSpacing='tight' mb={2} as='h1' size='2xl'>
            {frontMatter.title}
          </Heading>
          <Flex
            justify='space-between'
            align={['initial', 'center']}
            direction={['column', 'row']}
            mt={2}
            w='100%'
            mb={4}
          >
            <Flex align='center'>
              <Avatar
                size='xs'
                name='Alexander Saavedra'
                src='https://bit.ly/3f5jkIu'
                mr={2}
              />
              <Text fontSize='sm' color={textColor[colorMode]}>
                {frontMatter.by}
                {'Alexander Saavedra / '}
                📅 {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
              </Text>
            </Flex>
            <Text fontSize='sm' color='gray.500' minWidth='100px' mt={[2, 0]}>
              ⏱ {frontMatter.readingTime.text}
            </Text>
          </Flex>
        </Flex>
        {children}
        <Box>
          <strong>
            <Link href={discussUrl(slug)} isExternal>
              Comentar en Twitter
            </Link>
            {' • '}
            <Link href={editUrl(slug)} isExternal>
              Editar en GitHub
            </Link>
          </strong>
        </Box>
        <Subscribe />
      </Stack>
    </Container>
  )
}
