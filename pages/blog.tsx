import { useState } from 'react'
import { InferGetStaticPropsType } from 'next'

import Container from 'components/Container'
import BlogPost from 'components/BlogPost'

import { pick } from 'lib/utils'

import { allBlogs } from '.contentlayer/data'

export default function Blog({
  posts
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  )

  return (
    <Container
      title='Blog – Lee Robinson'
      description='Thoughts on the software industry, programming, tech, videography, music, and my personal life.'
    >
      <div className='flex flex-col items-start justify-center max-w-2xl mx-auto mb-16'>
        <h1 className='mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white'>
          Blog
        </h1>
        <p className='mb-4 text-gray-600 dark:text-gray-400'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus modi veritatis aperiam, dicta laboriosam doloribus pariatur reiciendis quasi odio possimus quam beatae saepe dolor quas, minima ea ratione optio veniam.
        </p>
        <div className='relative w-full mb-16'>
          <input
            aria-label='Buscar artículos'
            type='text'
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder='Buscar artículos'
            className='block w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100'
          />
          <svg
            className='absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300'
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
        {!filteredBlogPosts.length && (
          <p className='mb-4 text-gray-600 dark:text-gray-400'>
            No se ha encontrado ninguno.
          </p>
        )}
        {filteredBlogPosts.map((post) => (
          <BlogPost key={post.title} {...post} />
        ))}
      </div>
    </Container>
  )
}

export function getStaticProps() {
  const posts = allBlogs
    .map((post) => pick(post, ['slug', 'title', 'summary', 'publishedAt']))
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )

  return { props: { posts } }
}
