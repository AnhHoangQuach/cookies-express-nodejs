const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')

app.use(cookieParser())
const PORT = process.env.PORT || 3000
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/cookie/get', (req, res) => {
  const cookies = req.cookies
  res.send(cookies)
})

app.get('/cookie/set', (req, res) => {
  res
    .cookie('username', 'hoanganh', { httpOnly: false })
    .cookie('blog', 'hoanganhblog', { maxAge: 900000, httpOnly: true, secure: true })
  res.send('Cookie set!')
})

app.get('/cookie/delete', (req, res) => {
  res.clearCookie('username')
  res.send('Cookie deleted!')
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
