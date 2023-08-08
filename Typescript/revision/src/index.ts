// variables 
const user: string = "Rahul"
const age: number = 23
const skills: string[] = ['js', 'react', 'node']


//function
function showAge(age: number, gender?: string): number {
    if (!gender) gender = 'gender not provided'
    console.log(gender)
    return age += 10
}

console.log('age: ' + showAge(9, 'male'))

//enum -> it is used when a constant/variable might has multiple values
const enum days {
    sun = 1,
    mon,
    tue,
    wed,
    thu,
    fri,
    sat
}

let day = days.mon
console.log('today is ' + day)

//arrays
let users: string[] = ['ram', 'shyam', 'sita', 'gita', 'madan']
//here [ram','shyam',true,1] will be invalid because we have define it's type to be string array

//tuples -> it is a fixed length array where each member has it's own particular type
//mainly useful when we have key value pairs mainly 2 elements
let user1: [number, string] = [1, "Rahul"]
//user1.push(1) -> it doesn't gives any compile time error but is invalid as we cannot add more values to tuples rather than defined ones

//object

const enum Roles {
    user = 'user',
    admin = 'admin'
}

type Person = {
    name: string;
    age: number;
    isStudent: boolean;
    address: { city: string; country: string };
    readonly role: Roles
}

let person: Person = {
    name: "Rahul",
    age: 23,
    isStudent: true,
    address: {
        city: 'Kathmandu',
        country: 'Nepal'
    },
    role: Roles.admin
}

let person2: Person = {
    name: 'Madan',
    age: 25,
    isStudent: false,
    address: {
        city: 'Lalitpur',
        country: 'Nepal'
    },
    role: Roles.user
}

console.log(person.role)
console.log(person2.role)