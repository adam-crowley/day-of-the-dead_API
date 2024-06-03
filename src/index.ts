import express from 'express'
import cors, { CorsOptions } from 'cors'

const server = express()

const port = process.env.PORT || 3000

server.listen(port, () => {
  console.log('Listening on port', port)
})

server.use(express.json())

server.get('/', (req, res) => {
  res.send('Hello world!')
})

server.use(express.static('./public'))
server.use(cors('*' as CorsOptions))

export default server
