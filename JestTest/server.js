const http = require('http')
const express = require('express')
const User = require('./user')
const bodyParser = require('body-parser')
const { response } = require('express')
var _ = require('lodash');
const { remove } = require('lodash')

let users = [
  new User('toto', 'ben', 'toto.ben@gamil.com'),
  new User('max', 'tru', 'mawt.ben@gamil.com'),
  new User('poal', 'bin', 'bin@gamil.com')
]

const server = express()
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.set('view engine', 'ejs');

server.get('/', (request, response) => {
  console.log('get index');
  response.status(200).render('index.ejs', {users: users})
})

server.post('/user', (request, response) => {
  console.log('post user');
  const user = new User(request.body['nom'], request.body['premon'], request.body['mail'])
  users.push(user)
  //response.status(201).send("Utilisateur créé");
  response.status(201).render('user.ejs', {user: user})
})

server.get('/user/:id', (request, response) => {
  console.log('want user info', users);
  const user = users.find((user) => {
    return user.id == request.params['id']
  })
  if (user !== undefined) {
    response.status(200).render('user.ejs', { user: user })
  } else {
    response.status(404).send("Utilisateur non trouvé");
  }
})

server.get('/delete/user/:id', (request, response) => {
  console.log('want delete user ', request.params['id']);
  console.log('want delete user ', users);

  const u = _.remove(users, (user) => {
    return user.id == request.params['id']
  })

  console.log(u);

  if (u !== undefined) {
    response.redirect('/')
    //response.status(200).render('index.ejs', { users: users })
  } else {
    response.status(404).send("Utilisateur non trouvé");
  }
})

server.listen(3000, () => {
  console.log('Listenning http://localhost:3000/');
})

/*
server.get('/users', (request, response) => {
  response.status(200).send('Liste user')
})






server.post('/user/:id', (request, response) => {
  console.log('update user', request.params['id']);
  response.status(201).send(`update user ${request.params['id']}`)
})
*/


/*
const gestionnaireDeRequette = (request, response) => {
  console.log('Serve got request');
  console.log('URI : ', request.url);
  console.log('VERBE : ', request.method);


  if(request.url === '/') {
    response.statusCode = 200
    response.write('Thankks request')
  } else if ('/users') {
    if(request.method === 'GET') {
      request.statusCode = 200
      response.write('Hi users')
    }
    if(request.method === 'POST') {
      request.statusCode = 201
      console.log('POSTing')
      response.write('new user requested')
    }
  } else {
    request.statusCode = 404
    response.write('Bad Request')
  }

  response.statusCode = 200
  response.write('Thankks request')
  response.end()
}


const server = http.createServer(gestionnaireDeRequette)


server.listen(3000, () => {
  console.log('Server Listenning');
})
*/