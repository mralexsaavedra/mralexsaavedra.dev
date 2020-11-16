import React from 'react'
import { NextSeo } from 'next-seo'
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack
} from '@chakra-ui/core'

import Container from '../components/Container'

export default function UsesLayout ({ children }) {
  const { colorMode } = useColorMode()
  const textColor = {
    light: 'gray.700',
    dark: 'gray.400'
  }

  return (
    <Container>
      <NextSeo
        title='Uses – Alexander Saavedra'
        description='Aquí está toda la tecnología que estoy usando actualmente.'
        canonical='https://mralexsaavedra.dev/uses'
        openGraph={{
          url: 'https://mralexsaavedra.dev/uses',
          title: 'Uses – Alexander Saavedra',
          description: 'Aquí está toda la tecnología que estoy usando actualmente.'
        }}
      />
      <Stack
        as='section'
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
            Uses
          </Heading>
          <Flex mt={2} w='100%'>
            <Text fontSize='md' color={textColor[colorMode]}>
              Aquí te comparto el hardware y algunas herramientas que utilizo en mi día a día.
            </Text>
          </Flex>
        </Flex>
        {children}
      </Stack>
    </Container>
  )
}
