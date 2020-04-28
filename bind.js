const userOne = {
    firstName: "Maya",
    lastName: "Angelou"
}

const userTwo = {
    firstName: "Toni",
    lastName: "Morrison"
}

const fullName = function() {
    return `${this.lastName}, ${this.firstName}`;
}

const maya = fullName.bind(userOne);
const toni = fullName.bind(userTwo);

maya()
toni()
