import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const userReposResponse = await fetch(
    'https://gh-pinned-repos-5l2i19um3.vercel.app/?username=mralexsaavedra'
  )

  const repos = await userReposResponse.json()

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  )

  return res.status(200).json({
    repos
  })
}
