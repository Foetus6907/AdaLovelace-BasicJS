

class User {
  static last_id = 0;
  constructor(nom, premon, mail){
    User.last_id += 1
    this.id = User.last_id
    this.nom = nom
    this.premon = premon
    this.mail = mail
  }

  status() {
    return `User is ${this.nom} ${this.prenom} and is mail is ${this.mail} `
  }

}

module.exports = User