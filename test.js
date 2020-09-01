class TV {
  constructor(marque){
    this.marque = marque
    this.chaine = 1
    this.volume = 50
  }

  volumeUp(){
    if(this.volume < 100) {
      this.volume += 1
    }
  }

  volumeDown(){
    if(this.volume > 0){
      this.volume -= 1
    }
  }

  changeChaine(newChaine){
    if(newChaine <= 50 && newChaine >= 1)
    this.chaine = newChaine
  }

  reset(){
    this.chaine = 1
    this.volume = 50
  }

  get status() {
    return this.marque + ' sur la chaîne ' + this.chaine + ' à un volume de ' + this.volume
  }

}

class SmartTV extends TV {
  constructor(marque){
    super(marque);
    this.application = 'LiveTV'
  }

  changeApp(newApp){
    this.application = newApp
  }

  volumeUp() {
    if (this.volume < 100) {
      this.volume += 0.5
    }
  }

  volumeDown() {
    if (this.volume > 0) {
      this.volume -= 0.5
    }
  }

  get status() {
    if(this.application === 'LiveTV') {
      return this.marque + ' sur la chaîne ' + this.chaine + ' à un volume de ' + this.volume
    } else {
      return this.marque + ' sur lapp ' + this.application + ' à un volume de ' + this.volume
    }
  }
}

let tv1 = new TV('Pansonique')
console.log(tv1.status)
for (let i = 0; i<40 ; i++){
  tv1.volumeUp()
}
for (let i = 0; i < 5; i++) {
  tv1.volumeDown()
}
console.log(tv1.status)
tv1.changeChaine(33)
console.log(tv1.status)
tv1.reset()
console.log(tv1.status)

let tv2= new SmartTV('Samsung')
console.log(tv2.status)
for (let i = 0; i < 40; i++) {
  tv2.volumeUp()
}
console.log(tv2.status)
tv2.changeChaine(44)
tv2.changeApp('Netflix')
console.log(tv2.status)


