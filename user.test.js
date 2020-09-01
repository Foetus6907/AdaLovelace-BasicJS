const assert = require('assert')

class User {

}

const user = new User('Thomas')
assert.equal(user.nom, 'Falcone')
assert.equal(user.prenom, 'Thomas')
