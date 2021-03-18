import Image from 'next/image'

import Container from '@/components/Container'
import GithubRepos from '@/components/GithubRepos'
import Skills from '@/components/Skills'
import Timeline from '@/components/Timeline'

export default function Home () {
  return (
    <Container>
      <div className='flex flex-col justify-center items-start max-w-2xl mx-auto mb-16'>
        <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white'>
          Hey 👋🏽,&nbsp;soy Alexander Saavedra
        </h1>
        <div className='flex flex-col md:flex-row items-center rounded-xl mt-4 mb-16'>
          <h2 className='text-gray-600 dark:text-gray-400 text-lg p-0 md:pr-4 mb-11 md:mb-0'>
            Soy Software Engineer con más de 3 años de experiencia trabajando como Frontend Developer
            y especializado en el ecosistema de JavaScript.
            Amante de las buenas prácticas y del software de calidad.
          </h2>
          <Image
            alt='Alexander Saavedra'
            height={700}
            width={700}
            src='/static/images/avatar.jpg'
            className='rounded-full object-cover'
          />
        </div>
        <GithubRepos />
        <Skills />
        <Timeline />
      </div>
    </Container>
  )
}
