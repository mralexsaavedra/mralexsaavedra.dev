import Image from 'next/image'
import { parseISO, format } from 'date-fns'
import styled from 'styled-components'

import Container from '@/components/Container'
import BlogSeo from '@/components/BlogSeo'

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

const Div = styled.div`
  align-items: start;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 4rem;
  margin-top: 0.5rem;
  width: 100%;

  @media (min-width: 768px) {
    align-items: center;
    flex-direction: row;
  }
`

const CenterDiv = styled.div`
  display: flex;
  align-items: center;
`

const Paragraph = styled.p`
  /* dark:text-gray-300 */
  color: rgba(55, 65, 81, 1);
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-left: 0.5rem;
`

const ReadingTime = styled.p`
  /* min-w-32 */
  color: rgba(107, 114, 128, 1);
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-top: 0.5rem;

   @media (min-width: 768px) {
    margin-top: 0;
  }
`

const DivChildren = styled.div`
  /* prose dark:prose-dark */
  max-width: none;
  width: 100%;
`

const DivDiscussTwitter = styled.div`
  color: rgba(55, 65, 81, 1);
  font-size: 0.875rem;
  line-height: 1.25rem;
`

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
