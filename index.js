// import express from 'express'
// import bodyParser from 'body-parser'
// import { dirname } from 'path'
// import path from 'path'
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
app.set('view engine', 'ejs')

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  let today = new Date()
  let day = ''

  switch (today.getDay()) {
    case 0:
      day = 'Sunday'
      break
    case 1:
      day = 'Monday'
      break
    case 2:
      day = 'Tuesday'
      break
    case 3:
      day = 'Wednesday'
      break
    case 4:
      day = 'Thursday'
      break
    case 5:
      day = 'Friday'
      break
    case 6:
      day = 'Saturday'
      break
    default:
      console.log('Error: current day is equal to: ' + today.getDay())
  }

  //passing variable day to list.ejs file
  res.render('list', { day })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
