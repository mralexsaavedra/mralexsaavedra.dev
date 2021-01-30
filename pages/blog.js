import { useState } from 'react'
import styled from 'styled-components'

import Container from '@/components/Container'
import BlogPost from '@/components/BlogPost'
import { getAllFilesFrontMatter } from '@/lib/mdx'

const Wrapper = styled.div`
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

const Paragraph = styled.p`
  color: rgba(75, 85, 99, 1);
  margin-bottom: 1rem;

  /*
    dark:text-gray-400
    prose
  */
`

const Div = styled.div`
  margin-bottom: 1rem;
  position: relative;
  width: 100%;
`

const Input = styled.input`
  background-color: rgba(255, 255, 255, 1);
  border-color: rgba(209, 213, 219, 1);
  border-radius: 0.375rem;
  border-width: 1px;
  color: rgba(17, 24, 39, 1);
  display: block;
  padding: 1rem 0.5rem;
  width: 100%;

  &:focus {
    --tw-ring-color: rgba(59, 130, 246, 1);
    border-color: rgba(59, 130, 246, 1);
  }

  /* dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100 */
`

const Svg = styled.svg`
  color: rgba(156, 163, 175, 1);
  height: 1.25rem;
  position: absolute;
  right: 0.75rem;
  top: 0.75rem;
  width: 1.25rem;

  /* dark:text-gray-300 */
`

const url = 'https://mralexsaavedra.dev/blog'
const title = 'Blog – Alexander Saavedra'
const description = 'Aquí encontrarás información sobre la industria del software, programación, tecnología y mi vida personal.'

export default function Blog ({ posts }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    )

  return (
    <Container
      title='Blog – Alexander Saavedra'
      description='Aquí encontrarás información sobre la industria del software, programación, tecnología y mi vida personal.'
    >
      <div className='flex flex-col justify-center items-start max-w-2xl mx-auto mb-16'>
        <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white'>
          📝 Blog
        </h1>
        <p className='text-gray-600 dark:text-gray-400 mb-4'>
          {`Aquí encontrarás todo el contenido que vaya escribiendo.
            En total, hay ${posts.length} artículos.
            Usa el buscador para filtrar por título.`}
        </p>
        <div className='relative w-full mb-4'>
          <input
            aria-label='Buscar artículos'
            type='text'
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder='Buscar artículos'
            className='px-4 py-2 border border-gray-300 dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100'
          />
          <svg
            className='absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        </div>
        {!filteredBlogPosts.length && 'No se encontró ningún artículo.'}
        {filteredBlogPosts.map((frontMatter) => (
          <BlogPost key={frontMatter.title} {...frontMatter} />
        ))}
      </div>
    </Container>
  )
}

export async function getStaticProps () {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}
