import { useTheme } from 'next-themes'
import Image from 'next/image'

const ExternalLink = ({ href, children }) => (
  <a
    className='text-sm text-gray-500 hover:text-gray-600 transition'
    target='_blank'
    rel='noopener noreferrer'
    href={href}
  >
    {children}
  </a>
)

export default function Skills () {
  const { theme } = useTheme()

  const height = 90
  const width = 90

  return (
    <>
      <h3 className='font-bold text-2xl md:text-4xl tracking-tight mb-12 mt-14 text-black dark:text-white'>
        Skill tecnológicos y herramientas
      </h3>

      <div className='w-full grid grid-cols-3 md:grid-cols-4 grid-flow-row gap-y-8 gap-x-10 mb-16'>
        <ExternalLink href='https://developer.mozilla.org/es/docs/Web/HTML'>
          <Image
            alt='HTML logo'
            height={height}
            width={width}
            src='/logos/html.png'
          />
        </ExternalLink>
        <ExternalLink href='https://developer.mozilla.org/es/docs/Web/CSS'>
          <Image
            alt='CSS logo'
            height={height}
            width={width}
            src='/logos/css.png'
            className='object-contain'
          />
        </ExternalLink>
        <ExternalLink href='https://developer.mozilla.org/es/docs/Web/JavaScript'>
          <Image
            alt='JavaScript logo'
            height={height}
            width={width}
            src='/logos/js.png'
          />
        </ExternalLink>
        <ExternalLink href='https://git-scm.com/'>
          <Image
            alt='Git logo'
            height={height}
            width={width}
            src='/logos/git.png'
          />
        </ExternalLink>
        <ExternalLink href='https://reactjs.org/'>
          <Image
            alt='React logo'
            height={height}
            width={width}
            src='/logos/react.png'
            className='object-cover'
          />
        </ExternalLink>
        <ExternalLink href='https://nextjs.org/'>
          <Image
            alt='Next.js logo'
            height={height}
            width={width}
            src={theme === 'light' ? '/logos/nextjs.png' : '/logos/nextjs_light.png'}
            className='object-contain'
          />
        </ExternalLink>
        <ExternalLink href='https://graphql.org/'>
          <Image
            alt='GraphQL logo'
            height={height}
            width={width}
            src='/logos/graphql.png'
          />
        </ExternalLink>
        <ExternalLink href='https://jestjs.io/'>
          <Image
            alt='Jest logo'
            height={height}
            width={width}
            src='/logos/jest.png'
            className='object-contain'
          />
        </ExternalLink>
        <ExternalLink href='https://webpack.js.org'>
          <Image
            alt='Webpack logo'
            height={height}
            width={width}
            src='/logos/webpack.png'
            className='object-contain'
          />
        </ExternalLink>
        <ExternalLink href='https://nodejs.org/'>
          <Image
            alt='Node.js logo'
            height={height}
            width={width}
            src='/logos/nodejs.png'
            className='object-contain'
          />
        </ExternalLink>
        <ExternalLink href='https://github.com/'>
          <Image
            alt='GitHub logo'
            height={height}
            width={width}
            src={theme === 'light' ? '/logos/github_dark.png' : '/logos/github_light.png'}
          />
        </ExternalLink>
        <ExternalLink href='https://code.visualstudio.com/'>
          <Image
            alt='Visual Studio Code logo'
            height={height}
            width={width}
            src='/logos/vscode.png'
          />
        </ExternalLink>
      </div>
    </>
  )
}
