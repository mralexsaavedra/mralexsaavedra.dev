import querystring from 'querystring'

const {
  SPOTIFY_clientId: clientId,
  SPOTIFY_clientSecret: clientSecret,
  SPOTIFY_refreshToken: refreshToken
} = process.env

const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64')
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing'
const TOP_TRACKS_ENDPOINT = 'https://api.spotify.com/v1/me/top/tracks'
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'

const getAccessToken = async () => {
  const response = await window.fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: querystring.stringify({
      grant_type: 'refreshToken',
      refreshToken
    })
  })

  return response.json()
}

export const getNowPlaying = async () => {
  const { accessToken } = await getAccessToken()

  return window.fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
}

export const getTopTracks = async () => {
  const { accessToken } = await getAccessToken()

  return window.fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
}
