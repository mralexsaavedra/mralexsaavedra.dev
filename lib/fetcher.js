export default async function Fetcher (...args) {
  const res = await window.fetch(...args)

  return res.json()
}
