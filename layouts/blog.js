import Image from 'next/image'
import { parseISO, format } from 'date-fns'

import Container from '@/components/Container'
import BlogSeo from '@/components/BlogSeo'

const editUrl = (slug) =>
  `https://github.com/mralexsaavedra/mralexsaavedra.dev/edit/master/data/blog/${slug}.mdx`
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://mralexsaavedra.dev/blog/${slug}`
  )}`

export default function BlogLayout ({ children, frontMatter }) {
  return (
    <Container>
      <BlogSeo
        url={`https://mralexsaavedra.dev/blog/${frontMatter.slug}`}
        {...frontMatter}
      />
      <article className='flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full'>
        <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white'>
          {frontMatter.title}
        </h1>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2 mb-8'>
          <div className='flex items-center'>
            <Image
              alt='Alexander Saavedra'
              height={24}
              width={24}
              src='/avatar.jpg'
              className='rounded-full'
            />
            <p className='text-sm text-gray-700 dark:text-gray-300 ml-2'>
              {frontMatter.by}
              {'Alexander Saavedra / '}
              {format(parseISO(frontMatter.publishedAt), 'dd MMMM, yyyy')}
            </p>
          </div>
          <p className='text-sm text-gray-500 min-w-32 mt-2 md:mt-0'>
            {frontMatter.readingTime.text}
          </p>
        </div>
        <div className='prose dark:prose-dark max-w-none w-full'>
          {children}
        </div>
        <div className='text-sm text-gray-700 dark:text-gray-300'>
          <a
            href={discussUrl(frontMatter.slug)}
            target='_blank'
            rel='noopener noreferrer'
          >
            Discutir en Twitter
          </a>
          {' • '}
          <a
            href={editUrl(frontMatter.slug)}
            target='_blank'
            rel='noopener noreferrer'
          >
            Editar en GitHub
          </a>
        </div>
      </article>
    </Container>
  )
}
