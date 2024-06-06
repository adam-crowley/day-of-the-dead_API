import express from 'express'
import { join } from 'node:path'
import cors, { CorsOptions } from 'cors'

import locations from './routes/locations'
import schedule from './routes/schedule'
import events from './routes/events'

const app = express()

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log('Listening on port', port)
})

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello world!')
})
app.use('/api/v1/locations', locations)
app.use('/api/v1/schedule', schedule)
app.use('/api/v1/events', events)
app.use('/api/v1/*', (req, res) => res.sendStatus(404))

app.use(express.static(join(__dirname, './public')))
app.use(cors('*' as CorsOptions))

export default app
