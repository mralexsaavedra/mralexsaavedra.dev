import Container from 'components/Container'
import Timeline from 'components/Timeline'

export default function About() {
  return (
    <Container title='Sobre mí - Alexander Saavedra'>
      <div className='flex flex-col justify-center items-start max-w-2xl mx-auto mb-16'>
        <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white'>
          Sobre mí
        </h1>
        <div className='mb-8 prose leading-6 text-gray-600 dark:text-gray-400'>
          <p>
            Hey, ¿qué tal? Mi nombre es Alexander Saavedra. Nací en 1995 en&nbsp;
            <a
              href='https://goo.gl/maps/LZH8njFKknKsagzF7'
              target='_blank'
              rel='noopener noreferrer'
            >
              Barakaldo (Bizkaia)
            </a>
            . Estudié Ingeniería Informática en la&nbsp;
            <a
              href='https://www.ehu.eus/es/'
              target='_blank'
              rel='noopener noreferrer'
            >
              UPV
            </a>
            &nbsp;y actualmente trabajo como desarrollador frontend en la startup&nbsp;
            <a
              href='https://www.kirawellness.io/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Kira
            </a>
            .
          </p>
          <p>
            Tengo 4+ años de experiencia trabajando como desarrollador frontend en diferentes empresas.
          </p>
          <p>
            Además, durante un año fuí uno de lo co-organizadores de&nbsp;
            <a
              href='https://developers.google.com/community/gdg'
              target='_blank'
              rel='noopener noreferrer'
            >
              GDG Bilbao (Google Developer Group)
            </a>
            &nbsp;donde nos dedicábamos a realizar eventos, organizar charlas y compartir conociminentos.
          </p>
          <p>
            Siempre intento estar actualizado y seguir formándome, aunque siendo sincero, no es tarea fácil con todas las novedades que salen.
          </p>
          <p>
            Si quieres saber más sobre mí, aquí te dejo mi&nbsp;
            <a
              href='/alexander-resume-2022.pdf'
              target='_blank'
              rel='noopener noreferrer'
            >
              CV.
            </a>
          </p>
          <p>
            Me encanta compatir todo mi conocimiento con la comunidad y aprender de otras personas que también lo hacen.
          </p>
          <p>
            Mi vida no es sólo la programación. También me encanta viajar, descubrir lugares nuevos con mi furgoneta, la música, el deporte, los comics y mucho más.
          </p>
        </div>

        <Timeline />
      </div>
    </Container>
  )
}
