const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  console.log(req.url)
  res.sendFile(__dirname + '/views/home.html')
})

app.get('/about', (req, res) => {
  console.log(req.url)
  res.sendFile(__dirname + '/views/about.html')
})

app.get('/works', (req, res) => {
  console.log(req.url)
  res.sendFile(__dirname + '/views/works.html')
})

app.get('/gallery', (req, res) => {
  console.log(req.url)
  res.sendFile(__dirname + '/views/gallery.html')
})

app.listen(3000, () => {
  console.log(`Server launched and accessible on http://localhost:3000/`)
})

/* Your Website should have (at least) 3 pages:

A Home page, that welcomes the visitor and links to the other pages on the website.
An About page, that shares some basic information about the person.
A Works page, where you showcase some of the work of the person you chose.
Bonus: A Photo Gallery page, displaying some pictures of the person/their work.
You should go through the following steps:

Run npm init -y to create a package.json file.
Run npm install express to install the Express package.
Create a views/ directory that will hold your .html files.
Create a public/ directory that will hold other static files, 
such as your CSS stylesheets,scripts and images.
Build your Express app in app.js.
Polish your HTML, stylesheets and scripts.
 */