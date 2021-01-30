import styled from 'styled-components'

import Container from '@/components/Container'

const Wrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 4rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 42rem;
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
  color: rgba(75, 85, 99, 1);
  line-height: 1.5rem;
  margin-bottom: 2rem;

  /*
    dark:text-gray-400
    prose
  */
`
const H3 = styled.H3`
  color: rgba(75, 85, 99, 1);
  margin-bottom: 1rem;

  /*
    dark:text-gray-400
    prose
  */
`

export default function About () {
  return (
    <Container title='Sobre mí - Alexander Saavedra'>
      <div className='flex flex-col justify-center items-start max-w-2xl mx-auto mb-16'>
        <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white'>
          🙋🏽‍♂️ Sobre mí
        </h1>
        <div className='mb-8 prose leading-6 text-gray-600 dark:text-gray-400'>
          <p>
            Hey, ¿qué tal? Mi nombre es Alexander. Nací en el 95 en&nbsp;
            <a
              href='https://goo.gl/maps/LZH8njFKknKsagzF7'
              target='_blank'
              rel='noopener noreferrer'
            >
              Barakaldo (Bizkaia)
            </a>
            📍. Estudié Ingeniería Informática en la&nbsp;
            <a
              href='https://www.ehu.eus/es/'
              target='_blank'
              rel='noopener noreferrer'
            >
              UPV
            </a>
            &nbsp;y actualmente trabajo como desarrollador software frontend 👨🏽‍💻.
          </p>
          <p>
            Tengo 3+ años de experiencia trabajando como desarrollador Full Stack aunque
            siempre más orientado al Front-end.
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
            Siempre intento estar actualizado y seguir formándome, aunque siendo sincero, no es tarea fácil con todas las novedades que salen 😅.
          </p>
          <p>
            👉🏽&nbsp; Si quieres saber más sobre mí, aquí te dejo mi&nbsp;
            <a
              href='/alexander-resume-2020.pdf'
              target='_blank'
              rel='noopener noreferrer'
            >
              CV.
            </a>
          </p>
          <p>
            En un futuro me gustaría compatir todo mi conocimiento impartiendo mentoría 👨🏽‍🏫, charlas, etc.
          </p>
          <p>
            Mi vida no es sólo la programación. También me encanta viajar ✈, descubrir lugares nuevos 🌍, la música 🎧, el deporte 🏃🏽‍♂️, el surf 🏄🏽‍♂️, los videojuegos 👾 y mucho más.
          </p>
        </div>
        <h3 className='mb-4 text-gray-600 dark:text-gray-400'>
          Aquí os dejo un mapa de todos los lugares en los que he estado 👇🏽
        </h3>
        <iframe
          height='280'
          src='https://www.google.com/maps/d/embed?mid=1guVv_clnlvYFCMEFZDt1DIKlAuMAI5pi'
          title='Descubriendo mundo 🌍'
          width='100%'
        />
      </div>
    </Container>
  )
}
