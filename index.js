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
  
  

  

  //passing variable day to list.ejs file
  res.render('list', { day })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
