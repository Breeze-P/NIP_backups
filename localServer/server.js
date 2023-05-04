// import express from 'express'
const express = require('express')
const app = express()
const port = 3000

// 读文件
// const convert = require('xml-js');
// const xml = require('fs').readFileSync('query.xml', 'utf8');
// const options = {ignoreComment: true, alwaysChildren: true};
// const res =  convert.xml2json(xml, options)

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  console.log('on')
  next();
});
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.redirect('/index.html');
})

app.post('/deploy', (req, res) => {
  console.log('hello');
  res.send('Hello World!');
});

app.use((req, res) => {
  res.redirect('/html/index.html');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

