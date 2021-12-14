import useSWR from 'swr'

import GithubReposItem from 'components/GithubReposItem'
import GithubReposItemSkeleton from 'components/GithubReposItemSkeleton'

import fetcher from 'lib/fetcher'
import { Colors, GitHub } from 'lib/types'
import ExternalLink from './ExternalLink'

export default function GithubRepos() {
  const { data: dataColors } = useSWR<Colors>('/api/colors', fetcher)
  const { data: dataRepos } = useSWR<GitHub>('/api/github', fetcher)

  const colors = dataColors?.colors
  const repos = dataRepos?.repos

  return (
    <>
      <div className='flex justify-between items-center w-full'>
        <h3 className='font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white'>
          Repositorios de GitHub
        </h3>

        <ExternalLink href='https://github.com/mralexsaavedra?tab=repositories'>
          Ver más
        </ExternalLink>
      </div>

      <div className='w-full flex flex-col md:grid grid-cols-2 gap-4'>
        {
          repos && repos.length > 0
            ? repos.map(repo =>
              <GithubReposItem
                key={repo.repo}
                repository={repo}
                bgColor={colors && repo.language ? colors[repo.language].color : '#F1E05A'}
              />
            )
            : [...Array(6)].map((_, i) => <GithubReposItemSkeleton key={i} />)
        }
      </div>
    </>
  )
}
