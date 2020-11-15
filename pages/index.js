import React from 'react'
import { useColorMode, Heading, Text, Flex, Stack } from '@chakra-ui/core'

import Container from '../components/Container'
import Subscribe from '../components/Subscribe'

// import { frontMatter as stackGuide } from './blog/stack.mdx';

const Index = () => {
  const { colorMode } = useColorMode()
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  }

  return (
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
            Hey 👋🏽, soy Alexander Saavedra
          </Heading>
          <Text color={secondaryTextColor[colorMode]}>
            Soy Software Engineer y llevo 3+ años trabajando como Frontend Developer y espezializado en el ecosistema de JavaScript con experiencia en tecnologías y frameworks cómo Node.js, Vue, React, Firebase, etc.
          </Text>
        </Flex>
        <Flex
          flexDirection='column'
          justifyContent='flex-start'
          alignItems='flex-start'
          maxWidth='700px'
          mt={8}
        >
          <Heading letterSpacing='tight' mb={4} size='xl' fontWeight={700}>
            🚀 Últimos artículos
          </Heading>
          Aún no hay artículos publicados, pero llegarán 😬
          {/* { <BlogPost {...stackGuide} />} */}
        </Flex>
        <Subscribe />
      </Stack>
    </Container>
  )
}

export default Index
