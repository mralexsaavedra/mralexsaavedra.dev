import React from 'react'
import { Flex, Link, IconButton } from '@chakra-ui/core'

const Skills = () => (
  <Flex align='center' mt={4} mb={4} wrap='wrap' direction='row'>
    <Link href='https://developer.mozilla.org/es/docs/Web/HTML' title='HTML' isExternal mr={4} mb={8}>
      <IconButton
        aria-label='HTML'
        icon='html'
        fontSize='50px'
        variant='link'
      />
    </Link>
    <Link href='https://developer.mozilla.org/es/docs/Web/CSS' title='CSS' isExternal mr={4} mb={8}>
      <IconButton
        aria-label='CSS'
        icon='css'
        fontSize='50px'
        variant='link'
      />
    </Link>
    <Link href='https://developer.mozilla.org/es/docs/Web/JavaScript' title='JavaScript' isExternal mr={4} mb={8}>
      <IconButton
        aria-label='JavaScript'
        icon='javascript'
        fontSize='50px'
        variant='link'
      />
    </Link>
    <Link href='https://git-scm.com/' title='Git' isExternal mr={4} mb={8}>
      <IconButton
        aria-label='Git'
        icon='git'
        fontSize='50px'
        variant='link'
      />
    </Link>
    <Link href='https://firebase.google.com/' title='Firebase' isExternal mr={4} mb={8}>
      <IconButton
        aria-label='Firebase'
        icon='firebase'
        fontSize='50px'
        variant='link'
      />
    </Link>
    <Link href='https://vuejs.org/' title='Vue' isExternal mr={4} mb={8}>
      <IconButton
        aria-label='Vue'
        icon='vue'
        fontSize='50px'
        variant='link'
      />
    </Link>
    <Link href='https://reactjs.org/' title='React' isExternal mr={4} mb={8}>
      <IconButton
        aria-label='React'
        icon='react'
        fontSize='50px'
        variant='link'
      />
    </Link>
    <Link href='https://nextjs.org/' title='NextJS' isExternal mr={4} mb={8}>
      <IconButton
        aria-label='NextJS'
        icon='nextjs'
        fontSize='50px'
        variant='link'
      />
    </Link>
    <Link href='https://graphql.org/' title='GraphQL' isExternal mr={4} mb={8}>
      <IconButton
        aria-label='GraphQL'
        icon='graphql'
        fontSize='50px'
        variant='link'
      />
    </Link>
    <Link href='https://jestjs.io/' title='Jest' isExternal mr={4} mb={8}>
      <IconButton
        aria-label='Jest'
        icon='jest'
        fontSize='50px'
        variant='link'
      />
    </Link>
    <Link href='https://webpack.js.org/' title='Webpack' isExternal mr={4} mb={8}>
      <IconButton
        aria-label='Webpack'
        icon='webpack'
        fontSize='50px'
        variant='link'
      />
    </Link>
    <Link href='https://nodejs.org/' title='NodeJS' isExternal mr={4} mb={8}>
      <IconButton
        aria-label='NodeJS'
        icon='nodejs'
        fontSize='50px'
        variant='link'
      />
    </Link>
    <Link href='https://github.com/' title='GitHub' isExternal mr={4} mb={8}>
      <IconButton
        aria-label='GitHub'
        icon='githubLogo'
        fontSize='50px'
        variant='link'
      />
    </Link>
    <Link href='https://code.visualstudio.com/' title='VSCode' isExternal mr={4} mb={8}>
      <IconButton
        aria-label='VSCode'
        icon='vscode'
        fontSize='50px'
        variant='link'
      />
    </Link>
  </Flex>
)

export default Skills
