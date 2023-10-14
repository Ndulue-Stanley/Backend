//  let sampleArray = ["red","green","white","black","indigo","purple","yellow"]
//  function combinedArray(array){
//     let combine = array.join("")
//   return combine
// }
//  console.log(combinedArray(sampleArray))

//   //2
//  function poping(array){
//     let pup = array.pop()
//     return pup
// }
//  console.log(poping(sampleArray))

 //3 pallindrome words are words if spelt backward remain the same 
 let palin = ["civic"]
 function reverse(rev){
    let split = rev.toString().split("").reverse().join("")
     return split.includes(rev)
 }
console.log(reverse(palin))
//4
let number = [1, 2, 3, 4, 5, 6]
function removedArray(array){
let shif = array.shift()
return shif
}
console.log(removedArray(number))

function removeLast(array){
    let pop = array.pop()
         return pop
}
console.log(removeLast(number))

//5
let empty = []                                                      

function addArrray(array){
    let push = array.push(0,1,2)
    return push
}
console.log(addArrray(empty))
console.log(empty)

function stringArray(array){
    let join = array.join("+")
    return join
}
console.log(stringArray(empty))

//6
let deep = [3,2,[1,4,[5]]]
function deepArray(array){
let plain = array.flat().sort()
return plain.flat()
}
console.log(deepArray(deep))
//7
let foodStucks = ["beans","rice","palm oil","tomatoes","vegetable oil","chicken"]
function included(array){
    let includes = array.includes("beans")
    return includes
}
console.log(included(foodStucks))

//8

function removeddArray(array){
    let replace = array.splice(4,1,"ororo")
    return replace
}
console.log(removeddArray(foodStucks))
console.log(foodStucks)

function addArrray(array){
    let splice = array.splice(2 ,0, "turkey")
    return splice
}
console.log(addArrray(foodStucks))
console.log(foodStucks)


let numbe = [2,3,4,5,6]

function mini(num){
    let mini = num
    let mini2 = num.pop()
    let mini3 = num.shift()
    return mini
}
console.log(mini(numbe))