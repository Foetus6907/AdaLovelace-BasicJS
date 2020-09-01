require('jest')

class User {
  constructor(name, lastname, age) {
    this.name = name
    this.age = age
    this.fullName = `${this.name} ${lastname}`
  }

  ageUp(){
    this.age += 1
  }
}

const user = new User('Thomas', 'Pasquier', 24)

describe('User  focntion', () => {
  it('return name', () => {
    expect(user.name).toBe('Thomas')
  })
  it('return age', () => {
    expect(user.age).toBe(24)
  })

  it('should incremented age by one', () => {
    expect(user.age).toBe(24)
    user.ageUp()
    expect(user.age).toBe(25)
  });

  it('should return full name', () => {
    expect(user.fullName).toBe('Thomas Pasquier')
  });

})
