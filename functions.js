// console.log("Hello World")

// function getName(name){
//     return name
// }

// getName("Shola")

// function getName(name){
//     console.log(name)
// }(
// getName("is tolu o")

// function checkHeight(name,height){
//   return height <= "4ft" ? name + " is close to the ground" : "Opoor"
// }
// console.log (checkHeight("lekan","4ft"))

// function checkHeight(name,height){
//     return height >= "4ft" && name + " is close to the ground"
//   }
//   console.log (checkHeight("Lekan","5ft"))

const multiplication = (number)=> {
    for(let i = 0; i <12;i++){
        // console.log(number +"*"+ i + "="+(number*i))
        console.log(`${number} * ${i} = ${number * i}`)
    } 
}

const addition = (number)=> {
    for(let i = 0; i <12;i++){
        console.log(number +"+"+ i + "="+(number+i))
    }
}

function doArithmetic(aFunction){
    let x =2
    aFunction(x)
} 

// note that x is same as number

// doArithmetic(multiplication)
// console.log()
// doArithmetic(addition)

//  4/03/2022

//   const drinkWater = function(){
//       console.log("drink water")
//   }

//   const drinkWater2 = () => {
//       console.log("drink water 2")
//   }

// doArithmetic ((element) => {
//     for(let i = 0; i <12;i++){
//       i >= element ?  console.log(`${element} / ${i} = ${i / element}`) : console.log(i)
//     }

// })
// function drinkWater() {
//     console.log("drink water")
// }

// const cookFood = function () {
//     return function(food) {
//         return food
//     }
// }

// const testBeans = cookFood()
// console.log(testBeans("beans"))

// const food = cookFood()("beans")
// console.log(food)

// A function that takes a function and return a functions

// const returnFunction = (aFunction) => {
//     return aFunction
// }

// const yetAnotherFunction = returnFunction(()=> console.log("Ekaabo"))

// yetAnotherFunction()

// const toggleLight = (event,callMeBack) => {
//     switch(event){
//         case "walkedIn":
//             callMeBack("Switch On")
//             break;
//         case "walkedOut":
//             callMeBack("Switch Off")
//             break;
//         default:
//             console.log("Light Off")
//             break;

//     }
// }

// toggleLight("walkedIn",(data) => console.log(`lights are ${data}`))
// toggleLight("walkedOut",(data) => console.log(`lights are ${data}`))
// toggleLight("walkedOnWater",(data) => console.log(`lights are ${data}`))

// const sayHi = function(name){
//     console.log(name)
// }
// sayHi("uju")

 
// 7/03/2022

// function sayHi(){
//     for(let i=0; i<=12;i++){
//         console.log (i)
    
//     }
// }

// sayHi() 

// let username = "Tolu"
// function changeName(name){
//     name = "Bilikis"
//     // cconsole.log(name)
// }

// changeName(username)
// console.log(username)



function movement(person){
    console.log(`when ${person.name} run ${person.isWig ? "her wig falls" : "breeze blows her hair"}`)
}

function animation(defineCharacterMovement){
    let character = {
        name : "adeola",
        isWig : true,
         gender : "female" 
    }
    defineCharacterMovement(character)
}

// animation(movement)
// animation((person)=>console.log(`when ${person.name} run ${person.isWig ? "her wig falls" : "breeze blows her hair"}`))

// let persons =["kola","adeola","ruth","increase","upah"]
// persons.map((person)=>console.log(person))

function createCharacter(){
    let character = {
        name : "adeola",
        isWig : true,
        gender : "female",
        getName: function () {
            return this.name
        }
    }
    return character
}

// let person = createCharacter()
// let personName = person.getName()
// console.log(personName)

// let person = createCharacter()
// let getPersonName = person.getName.bind(person)
// let humanName = getPersonName()
// console.log(humanName)

let person = {
    userName : "jerry",
    gender : "male",
    school : "unlag"
}
// for(key in person){
//     console.log(person[key])
// }

console.log(Object.keys(person))

ASSIG