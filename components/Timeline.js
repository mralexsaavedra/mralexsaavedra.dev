import React, { useState } from 'react'
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Button,
  List,
  ListItem,
  Icon,
  Stack,
  Divider
} from '@chakra-ui/core'

const YearDivider = () => {
  const { colorMode } = useColorMode()
  const borderColor = {
    light: 'gray.200',
    dark: 'gray.600'
  }

  return <Divider borderColor={borderColor[colorMode]} my={8} w='100%' />
}

const TimelineStep = ({ title, children }) => {
  const { colorMode } = useColorMode()
  const color = {
    light: 'gray.700',
    dark: 'gray.400'
  }

  return (
    <ListItem>
      <Stack ml={2} mb={4}>
        <Flex align='center'>
          <Icon name='check-circle' mr={2} color='whatsapp.500' />
          <Text fontWeight='medium'>{title}</Text>
        </Flex>
        <Text color={color[colorMode]} ml={6}>
          {children}
        </Text>
      </Stack>
    </ListItem>
  )
}

const FullTimeline = () => (
  <>
    <YearDivider />
    <Heading as='h3' size='lg' fontWeight='bold' mb={4} letterSpacing='tighter'>
      2018
    </Heading>
    <List>
      <TimelineStep title='Me muevo de empresa 🤝🏽'>
        A finales de año decido cambiar de empresa (S&M Services). Mismo puesto que la anterior, distinta localidad, centro de Bilbao.
      </TimelineStep>
      <TimelineStep title='Me graduo 👨🏽‍🎓'>
        Siempre echaré de menos la época en la que estuve en la universidad.
      </TimelineStep>
      <TimelineStep title='Presento el TFG 💯'>
        Después de muchos meses y duro trabajo presento mi Trabajo de Fin de Grado. Mereció la pena todo el esfuerzo y cariño puesto en él.
      </TimelineStep>
    </List>
    <YearDivider />
    <Heading as='h3' size='lg' fontWeight='bold' mb={4} letterSpacing='tighter'>
      2017
    </Heading>
    <List>
      <TimelineStep title='Primera entrevista + primer trabajo 🔥'>
        Por fín hago la primera entrevista de mi vida, y consigo el trabajo. Me contratan como desarrollador Full Stack en Inycom, ubicada en el parque tecnológico de Zamudio y con sede en Zaragoza.
      </TimelineStep>
      <TimelineStep title='Me operaran de los meniscos 👩🏽‍🏭' />
      <TimelineStep title='Las prácticas del grado 🌟'>
        Cumplo un periodo de 6 meses en prácticas en una consultoría (SHKWays) ubicada en el vibero de empresas de la Universidad de Deusto. Aquí comienza mi camino haciendo el mundo del desarrollo web.
      </TimelineStep>
    </List>
    <YearDivider />
    <Heading as='h3' size='lg' fontWeight='bold' mb={4} letterSpacing='tighter'>
      2013
    </Heading>
    <List>
      <TimelineStep title='Bienvenida a la familia 🐶'>
        Adoptamos a Lua, una pequeña Yorkshire Terrier.
      </TimelineStep>
      <TimelineStep title='Comienza mi carrera universitaria 👨🏽‍🏫'>
        Empiezo el Grado de Ingeniería Informática de Gestión y Sistemas de la Información en la Escuela de Ingenieros de Bilbao cerca del estadio de San Mames 🔴⚪.
      </TimelineStep>
      <TimelineStep title='Termino Bachillerato 🚸'>
        Desde el instituto hasta el bachillerato estuve en la ikastola de Beurko.
      </TimelineStep>
      <TimelineStep title='Apruebo el carnet de conducir 🚗' />
    </List>
    <YearDivider />
    <Heading as='h3' size='lg' fontWeight='bold' mb={4} letterSpacing='tighter'>
      2011
    </Heading>
    <List>
      <TimelineStep title='Viaje de estudios a Andorra + 🏂🏽'>
        Para finalizar la ESO nos vamos de viaje de estudios a Andorra, donde por primera vez hago snowboard y el deporte el cual reptiré todos los años.
      </TimelineStep>
    </List>
    <YearDivider />
    <Heading as='h3' size='lg' fontWeight='bold' mb={4} letterSpacing='tighter'>
      2010
    </Heading>
    <List>
      <TimelineStep title='La época 👦🏽'>
        Empiezo la pubertad poniendome pendientes.
      </TimelineStep>
    </List>
    <YearDivider />
    <Heading as='h3' size='lg' fontWeight='bold' mb={4} letterSpacing='tighter'>
      2008
    </Heading>
    <List>
      <TimelineStep title='Primer ordenador 💻'>
        Hasta entonces no paraba de jugar en los ciber de mi localidad con mi cuadrilla. 😂
      </TimelineStep>
    </List>
    <YearDivider />
    <Heading as='h3' size='lg' fontWeight='bold' mb={4} letterSpacing='tighter'>
      2005
    </Heading>
    <List>
      <TimelineStep title='Comunión + Port Aventura 🎢' />
    </List>
    <YearDivider />
    <Heading as='h3' size='lg' fontWeight='bold' mb={4} letterSpacing='tighter'>
      2003
    </Heading>
    <List>
      <TimelineStep title='Primera tabla 🛹'>
        Me compran mi primera tabla de skate. Una aficción que me durará toda la vida.
      </TimelineStep>
    </List>
    <YearDivider />
    <Heading as='h3' size='lg' fontWeight='bold' mb={4} letterSpacing='tighter'>
      2000
    </Heading>
    <List>
      <TimelineStep title='Primeros pasos como gamer 🎮'>
        Comencé mi carrera de entrenador Pokemon en GameBoy.
      </TimelineStep>
    </List>
    <YearDivider />
    <Heading as='h3' size='lg' fontWeight='bold' mb={4} letterSpacing='tighter'>
      1995
    </Heading>
    <List>
      <TimelineStep title='Nací 👶🏼🍼' />
    </List>
    <YearDivider />
  </>
)

const Timeline = () => {
  const [isShowingFullTimeline, showFullTimeline] = useState(false)

  return (
    <Flex
      flexDirection='column'
      justifyContent='flex-start'
      alignItems='flex-start'
      maxWidth='700px'
      mt={8}
    >
      <Heading letterSpacing='tight' mb={4} size='xl' fontWeight='bold'>
        ⏳ Timeline
      </Heading>
      <Heading
        as='h3'
        size='lg'
        fontWeight='bold'
        mb={4}
        letterSpacing='tighter'
      >
        2020
      </Heading>
      <List>
        <TimelineStep title='Entrevistas y + entrevistas 🥱' />
        <TimelineStep title='Acabo el máster 👏🏽'>
          En verano acabo el máster después de muchiiiiisimo esfuerzo.
        </TimelineStep>
        <TimelineStep title='Otro deporte más 🏄🏽‍♂️' />
        <TimelineStep title='Covid attack 😷' />
      </List>
      <YearDivider />
      <Heading as='h3' size='lg' fontWeight='bold' mb={4} letterSpacing='tighter'>
        2019
      </Heading>
      <List>
        <TimelineStep title='Bye bye trabajo 👋🏽'>
          Decido dedicar todo mi tiempo y esfuerzo al máster.
        </TimelineStep>
        <TimelineStep title='Regreso a casa 🏠'>
          Me vuelvo con la familia.
        </TimelineStep>
        <TimelineStep title='Empiezo un máster ⚡'>
          Decido hacer un máster de Animación 3D de personajes de la mano de Lightbox Academy.
        </TimelineStep>
        <TimelineStep title='Primer PC a piezas 🛠'>
          Invierto dinero y tiempo en mi primer ordenador montado a piezas por mí. 😍
        </TimelineStep>
        <TimelineStep title='Me mudo unos meses 💼'>
          Voy a vivir a Salamanca unos meses y dedico mis días a trabajar en remoto y estudiar el máster.
        </TimelineStep>
        <TimelineStep title='Google Developer Group Bilbao 🕺🏽'>
          Consigo ser uno de los co-organizadores de GDG Bilbao.
        </TimelineStep>
        <TimelineStep title='Me apunto a Crossfit 🏋🏽‍♂️' />
      </List>
      {isShowingFullTimeline
        ? <FullTimeline />
        : (
          <Button
            my={4}
            mx='auto'
            fontWeight='medium'
            rightIcon='chevron-down'
            variant='ghost'
            onClick={() => showFullTimeline(true)}
          >
            See More
          </Button>
          )}
    </Flex>
  )
}

export default Timeline
