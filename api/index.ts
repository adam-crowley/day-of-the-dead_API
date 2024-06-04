import express from 'express'
import cors, { CorsOptions } from 'cors'

const app = express()

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log('Listening on port', port)
})

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.use(express.static('./public'))
app.use(cors('*' as CorsOptions))

export default app
