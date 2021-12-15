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
          className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900 focus:ring-gray-500"
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/mralexsaavedra?tab=repositories'
        >
          Ver más
          <svg
            className="overflow-visible ml-3 text-gray-300 group-hover:text-gray-400"
            width="3"
            height="6"
            viewBox="0 0 3 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M0 0L3 3L0 6"></path>
          </svg>
        </a>
      </div>
    </div>
  )
}
