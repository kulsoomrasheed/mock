// server.js
const jsonServer = require('json-server')
const cors = require('cors');

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 4000
app.use(cors());

server.use(middlewares)
server.use(router)

server.listen(port, () => {
  console.log(`JSON Server is running ${port}`)
})