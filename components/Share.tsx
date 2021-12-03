import Image from 'next/image'

const githubUrl = 'https://github.com/mralexsaavedra/mralexsaavedra.dev/discussions'

const params = new URLSearchParams({
  url: 'https://mralexsaavedra.dev',
  text: 'Me encanta tu web 🥰'
})

const twitterUrl = `https://twitter.com/share?${params}`

export default function Share() {
  return (
    <div>
      <a
        href={githubUrl}
        target='_blank'
        rel='noopener noreferrer'
        className='fixed left-10 md:left-1/4 lg:left-1/3 bottom-4 flex items-center justify-between bg-white py-2 px-4 rounded-full border border-black text-black'
      >
        <Image
          alt='GitHub logo'
          height={20}
          width={20}
          src='/logos/github_dark.png'
        />
        <span className='ml-2 hidden md:block'>Feedback</span>
      </a>
      <a
        href={twitterUrl}
        target='_blank'
        rel='noopener noreferrer'
        className='fixed right-10 md:right-1/4 lg:right-1/3 bottom-4 flex items-center justify-between bg-white py-2 px-4 rounded-full border border-twitter-blue text-twitter-blue'
      >
        <Image
          alt='Twitter logo'
          height={18}
          width={20}
          src='/logos/twitter_blue.png'
        />
        <span className='ml-2 hidden md:block'>Compártelo</span>
      </a>
    </div>
  )
}
