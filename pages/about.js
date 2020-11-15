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
import { CustomLink } from '../components/MDXComponents'
import Timeline from '../components/Timeline'

const url = 'https://mralexsaavedra.dev/about'
const title = 'Sobre mí – Alexander Saavedra'

const About = () => {
  const { colorMode } = useColorMode()
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  }

  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title
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
              🙋🏽‍♂️ Sobre mí
            </Heading>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              Hey, ¿qué tal? Mi nombre es Alexander. Nací hace 25 años en <CustomLink href='https://goo.gl/maps/LZH8njFKknKsagzF7'>Barakaldo (Bizkaia)</CustomLink> 📍. Estudié Ingeniería Informática en la <CustomLink href='https://www.ehu.eus/es/'>UPV</CustomLink> y actualmente trabajo como desarrollador web 👨🏽‍💻.
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              Tengo 3+ años de esperiencia trabajando en empresas privadas. En todas ellas he trabajado como desarrollador Full Stack aunque siempre acababa ejerciendo el rol de frontender.
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              Además, durante un año fui uno de lo co-organizadores de <CustomLink href='https://developers.google.com/community/gdg'>GDG Bilbao (Google Developer Group)</CustomLink> donde nos dedicábamos a realizar eventos, organizar charlas y compartir conociminentos.
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              Personalmente me considero un culo inquieto, así que intento siempre estar actualizado y seguir formándome, que siendo sincero, no es tarea fácil 😅.

              Hace poco he compenzado a compartir mi conocimiento con los demás. Por eso, te recomiendo que te suscribas a <CustomLink href='/newsletter'>mi newsletter</CustomLink> 💌.
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              En un futuro me gustaría dar todo mi conocimiento a los demás impartiendo mentoría 👨🏽‍🏫, charlas, etc. Tengo la confianza de que algún día me llegará ese momento 🤞🏽.
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              Mi vida no es sólo la programación. También me encanta viajar ✈, descubrir lugares nuevos 🌍, la música 🎧, el deporte 🏃🏽‍♂️, el surf 🏄🏽‍♂️, los videojuegos 👾 y muchas más cosas.
            </Text>
            <Timeline />
            <iframe
              height='280'
              src='https://www.google.com/maps/d/embed?mid=1guVv_clnlvYFCMEFZDt1DIKlAuMAI5pi'
              title='Descubriendo mundo 🌍'
              width='100%'
            />
          </Flex>
        </Stack>
      </Container>
    </>
  )
}

export default About
