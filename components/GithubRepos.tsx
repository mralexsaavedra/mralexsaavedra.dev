import useSWR from 'swr'

import GithubReposItem from 'components/GithubReposItem'
import GithubReposItemSkeleton from 'components/GithubReposItemSkeleton'

import fetcher from 'lib/fetcher'
import { Colors, GitHub } from 'lib/types'

export default function GithubRepos() {
  const { data: dataColors } = useSWR<Colors>('/api/colors', fetcher)
  const { data: dataRepos } = useSWR<GitHub>('/api/github', fetcher)

  const colors = dataColors?.colors
  const repos = dataRepos?.repos

  return (
    <>
      <h3 className='font-bold text-2xl md:text-4xl tracking-tight mb-8 text-black dark:text-white'>
        Repositorios de GitHub
      </h3>

      <div className='flex flex-wrap md:-mr-6'>
        {
          repos && repos.length > 0
            ? repos.map(repo =>
              <div
                key={repo.repo}
                className='w-full md:w-1/2 lg:w-1/3 md:pr-4 pb-4'
              >
                <GithubReposItem
                  repository={repo}
                  bgColor={colors && repo.language ? colors[repo.language].color : '#F1E05A'}
                />
              </div>
            )
            : [...Array(6)].map((_, i) =>
              <div
                key={i}
                className='w-full md:w-1/2 lg:w-1/3 md:pr-4 pb-4'
              >
                <GithubReposItemSkeleton />
              </div>)}
      </div>
    </>
  )
}
