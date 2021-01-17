import Container from '../components/Container'
import Skills from '../components/Skills'
import Timeline from '../components/Timeline'

export default function Home () {
  return (
    <Container>
      <div className='flex flex-col justify-center items-start max-w-2xl mx-auto mb-16'>
        <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white'>
          Hey 👋🏽, soy Alexander Saavedra
        </h1>
        <div className='flex flex-col md:flex-row items-center rounded-xl p-8 md:p-0 mb-16'>
          <h2 className='text-gray-600 dark:text-gray-400 text-lg md:pr-4'>
            Soy Software Engineer y llevo 3+ años trabajando como Frontend Developer
            y espezializado en el ecosistema de JavaScript.
            Amante de las buenas practicas y del continuo aprendizaje de este mundillo.
          </h2>
          <img class='w-48 h-auto rounded-full mt-8 md:mt-0' src='/avatar.jpg' alt='' width='300' height='300' />
        </div>
        <Skills />
        <Timeline />
      </div>
    </Container>
  )
}
