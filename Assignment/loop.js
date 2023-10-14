/**
 * map
 * reduce
 * forEach
 * some
 * every
 * sort
 */
// let e = "tomatoes"
// function remove(arr){
//     removee = arr.slice(4, 5)
//     return removee
// }
// console.log(remove(e))

// let arrOfnum = [1,2,3,4,5,]
// let result =narrOfnum.map((el)=>el * 2);
// console.log(result)

//comrparing
// let arr = [100,150,200,250,300,350,400]
// let filtered = arr.map((el)=>{
//   return el >=250
// })
// console.log(filtered)
// let mapped = arr.filter((el)=>{
//     return el >=250
// })
// console.log(mapped)


//given an array of object return true if the number is equal to female
// let set08 = [
//     {
//         name :"joan",
//         gender : "female"
//     },
//     {
//         name: "franklin",
//         gender: "male"
//     },
//     {
//         name: "regina",
//         gender: "female",
//     },
//     {
//         name: "daniel",
//         gender: "female"
//     }
// ]
// let map = set08.map((el)=>{
//     return el.gender ==="female"
// })
// console.log(map)

// //reduce: reduce takes in the acccumulator and the current value.
// let reduced = [1,2,3,4,5,6,]
// let reduceMethod = reduced.reduce((acc , cur)=>{
//     return acc + cur
// },5)
// console.log(reduceMethod)

// //sort
// let sorting = [2,3,7,1,0,9,4,6,5];
// let sortMethod = sorting.sort((a ,b) => {
//     return a - b
// })
// console.log(sortMethod)
z
// //forEach: 

//classwork
let number = [1,2,3,4,5,6,7,8,9]
let reduceMethod = number.reduce((acc , cur)=>{
 return acc+cur
})
console.log(reduceMethod)


let averagenumbe = number.reduce((acc ,cur)=>{
    return acc+cur /number.length
})
console.log(averagenumbe)