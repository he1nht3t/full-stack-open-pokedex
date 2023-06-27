const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5001

app.get('/health', (_, res) => {
  throw 'error'

  // eslint-disable-next-line no-unreachable
  res.send('ok')
})

app.use(express.static('dist'))

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT} `)
})
