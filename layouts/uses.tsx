import Container from 'components/Container'

export default function UsesLayout({ children }) {
  return (
    <Container
      title='Uses – Alexander Saavedra'
      description='Mi espacio de trabajo.'
    >
      <article className='flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full'>
        <h2 className='text-base font-semibold tracking-wide uppercase text-gray-700 dark:text-gray-300'>
          Mis /Uses
        </h2>
        <h3 className='text-3xl sm:text-4xl font-extrabold leading-8 tracking-tight text-black dark:text-white mt-2 mb-8'>
          Mi espacio de trabajo
        </h3>
        <div className='prose dark:prose-dark w-full'>{children}</div>
      </article>
    </Container>
  )
}
