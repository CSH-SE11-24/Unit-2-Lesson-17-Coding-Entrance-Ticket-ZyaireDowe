const prompt = require('prompt-sync')()

const students = ["Janiel", "Yariel", "Jazlynn", "Tofayl", "Zyaire", "Oscar", "Yineiri", "John", "Justice", "Alyma", "Annmary", "Salma", "Emilio", "Sandrea", "Christian", "John", "Denisse", "Angel", "Rihanna", "Laila", "Monica", "Corey", "Liana", "Mahamadou", "Francisco", "Prince", "Fatoumata", "Jason"]

// FUNCTION DEFINITION
// Write a function definition called getStudent that takes in an index. The code block should 
// print "Student at index is " with value at index of the students
// return the student at that index
function getStudent(index){
  console.log("Students at index is ${index}")
  return getStudent[index]
}




// FUNCTION CALL
console.log(`There are ${students.length} students in this class`)
let user = prompt("Which index do you want? ")
user = parseInt(user)

// Call the getStudent function with the index that the user selected above
let result= getStudent(index)


