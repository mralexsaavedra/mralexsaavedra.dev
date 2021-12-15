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
    <div>
      <h3 className='font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white'>
        Repositorios de GitHub
      </h3>

      <div className='w-full flex flex-col md:grid grid-cols-2 gap-4 mb-5'>
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

      <div className='flex justify-end w-full'>
        <a
          className='rounded bg-gradient-to-r from-fuchsia-700 to-purple-800 font-medium text-white py-1 px-2 text-md'
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/mralexsaavedra?tab=repositories'
        >
          Ver más
        </a>
      </div>
    </div>
  )
}
