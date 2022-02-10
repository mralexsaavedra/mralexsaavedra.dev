import Link from 'next/link'

import ExternalLink from 'components/ExternalLink'

const params = new URLSearchParams({
  url: 'https://mralexsaavedra.dev',
  text: 'Me encanta tu web 🥰'
})

const twitterUrl = `https://twitter.com/share?${params}`

export default function Footer() {
  return (
    <footer className='flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8'>
      <hr className='w-full border-1 border-gray-200 dark:border-gray-800 mb-8' />
      <div className='w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3'>
        <div className='flex flex-col space-y-4'>
          <Link href='/'>
            <a className='text-gray-500 hover:text-gray-600 transition'>Inicio</a>
          </Link>
          <Link href='/about'>
            <a className='text-gray-500 hover:text-gray-600 transition'>
              Sobre mí
            </a>
          </Link>
          <Link href='/uses'>
            <a className='text-gray-500 hover:text-gray-600 transition'>
              Usos
            </a>
          </Link>
          <Link href='/cv'>
            <a
              href='/alexander-resume-2022.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-500 hover:text-gray-600 transition'>
              CV
            </a>
          </Link>
        </div>
        <div className='flex flex-col space-y-4'>
          <ExternalLink href='https://www.linkedin.com/in/mralexsaavedra'>
            LinkedIn
          </ExternalLink>
          <ExternalLink href='https://github.com/mralexsaavedra'>
            GitHub
          </ExternalLink>
          <ExternalLink href='https://twitter.com/mralexsaavedra'>
            Twitter
          </ExternalLink>
        </div>
        <div className='flex flex-col space-y-4'>
          <ExternalLink href='mailto:mralexsaavedra@gmail.com'>
            Contáctame
          </ExternalLink>
          <ExternalLink href='https://github.com/mralexsaavedra/mralexsaavedra.dev/discussions'>
            Feedback
          </ExternalLink>
          <ExternalLink href={twitterUrl}>
            Compártelo en Twitter
          </ExternalLink>
        </div>
      </div>
    </footer>
  )
}
