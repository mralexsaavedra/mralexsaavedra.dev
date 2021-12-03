import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const colorsResponse = await fetch(
    'https://raw.githubusercontent.com/ozh/github-colors/master/colors.json'
  )

  const colors = await colorsResponse.json()

  return res.status(200).json({
    colors
  })
}
