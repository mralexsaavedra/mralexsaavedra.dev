export default async (_, res) => {
  const colorsResponse = await fetch(
    'https://raw.githubusercontent.com/ozh/github-colors/master/colors.json'
  )

  const colors = await colorsResponse.json()

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  )

  return res.status(200).json({
    colors
  })
}
