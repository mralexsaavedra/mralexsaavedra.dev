import { NextSeo } from 'next-seo'

import Container from '@/components/Container'

export default function About () {
  return (
    <Container>
      <NextSeo
        title='Sobre mí – Alexander Saavedra'
        canonical='https://mralexsaavedra.dev/about'
        openGraph={{
          url: 'https://mralexsaavedra.dev/about',
          title: 'Sobre mí – Alexander Saavedra'
        }}
      />
      <div className='flex flex-col justify-center items-start max-w-2xl mx-auto mb-16'>
        <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white'>
          🙋🏽‍♂️ Sobre mí
        </h1>
        <div className='mb-8 prose leading-6 text-gray-600 dark:text-gray-400'>
          <p>
            Hey, ¿qué tal? Mi nombre es Alexander. Nací hace 25 años en&nbsp;
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
            &nbsp;y actualmente trabajo como desarrollador web 👨🏽‍💻.
          </p>
          <p>
            Tengo 3+ años de esperiencia trabajando en empresas privadas.
            En todas ellas he trabajado como desarrollador Full Stack aunque
            siempre acababa ejerciendo el rol de frontender.
          </p>
          <p>
            Además, durante un año fui uno de lo co-organizadores de&nbsp;
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
            Personalmente me considero un culo inquieto, así que intento siempre estar actualizado y seguir formándome, que siendo sincero, no es tarea fácil 😅.
          </p>
          <p>
            En un futuro me gustaría dar todo mi conocimiento a los demás impartiendo mentoría 👨🏽‍🏫, charlas, etc.
          </p>
          <p>
            Mi vida no es sólo la programación. También me encanta viajar ✈, descubrir lugares nuevos 🌍, la música 🎧, el deporte 🏃🏽‍♂️, el surf 🏄🏽‍♂️, los videojuegos 👾 y mucho más.
          </p>
        </div>
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
