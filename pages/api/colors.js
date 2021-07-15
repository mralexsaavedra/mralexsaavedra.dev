export default async function handler (_, res) {
  const colorsResponse = await fetch(
    'https://raw.githubusercontent.com/ozh/github-colors/master/colors.json'
  )

  const colors = await colorsResponse.json()

  return res.status(200).json({
    colors
  })
}
