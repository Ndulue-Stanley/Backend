
let varName = "   these are strings methods , these are methods i learnt today , today i was able to learn indexof , lastindexof , split and slice   "
// console.log(varName.indexOf("today"))


console.log(varName.trim())

console.log(varName.slice(66 ,100))

console.log(varName.length)

console.log(varName.split("today"))

console.log(varName.split("these"))

console.log(varName.indexOf("e", "these"))

console.log(varName.indexOf("these" ,9))

console.log(varName.slice(3 ,9).indexOf("e"))

console.log(varName.replace("these" ,"THESE"))

console.log(varName.replaceAll("these" ,"this"))



//make research and read on five other strings method

console.log(varName.trimStart())

console.log(varName.trimEnd())

console.log(varName.startsWith("   "))

console.log(varName.startsWith("today"))

console.log(varName.endsWith("   "))

console.log(varName.search("today"))

console.log(varName.charAt(4))

console.log(varName.charCodeAt("today"))

console.log(varName.slice("this is neg",-12 ))

console.log(varName.substring(4, 12))

console.log(varName.substr(0,12))

console.log(varName.includes("those"))

console.log(varName.includes("today"))

//concat
let str1 = "hello"
let str2 = "world"
let str3 = "wow"
console.log(str1.concat(str2 + str3))