import React, { useState, useRef } from 'react'
import {
  Heading,
  InputGroup,
  Box,
  Input,
  InputRightElement,
  Button,
  Text,
  useToast,
  useColorMode
} from '@chakra-ui/core'

const Subscribe = () => {
  const [loading, setLoading] = useState(false)
  const inputEl = useRef(null)
  const toast = useToast()
  const { colorMode } = useColorMode()
  const bgColor = {
    light: 'blue.50',
    dark: 'blue.900'
  }
  const borderColor = {
    light: 'blue.200',
    dark: 'blue.900'
  }

  const subscribe = async (e) => {
    e.preventDefault()
    setLoading(true)

    const res = await window.fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    setLoading(false)
    const { error } = await res.json()

    if (error) {
      toast({
        title: '🙇🏽‍ Ha ocurrido un error',
        description: error,
        status: 'error',
        duration: 3000,
        isClosable: true
      })

      return
    }

    inputEl.current.value = ''
    toast({
      title: 'Perfecto! 👍🏽',
      description: 'Ya estás suscritx.',
      status: 'success',
      duration: 3000,
      isClosable: true
    })
  }

  return (
    <Box
      border='1px solid'
      borderColor={borderColor[colorMode]}
      bg={bgColor[colorMode]}
      borderRadius={4}
      padding={6}
      my={4}
      w='100%'
    >
      <Heading as='h5' size='lg' mb={2}>
        ¡Suscríbete a la newsletter! 💌
      </Heading>
      <Text>
        Recibirás temas interesantes sobre desarrollo web y nuevos articulos que vaya publicando. <b>¡Sin spam! te lo prometo 👉🏽👈🏽</b>
      </Text>
      <InputGroup size='md' mt={4}>
        <Input
          aria-label='Email for newsletter'
          placeholder='tonystark@marvel.com'
          ref={inputEl}
          type='email'
        />
        <InputRightElement width='6.75rem' mr={2}>
          <Button
            isLoading={loading}
            fontWeight='bold'
            h='1.75rem'
            size='sm'
            onClick={subscribe}
          >
            Me suscribo
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  )
}

export default Subscribe
