const express = require('express')


const { db } = require('./db')
const taskRoute = require('./routes/tasks')

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/', express.static(__dirname + '/public'))
app.use('/tasks', taskRoute)

db.sync({alter: true})
  .then(() => {
    app.listen(4153)
  })
  .catch((err) => {
    console.error(err)
  })