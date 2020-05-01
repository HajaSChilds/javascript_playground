class Instructor {
    constructor({name, role = 'Assistant'}) {
        this.name = name;
        this.role = role;
    }

    renderDetails() {
        console.log(`${this.name}: ${this.role}`);
    }
}

const jon = new Instructor({name: 'Jon Snow'});
const brayden = new Instructor({name: 'Brayden', role: 'Teacher'})
console.log(jon.name);
console.log(jon);
console.log(brayden);
jon.renderDetails();
brayden.renderDetails();

