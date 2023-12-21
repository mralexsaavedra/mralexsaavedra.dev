import type { NextApiRequest, NextApiResponse } from 'next'
import type { GitHubPinnedRepo, GitHubPinnedRepos } from 'lib/types'
import { gql, GraphQLClient } from 'graphql-request'

const GITHUB_API_URL = 'https://api.github.com/graphql'

const GET_PINNED_REPOS = gql`
  query {
    viewer {
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            id
            name
            description
            url
            homepageUrl
            languages(first: 3) {
              nodes {
                name
                color
              }
            }
            forkCount
            stargazerCount
          }
        }
      }
    }
  }
`

const getPinnedRepos = async (): Promise<GitHubPinnedRepo[]> => {
  const graphQLClient = new GraphQLClient(GITHUB_API_URL, {
    headers: {
      authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`
    }
  })

  try {
    const data = await graphQLClient.request<GitHubPinnedRepos>(
      GET_PINNED_REPOS,
      {}
    )
    return data.viewer.pinnedItems.nodes
  } catch (error) {
    console.error(error)
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const repos = await getPinnedRepos()
    return res.status(200).json({ repos })
  } catch (error) {
    return res.status(500).send({ error: error.message })
  }
}
