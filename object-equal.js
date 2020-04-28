const isEqual = (obj1, obj2) => {
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);
    if (obj1Keys.length !== obj2Keys.length) {
        return false;
    }

    for(let objKey of obj1Keys) {
        if(obj1[objKey] !== obj2[objKey])
        return false;
    };

    return true;

};

const person1 = {
    name: "Janet Jackson",
    age: 51
}

const person2 = {
    name: "Janet Jackson",
    age: 51
}

isEqual(person1,person2)

//LODASH LIBRARY HAS ISEQUAL FUNCTION