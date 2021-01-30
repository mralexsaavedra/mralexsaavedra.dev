import Link from 'next/link'
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
    <Container title='404 – Alexander Saavedra'>
      <div className='flex flex-col justify-center items-start max-w-2xl mx-auto mb-16'>
        <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white'>
          451 – No disponible
        </h1>
        <P>
          Parece que has escontrado algo que solía existir o escribiste algo incorrecto.
          Puede que hayas escrito algo mal. ¿Puedes comprobar la URL?
        </P>
        <Link href='/'>
          <A>
            Volver a Inicio
          </A>
        </Link>
      </div>
    </Container>
  )
}
