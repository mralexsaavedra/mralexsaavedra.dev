import React from 'react'
import NextLink from 'next/link'
import { useColorMode, Heading, Text, Flex, Box, Link } from '@chakra-ui/core'

const BlogPost = (frontMatter) => {
  const { title, summary } = frontMatter
  const { colorMode } = useColorMode()
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  }

  const slug = frontMatter.__resourcePath
    .replace('blog/', '')
    .replace('.mdx', '')

  return (
    <NextLink href={`blog/${slug}`} passHref>
      <Link w='100%' _hover={{ textDecoration: 'none' }}>
        <Box mb={8} display='block' width='100%'>
          <Flex
            width='100%'
            align='flex-start'
            justifyContent='space-between'
            flexDirection={['column', 'row']}
          >
            <Heading size='md' as='h3' mb={2} fontWeight='medium'>
              {title}
            </Heading>
            <Text
              color='gray.500'
              minWidth='105px'
              textAlign={['left', 'right']}
              mb={[4, 0]}
            >
              ⏱ {frontMatter.readingTime.text}
            </Text>
          </Flex>
          <Text color={secondaryTextColor[colorMode]}>{summary}</Text>
        </Box>
      </Link>
    </NextLink>
  )
}

export default BlogPost
