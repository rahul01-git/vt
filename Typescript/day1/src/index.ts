//#NOTE: built in types
let sales : number = 123_456_789
let course : string = 'Typescript'
let is_published: boolean = true 


//#NOTE: any type
//level is of type any that makes no sense as we're back to js by doing this
let level
level = 1
level = 'one'

//arrays
let numbers: number[] = [1,2,3] //this is valid

//NOTE: this is invalid
// let numbers2: number[] = [1,2,'3'] 



//#NOTE: enums
const enum Size { Small = 1, Medium , Large} 
let mySize : Size = Size.Medium
console.log(mySize)

//#NOTE: functions
function calculateTax(income: number, taxYear = 2022) : number { //to return nothing replace 'number' with 'void'
    //taxYear? means this value is optional
    //but here i have set it to default value of 2022
    if(taxYear < 2022) return income * 1.2
    return income * 1.3
}

console.log(calculateTax(10_000))

//#NOTE: Objects
let employee: {
    readonly id: number,
    name: string
} = {
    id: 1
    , name: 'Rahul'
}

// employee.id = 2 // this is invalid because we have set id to readonly so we cannot change it
