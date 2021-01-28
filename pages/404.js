import Link from 'next/link'
import { NextSeo } from 'next-seo'
import styled from 'styled-components'

import Container from '@/components/Container'

const Div = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 4rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 42rem;
`

const H1 = styled.h1`
  color: rgba(0, 0, 0, 1);
  font-size: 1.875rem;
  font-weight: bold;
  letter-spacing: -0.025em;
  line-height: 2.25rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 3rem;
    line-height: 1;
  }
  /* dark:text-white */
`

const P = styled.p`
  color: rgba(75, 85, 99, 1);
  margin-bottom: 2rem;
/* dark:text-gray-400*/
`

const A = styled.a`
  background-color: rgba(243, 244, 246, 1);
  border-radius: 0.375rem;
  color: rgba(0, 0, 0, 1);
  cursor: pointer;
  font-weight: bold;
  margin-left: auto;
  margin-right: auto;
  padding: 0.25rem;
  text-align: center;
  width: 16rem;

  @media (min-width: 640px) {
    padding: 1rem;
  }
/* dark:bg-gray-900 dark:text-white */
`

export default function NotFound () {
  return (
    <Container>
      <NextSeo
        title='404 – Alexander Saavedra'
        canonical='https://mralexsaavedra.dev/404'
        openGraph={{
          url: 'https://mralexsaavedra.dev/404',
          title: '404 – Alexander Saavedra'
        }}
      />
      <Div>
        <H1>
          451 – No disponible
        </H1>
        <P>
          Parece que has escontrado algo que solía existir o escribiste algo incorrecto.
          Puede que hayas escrito algo mal. ¿Puedes comprobar la URL?
        </P>
        <Link href='/'>
          <A>
            Volver a Inicio
          </A>
        </Link>
      </Div>
    </Container>
  )
}
