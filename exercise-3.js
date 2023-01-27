// In this exercises something goes wrong. Even though we have created a copy of `person1`, modifying the property `city` of `person2` changes even the value for `person1`. This happens because we have created a shallow copy.
// How we can fix the code, in order to modify the values of `person2` without changing the one of `person1`?

const person1 = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
  address: {
    state: 'Italy',
    city: 'Rome',
    street: 'Via Romano, 12'
  }
};

const person2 = { ...person1 };
//method 1 -> make a shallow copy of the nested address object too
person2.address = {...person1.address};

person2.address.city = 'Milan';

//method 2 -> make a deep copy of the whole object using underscore
const person3 = _.cloneDeep(person1);
person3.address.city = 'Genova';

console.log(person1);
console.log(person2);
console.log(person3);