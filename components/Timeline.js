/* eslint-disable react/jsx-closing-tag-location */
import { useState } from 'react'
import styled from 'styled-components'

const StyledDivider = styled.div`
  /* dark:border-gray-600 */
  border-color: rgba(229, 231, 235, 1);
  border-width: 1px;
  margin-bottom: 2rem;
  margin-top: 2rem;
  width: 100%;
`

const YearTitle = styled.h3`
  /* dark:text-gray-100 */
  color: rgba(17, 24, 39, 1);
  font-size: 1.125rem;
  font-weight: bold;
  letter-spacing: -0.025em;
  line-height: 1.75rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
`

const Li = styled.li`
  margin-bottom: 1rem;
  margin-left: 0.5rem;
`

const Div = styled.div`
  /* dark:text-green-300 */
  align-items: center;
  color: rgba(4, 120, 87, 1);
  display: flex;
  margin-bottom: 0.5rem;
`

const Span = styled.span`
  border-width: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const SvgCheck = styled.svg`
  height: 1rem;
  margin-right: 0.5rem;
  width: 1rem;
`

const SvgArrow = styled.svg`
  height: 1rem;
  margin-left: 0.25rem;
  width: 1rem;
`

const Title = styled.p`
  /* dark:text-gray-100 */
  color: rgba(17, 24, 39, 1);
  font-weight: 500;
`

const Paragraph = styled.p`
  /* dark:text-gray-400 */
  color: rgba(55, 65, 81, 1);
  margin-left: 1.5rem;
`

const H3 = styled.h3`
  /* dark:text-white */
  color: rgba(0, 0, 0, 1);
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: -0.025em;
  line-height: 2rem;
  margin-bottom: 1rem;
  margin-top: 2rem;

  @media (min-width: 768px) {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
`

const Button = styled.button`
  /* dark:text-gray-100 */
  display: flex;
  align-items: center;
  color: rgba(17, 24, 39, 1);
  margin-left: auto;
  margin-right: auto;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-radius: 0.375rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

const Divider = () => {
  return (
    <StyledDivider />
  )
}

const Year = ({ children }) => {
  return (
    <YearTitle>
      {children}
    </YearTitle>
  )
}

const Step = ({ title, children }) => {
  return (
    <Li>
      <Div>
        <Span>Check</Span>
        <SvgCheck viewBox='0 0 24 24'>
          <g
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M22 11.08V12a10 10 0 11-5.93-9.14' />
            <path d='M22 4L12 14.01l-3-3' />
          </g>
        </SvgCheck>
        <Title>{title}</Title>
      </Div>
      <Paragraph>{children}</Paragraph>
    </Li>
  )
}

const FullTimeline = () => (
  <>
    <Divider />
    <Year>2018</Year>
    <ul>
      <Step title='Me muevo de empresa 🤝🏽'>
        A finales de año decido cambiar de empresa (S&M Services). Mismo puesto que la anterior, distinta localidad, centro de Bilbao.
      </Step>
      <Step title='Me graduo 👨🏽‍🎓'>
        Siempre echaré de menos la época en la que estuve en la universidad.
      </Step>
      <Step title='Presento el TFG 💯'>
        Después de muchos meses y duro trabajo presento mi Trabajo de Fin de Grado. Mereció la pena todo el esfuerzo y cariño puesto en él.
      </Step>
    </ul>
    <Divider />
    <Year>2017</Year>
    <ul>
      <Step title='Primera entrevista + primer trabajo 🔥'>
        Por fín hago la primera entrevista de mi vida, y consigo el trabajo. Me contratan como desarrollador Full Stack en Inycom, ubicada en el parque tecnológico de Zamudio y con sede en Zaragoza.
      </Step>
      <Step title='Me operaran de los meniscos 👩🏽‍🏭' />
      <Step title='Las prácticas del grado 🌟'>
        Cumplo un periodo de 6 meses en prácticas en una consultoría (SHKWays) ubicada en el vibero de empresas de la Universidad de Deusto. Aquí comienza mi camino haciendo el mundo del desarrollo web.
      </Step>
    </ul>
    <Divider />
    <Year>2013</Year>
    <ul>
      <Step title='Bienvenida a la familia 🐶'>
        Adoptamos a Lua, una pequeña Yorkshire Terrier.
      </Step>
      <Step title='Comienza mi carrera universitaria 👨🏽‍🏫'>
        Empiezo el Grado de Ingeniería Informática de Gestión y Sistemas de la Información en la Escuela de Ingenieros de Bilbao cerca del estadio de San Mames 🔴⚪.
      </Step>
      <Step title='Termino Bachillerato 🚸'>
        Desde el instituto hasta el bachillerato estuve en la ikastola de Beurko.
      </Step>
      <Step title='Apruebo el carnet de conducir 🚗' />
    </ul>
    <Divider />
    <Year>2011</Year>
    <ul>
      <Step title='Viaje de estudios a Andorra + 🏂🏽'>
        Para finalizar la ESO nos vamos de viaje de estudios a Andorra, donde por primera vez hago snowboard y el deporte el cual reptiré todos los años.
      </Step>
    </ul>
    <Divider />
    <Year>2008</Year>
    <ul>
      <Step title='Primer ordenador 💻'>
        Hasta entonces no paraba de jugar en los ciber de mi localidad con mi cuadrilla. 😂
      </Step>
    </ul>
    <Divider />
    <Year>2005</Year>
    <ul>
      <Step title='Comunión + Port Aventura 🎢' />
    </ul>
    <Divider />
    <Year>2003</Year>
    <ul>
      <Step title='Primera tabla 🛹'>
        Me compran mi primera tabla de skate. Una aficción que me durará toda la vida.
      </Step>
    </ul>
    <Divider />
    <Year>2000</Year>
    <ul>
      <Step title='Primeros pasos como gamer 🎮'>
        Comencé mi carrera de entrenador Pokemon en GameBoy.
      </Step>
    </ul>
    <Divider />
    <Year>1995</Year>
    <ul>
      <Step title='Nací 👶🏼🍼' />
    </ul>
  </>
)

export default function Timeline () {
  const [isShowingFullTimeline, showFullTimeline] = useState(false)

  return (
    <>
      <H3>
        ⏳ Timeline
      </H3>
      <Year>2020</Year>
      <ul>
        <Step title='Comienzo en Kira Health Startup 👨🏽‍⚕️👨🏽‍💻'>
          Una nueva etapa en Bilbao como Desarrollador Software Frontend.
        </Step>
        <Step title='Entrevistas y + entrevistas 🥱' />
        <Step title='Acabo el máster 👏🏽'>
          En verano acabo el máster después de muchiiiiisimo esfuerzo.
        </Step>
        <Step title='Otro deporte más 🏄🏽‍♂️' />
        <Step title='Covid attack 😷' />
      </ul>
      <Divider />
      <Year>2019</Year>
      <ul>
        <Step title='Bye bye trabajo 👋🏽'>
          Decido dedicar todo mi tiempo y esfuerzo al máster.
        </Step>
        <Step title='Regreso a casa 🏠'>
          Me vuelvo con la familia.
        </Step>
        <Step title='Empiezo un máster ⚡'>
          Decido hacer un máster de Animación 3D de personajes de la mano de Lightbox Academy.
        </Step>
        <Step title='Primer PC a piezas 🛠'>
          Invierto dinero y tiempo en mi primer ordenador montado a piezas por mí. 😍
        </Step>
        <Step title='Me mudo unos meses 💼'>
          Voy a vivir a Salamanca unos meses y dedico mis días a trabajar en remoto y estudiar el máster.
        </Step>
        <Step title='Google Developer Group Bilbao 🕺🏽'>
          Consigo ser uno de los co-organizadores de GDG Bilbao.
        </Step>
        <Step title='Me apunto a Crossfit 🏋🏽‍♂️' />
      </ul>
      {isShowingFullTimeline
        ? <FullTimeline />
        : <Button
            type='button'
            onClick={() => showFullTimeline(true)}
          >
          Ver más
          <SvgArrow
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M19 9l-7 7-7-7'
            />
          </SvgArrow>
        </Button>}
    </>
  )
}
