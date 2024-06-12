import express from 'express'
import { join } from 'path'
import cors from 'cors'

import locations from './routes/locations'
import schedule from './routes/schedule'
import events from './routes/events'

const app = express()
const port = process.env.PORT || 3000

// Use cors middleware before defining any routes
app.use(
  cors({
    origin: '*',
    methods: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
    allowedHeaders:
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
    credentials: true,
  })
)

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.use('/api/v1/locations', locations)
app.use('/api/v1/schedule', schedule)
app.use('/api/v1/events', events)
app.use('/api/v1/*', (req, res) => res.sendStatus(404))

app.use(express.static(join(__dirname, './public')))

app.listen(port, () => {
  console.log('Listening on port', port)
})

export default app
