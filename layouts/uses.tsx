import Container from 'components/Container'

export default function UsesLayout({ children }) {
  return (
    <Container
      title='Uses – Alexander Saavedra'
      description='Aquí está toda la tecnología que estoy usando actualmente.'
    >
      <article className='flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full'>
        <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white'>
          Uses
        </h1>
        <p className='text-gray-700 dark:text-gray-300 mt-2 mb-8'>
          Aquí te comparto algunas herramientas y el hardware que utilizo en mi día a día.
        </p>
        <div className='prose dark:prose-dark w-full'>{children}</div>
      </article>
    </Container>
  )
}
