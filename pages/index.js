import Container from '../components/Container'
import Skills from '../components/Skills'
import Timeline from '../components/Timeline'

export default function Home () {
  return (
    <Container>
      <div className='flex flex-col justify-center items-start max-w-2xl mx-auto mb-16'>
        <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white'>
          Hey 👋🏽,&nbsp;soy Alexander Saavedra
        </h1>
        <div className='flex flex-col md:flex-row items-center rounded-xl mt-4 mb-16'>
          <h2 className='text-gray-600 dark:text-gray-400 text-lg p-0 md:pr-4'>
            Soy Software Engineer y llevo 3+ años trabajando como Frontend Developer
            y espezializado en el ecosistema de JavaScript.
            Amante de las buenas practicas y del continuo aprendizaje de este mundillo.
          </h2>
          <img class='h-48 w-48 rounded-full object-cover mt-8 md:mt-0' src='/avatar.jpg' alt='Avatar image' />
        </div>
        <Skills />
        <Timeline />
      </div>
    </Container>
  )
}
