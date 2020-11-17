import React from 'react'
import NextLink from 'next/link'
import { Flex, Link, IconButton } from '@chakra-ui/core'

const Footer = () => (
  <Flex align='center' mb={4} direction='column'>
    <div>
      <Link href='https://twitter.com/mralexsaavedra' title='Twitter' isExternal>
        <IconButton
          aria-label='Twitter'
          icon='twitter'
          size='lg'
          color='gray.500'
          variant='ghost'
        />
      </Link>
      <Link href='https://instagram.com/mralexsaavedra' title='Instagram' isExternal>
        <IconButton
          aria-label='Instagram'
          icon='instagram'
          size='lg'
          color='gray.500'
          variant='ghost'
        />
      </Link>
      <Link href='https://github.com/mralexsaavedra' title='GitHub' isExternal>
        <IconButton
          aria-label='GitHub'
          icon='github'
          size='lg'
          color='gray.500'
          variant='ghost'
        />
      </Link>
      <Link
        href='https://www.linkedin.com/in/mralexsaavedra'
        title='LinkedIn'
        isExternal
      >
        <IconButton
          aria-label='LinkedIn'
          icon='linkedin'
          size='lg'
          color='gray.500'
          variant='ghost'
        />
      </Link>
      <Link
        href='https://open.spotify.com/user/mralexsaavedra'
        title='Spotify'
        isExternal
      >
        <IconButton
          aria-label='Spotify'
          icon='spotify'
          size='lg'
          color='gray.500'
          variant='ghost'
        />
      </Link>
      <Link href='mailto:mralexsaavedra@gmail.com' title='Email' isExternal>
        <IconButton
          aria-label='Email'
          icon='mail'
          size='lg'
          color='gray.500'
          variant='ghost'
        />
      </Link>
    </div>
    <div>
      <NextLink href='/uses' passHref>
        <Link
          fontSize='md'
          color='gray.500'
          minWidth='100px'
          mr={8}
          title='Uses'
        >
          /uses
        </Link>
      </NextLink>
      <NextLink href='/newsletter' passHref>
        <Link
          fontSize='md'
          color='gray.500'
          minWidth='100px'
          title='Newsletter'
        >
          /newsletter
        </Link>
      </NextLink>
    </div>
  </Flex>
)

export default Footer
