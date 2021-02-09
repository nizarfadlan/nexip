export default async function handler(req, res) {
  const content = await fetch(`http://ip-api.com/json/${req.query.ip}`)
  const data = await content.json()

  res.statusCode = 200
  res.setHeader('Cache-Control', 'no-cache')
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify({ data }))
}