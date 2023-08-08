"use strict";
const user = "Rahul";
const age = 23;
const skills = ['js', 'react', 'node'];
function showAge(age, gender) {
    if (!gender)
        gender = 'gender not provided';
    return age += 10;
}
let day = 2;
let users = ['ram', 'shyam', 'sita', 'gita', 'madan'];
let user1 = [1, "Rahul"];
let person = {
    name: "Rahul",
    age: 23,
    isStudent: true,
    address: {
        city: 'Kathmandu',
        country: 'Nepal'
    },
    role: "admin"
};
let person2 = {
    name: 'Madan',
    age: 25,
    isStudent: false,
    address: {
        city: 'Lalitpur',
        country: 'Nepal'
    },
    role: "user"
};
console.log(person.role);
console.log(person2.role);
