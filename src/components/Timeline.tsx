/** @jsxImportSource react */

import { useState, type ReactNode, type FC } from 'react'

const Divider: FC = () => (
  <div className='border border-gray-200 dark:border-gray-600 w-full my-8' />
)

interface YearProps {
  readonly children: ReactNode
}
const Year: FC<YearProps> = ({ children }) => (
  <h3 className='text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100'>
    {children}
  </h3>
)

interface StepProps {
  readonly children?: ReactNode
  readonly title: string
}
const Step: FC<StepProps> = ({ children, title }) => (
  <li className='mb-4 ml-2'>
    <div className='flex items-center mb-2 text-green-700 dark:text-green-300'>
      <span className='sr-only'>Check</span>
      <svg className='h-4 w-4 mr-2' viewBox='0 0 24 24'>
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
      </svg>
      <p className='font-medium text-gray-900 dark:text-gray-100'>{title}</p>
    </div>
    <p className='text-gray-700 dark:text-gray-400 ml-6'>{children}</p>
  </li>
)

const FullTimeline = () => (
  <>
    <Divider />
    <Year>2018</Year>
    <ul>
      <Step title='Me muevo de empresa'>
        A finales de año decido cambiar de empresa (S&M Services). Mismo puesto
        que la anterior, pero distinta ubiación, centro de Bilbao.
      </Step>
      <Step title='Me graduo'>
        Siempre echaré de menos la época en la que estuve en la universidad.
      </Step>
      <Step title='Presento el TFG'>
        Después de muchos meses y duro trabajo presento mi Trabajo de Fin de
        Grado. Mereció la pena todo el esfuerzo y cariño puesto en él.
      </Step>
    </ul>
    <Divider />
    <Year>2017</Year>
    <ul>
      <Step title='Primer trabajo'>
        Hago la primera entrevista de mi vida, y consigo mi primer trabajo. Me
        contratan como desarrollador Full Stack en Inycom, ubicada en el parque
        tecnológico de Zamudio y con sede en Zaragoza.
      </Step>
      <Step title='Me operaran de los meniscos' />
      <Step title='Las prácticas del grado'>
        Cumplo un periodo de 6 meses en prácticas en una consultoría (SHKWays)
        ubicada en el vibero de empresas de la Universidad de Deusto. Aquí
        comienza en el mundillo del desarrollo web.
      </Step>
    </ul>
    <Divider />
    <Year>2013</Year>
    <ul>
      <Step title='Nuevo miembro a la familia'>
        Adoptamos a Lua, una pequeña Yorkshire Terrier.
      </Step>
      <Step title='Comienza mi carrera universitaria'>
        Empiezo el Grado de Ingeniería Informática de Gestión y Sistemas de la
        Información en la Escuela de Ingenieros de Bilbao cerca del estadio de
        San Mames.
      </Step>
      <Step title='Termino Bachillerato'>
        Desde el instituto hasta el bachillerato estuve en la ikastola de
        Beurko.
      </Step>
      <Step title='Apruebo el carnet de conducir' />
    </ul>
    <Divider />
    <Year>2011</Year>
    <ul>
      <Step title='Viaje de estudios a Andorra'>
        Para finalizar la ESO nos vamos de viaje de estudios a Andorra, donde
        por primera vez hago snowboard y el deporte el cual reptiré todos los
        años.
      </Step>
    </ul>
    <Divider />
    <Year>2008</Year>
    <ul>
      <Step title='Primer ordenador'>
        Hasta entonces no paraba de jugar en los ciber de mi localidad con mi
        cuadrilla.
      </Step>
    </ul>
    <Divider />
    <Year>2005</Year>
    <ul>
      <Step title='Comunión + Port Aventura' />
    </ul>
    <Divider />
    <Year>2003</Year>
    <ul>
      <Step title='Primera tabla'>
        Me compran mi primera tabla de skate. Una aficción que me durará toda la
        vida.
      </Step>
    </ul>
    <Divider />
    <Year>2000</Year>
    <ul>
      <Step title='Primeros pasos como gamer'>
        Comencé mi carrera de entrenador Pokemon en GameBoy.
      </Step>
    </ul>
    <Divider />
    <Year>1995</Year>
    <ul>
      <Step title='Nací' />
    </ul>
  </>
)

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false)

  return (
    <>
      <h3 className='font-bold text-2xl md:text-4xl tracking-tight mb-8 mt-4 text-black dark:text-white'>
        Timeline
      </h3>
      <Year>2022 - actualidad</Year>
      <ul>
        <Step title='Comienzo en Lookiero como Front-end Engineer' />
        <Step title='La etapa en Kira acaba' />
      </ul>
      <Divider />
      <Year>2021</Year>
      <ul>
        <Step title='La etapa covid aún no ha acabado...' />
        <Step title='Me opero de la vista'>Bye bye gafas</Step>
        <Step title='Me compro una furgo' />
      </ul>
      <Divider />
      <Year>2020</Year>
      <ul>
        <Step title='Comienzo en Kira Health Startup'>
          Una nueva etapa en Bilbao como Desarrollador Frontend.
        </Step>
        <Step title='Vuelta a buscar trabajo' />
        <Step title='Acabo el máster' />
        <Step title='Comienza etapa covid' />
      </ul>
      <Divider />
      <Year>2019</Year>
      <ul>
        <Step title='Bye bye trabajo'>
          Decido dedicar todo mi tiempo y esfuerzo al máster.
        </Step>
        <Step title='Regreso a casa' />
        <Step title='Empiezo un máster'>
          Decido hacer un máster de Animación 3D de personajes impartido por
          Lightbox Academy.
        </Step>
        <Step title='Me mudo unos meses'>
          Voy a vivir a Salamanca unos meses y dedico mis días a trabajar en
          remoto y estudiar el máster.
        </Step>
        <Step title='Google Developer Group Bilbao'>
          Consigo ser uno de los co-organizadores de GDG Bilbao.
        </Step>
        <Step title='Me apunto a Crossfit' />
      </ul>
      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <button
          type='button'
          className='flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100'
          onClick={() => showFullTimeline(true)}
        >
          Ver más
          <svg
            className='h-4 w-4 ml-1'
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
          </svg>
        </button>
      )}
    </>
  )
}
