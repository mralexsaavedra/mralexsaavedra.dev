import { NextSeo } from 'next-seo'
import styled from 'styled-components'

import Container from '@/components/Container'

const Article = styled.article`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 4rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 42rem;
  width: 100%;
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

const Paragraph = styled.p`
  /* dark:text-gray-300 */
  color: rgba(55, 65, 81, 1);
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-bottom: 4rem;
  margin-top: 0.5rem;
`

const Div = styled.div`
  /* prose dark:prose-dark */
  width: 100%;
`

export default function UsesLayout ({ children }) {
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
      <article className='flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full'>
        <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white'>
          Uses
        </h1>
        <p className='text-gray-700 dark:text-gray-300 mt-2 mb-8'>
          Aquí te comparto el hardware y algunas herramientas que utilizo en mi día a día.
        </p>
        <div className='prose dark:prose-dark w-full'>{children}</div>
      </article>
    </Container>
  )
}
