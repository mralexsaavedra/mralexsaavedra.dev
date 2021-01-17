import Container from '../components/Container';
import Skills from '../components/Skills';
import Timeline from '../components/Timeline';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Hey 👋🏽, soy Alexander Saavedra
        </h1>
        <h2 className="text-gray-600 dark:text-gray-400 mb-16">
          Soy Software Engineer y llevo 3+ años trabajando como Frontend Developer
          y espezializado en el ecosistema de JavaScript.
          Amante de las buenas practicas y del continuo aprendizaje de este mundillo.
        </h2>
        <Skills />
        <Timeline />
      </div>
    </Container>
  );
}
