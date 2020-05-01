class Instructor {
    constructor({name, password}){
        this.name = name;
        this.password = password;
    }
}

const jon = new Instructor({name: 'Jon Snow', password: 12345});
console.log(jon)