import Image from 'next/image'
import styled from 'styled-components'

import Container from '@/components/Container'
import Skills from '@/components/Skills'
import Timeline from '@/components/Timeline'

import { H1, Wrapper } from '@/styles/global'

const H2 = styled.h2`
  color: rgba(75, 85, 99, 1)
  font-size: 1.125rem;
  line-height: 1.75rem;
  padding: 0;

  @media (min-width: 768px) {
    padding-right: 1rem;
  }

  /* dark:text-gray-400 */
`

const Image = styled.img`
  border-radius: 9999px;
  height: 12rem;
  margin-top: 2rem;
  object-fit: cover;
  width: 12rem;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`

const Div = styled.div`
  align-items: center;
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
  margin-top: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export default function Home () {
  return (
    <Container>
      <Wrapper>
        <H1>
          Hey 👋🏽,&nbsp;soy Alexander Saavedra
        </H1>
        <Div>
          <H2>
            Soy Software Engineer y llevo 3+ años trabajando como Frontend Developer
            y espezializado en el ecosistema de JavaScript.
            Amante de las buenas practicas y del continuo aprendizaje de este mundillo.
          </H2>
          <Image
            alt='Alexander Saavedra'
            height={700}
            width={700}
            src='/avatar.jpg'
            className='rounded-full object-cover mt-8 md:mt-0'
          />
        </Div>
        <Skills />
        <Timeline />
      </Wrapper>
    </Container>
  )
}
