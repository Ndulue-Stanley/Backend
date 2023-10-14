//higher order array method: a higher order array methods are methods that accept function as parameter or returns a function.

/**
 * filter: it returns a new array containing the element that matches the condition that has been set
 * map
 * reduce
 * forEach
 * sort
 * some
 * every
 * find
 * findIndex
 * flatMap
 * copyWithin
 * entries
 * keys
 * values\
 * != not equal to
 * !== not strictly equal to
 * === strictly equal to
 * == equal to
 * = assign
 */
let testarray = [100,200,300,400,500,600,700,800,900]
let answer = testarray.filter((el)=>{
    return el>200
})
console.log(answer)
let answer2 = testarray.filter((el)=>el<200)
console.log(answer2)

//return only beans
let testarray2 = ["rice","beans","yam"]
let food = testarray2.filter((el)=>{
    return el === "beans"
})
console.log(food)

//return only rice and yam
let stucks = testarray2.filter((el)=>{
    return el !== "beans"
})
console.log(stucks)
//given an array of objects with city name and population , create an array with objects from the first
//array if the population is >=2000
let cities = [{
    city:"lagos",population:3000
},
{
city: "ore",
population : 6000
},
{
    city:"benin",
    population:2000
},
{
    city: "abia",population: 1500
},
{
     city: "onitcha",population:9000
}]

let citi = cities.filter((el)=>{
    return el.population >= 2000
})
console.log(citi)

/**
 * given an array of object with name and sunject print out with the subject strictly equal to js
 */
let subject= [{
 name: "esther",subject: "javascript"
},
{
    name: "valerian",subject: "admin"
},
{name: "favour",subject: "design thinking"
},
{
    name: "jaji",subject:"electrician"
},
{
    name: "slyvia",subject:"html"
},
{
    name:"sanni", subject:"javascript"
}] 

 let names = subject.filter((el)=>{
     return el.subject === "javascript"
 })
console.log(names)

let fellows = subject.filter((el)=>{
    return el.name
})
let obj = subject.filter((el)=>{
return el.subject
})
