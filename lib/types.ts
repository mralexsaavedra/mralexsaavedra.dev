interface GitHubPinnedRepo {
  id: string
  name: string
  description: string
  url: string
  homepageUrl: string
  languages: {
    nodes: {
      name: string
      color: string
    }[]
  }
  forkCount: number
  stargazerCount: number
}

interface GitHubPinnedRepos {
  viewer: {
    pinnedItems: {
      nodes: GitHubPinnedRepo[]
    }
  }
}

interface GitHub {
  repos: GitHubPinnedRepo[]
}

export type { GitHub, GitHubPinnedRepos, GitHubPinnedRepo }
