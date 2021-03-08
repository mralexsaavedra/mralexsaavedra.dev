import useSWR from 'swr'

import GithubReposItem from '@/components/GithubReposItem'
import GithubReposItemSkeleton from '@/components/GithubReposItemSkeleton'

import fetcher from '@/lib/fetcher'

const GithubRepos = ({ title, summary, slug, readingTime }) => {
  const { data: dataColors } = useSWR('/api/colors', fetcher)
  const { data: dataRepos } = useSWR('/api/github', fetcher)

  const colors = dataColors?.colors
  const repos = dataRepos?.repos

  return (
    <>
      <h3 className='font-bold text-2xl md:text-4xl tracking-tight mb-8 text-black dark:text-white'>
        🐙 Repositorios de GitHub
      </h3>

      <div className='flex flex-wrap md:-mr-6'>
        {repos && repos.length > 0
          ? repos.map(repo =>
            <div
              key={repo.repo}
              className='w-full md:w-1/2 lg:w-1/3 md:pr-4 pb-4'
            >
              <GithubReposItem
                repository={repo}
                bgColor={repo.language ? colors[repo.language].color : '#ffffff'}
              />
            </div>
            )
          : [...Array(6)].map((e, i) =>
            <div
              key={i}
              className='w-full md:w-1/2 lg:w-1/3 md:pr-4 pb-4'
            >
              <GithubReposItemSkeleton />
            </div>
            )}
      </div>
    </>
  )
}

export default GithubRepos
