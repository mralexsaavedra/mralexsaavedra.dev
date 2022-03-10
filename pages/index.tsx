import Image from 'next/image'

import Container from 'components/Container'
import Experiences from 'components/Experiences'
import ExternalLink from 'components/ExternalLink'
import GitHub from 'components/Icons/GitHub'
import GithubRepos from 'components/GithubRepos'
import LinkedIn from 'components/Icons/LinkedIn'
import Skills from 'components/Skills'
import Twitter from 'components/Icons/Twitter'

export default function Home() {
  return (
    <Container>
      <div className='flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16'>
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white'>
              Alexander Saavedra
            </h1>
            <h2 className='text-gray-700 dark:text-gray-200 mb-4'>
              Front-end Engineer en {' '}
              <ExternalLink href='https://lookiero.es/'>
                <span className="font-semibold dark:text-white">Lookiero</span>
              </ExternalLink>
            </h2>
            <p className='text-gray-600 dark:text-gray-400 mb-5'>
              Especializado en el ecosistema de JavaScript. Amante
              de las buenas prácticas y del software de calidad.
            </p>
            <div className='flex gap-5 mb-16'>
              <ExternalLink href='https://github.com/mralexsaavedra'>
                <GitHub
                  width={30}
                  height={30}
                  className='fill-black dark:fill-white'
                />
              </ExternalLink>
              <ExternalLink href='https://twitter.com/mralexsaavedra'>
                <Twitter
                  width={30}
                  height={30}
                  className='fill-black dark:fill-white'
                />
              </ExternalLink>
              <ExternalLink href='https://www.linkedin.com/in/mralexsaavedra'>
                <LinkedIn
                  width={30}
                  height={30}
                  className='fill-black dark:fill-white'
                />
              </ExternalLink>
            </div>
          </div>
          <div className='w-[80px] sm:w-[300px] relative mb-8 sm:mb-0 mr-auto'>
            <Image
              alt='Alexander Saavedra'
              height={300}
              width={300}
              src='/static/images/avatar.jpg'
              className='rounded-full object-cover'
            />
          </div>
        </div>

        <GithubRepos />
        <Skills />
        <Experiences />
      </div>
    </Container >
  )
}
