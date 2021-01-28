import Link from 'next/link'
import styled from 'styled-components'

const StyledLink = styled.a`
  width: 100%;
`

const Wrapper = styled.div`
  margin-bottom: 2rem;
  width: 100%;
`

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const H4 = styled.h4`
  color: rgba(17, 24, 39, 1);
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.75rem;
  margin-bottom: 0.5rem;
  width: 100%;

  @media (min-width: 768px) {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }

  /* dark:text-gray-100 */
`

const ReadingTime = styled.p`
  color: rgba(107, 114, 128, 1);
  margin-bottom: 1rem;
  text-align: left;
  width: 8rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
    text-align: right;
  }
`

const Summary = styled.p`
  color: rgba(75, 85, 99, 1);

  /* dark:text-gray-400 */
`

const BlogPost = ({ title, summary, slug, readingTime }) => {
  return (
    <Link href={`/blog/${slug}`}>
      <a className='w-full'>
        <div className='mb-8 w-full'>
          <div className='flex flex-col md:flex-row justify-between'>
            <h4 className='text-lg md:text-xl font-medium mb-2 w-full text-gray-900 dark:text-gray-100'>
              {title}
            </h4>
            <p className='text-gray-500 text-left md:text-right w-32 mb-4 md:mb-0'>
              ⏱ {readingTime.text}
            </p>
          </div>
          <p className='text-gray-600 dark:text-gray-400'>{summary}</p>
        </div>
      </a>
    </Link>
  )
}

export default BlogPost
