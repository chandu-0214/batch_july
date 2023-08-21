// Array Methods(map,filter)
let studentsMarks=[56,89,45,74,63,32]    // +1 marks each and every item 

// console.log(studentsMarks)
// let modifiedstudentsMarks=[]
// for(let eachSubjectMark of studentsMarks){
//     // modifiedstudentsMarks.push(eachSubjectMark+1)
//     console.log(eachSubjectMark)
// }
// console.log(modifiedstudentsMarks)


// map(is used to modify the each and every item in the array)
let modifiedItems = studentsMarks.map((eachValue)=>{
    return eachValue+2
})

console.log(modifiedItems)

// filter(is used to filter the items in the array a/c to filter condition)

let filteredItems = studentsMarks.filter((eachValue)=>{
    return eachValue>50
})


console.log(filteredItems)

// objectMethods 
const randomObject = {
    "name": "RandomObject",
    "age": 25,
    "is_student": true,
    "favorite_colors": ["blue", "green", "red"],
    "address": {
      "street": "123 Main St",
      "city": "Randomville",
      "country": "Randomland"
    },
    "hobbies": ["reading", "painting", "playing guitar"],
    "friends": [
      {
        "name": "Alice",
        "age": 28
      },
      {
        "name": "Bob",
        "age": 26
      }
    ],
    "employment": {
      "position": "Software Developer",
      "company": "TechCo"
    }
  }

let randomObjectKeys= Object.keys(randomObject)
let randomObjectValues = Object.values(randomObject)
let randomObjectenteries = Object.entries(randomObject)

console.log(randomObjectKeys)
console.log(randomObjectValues)
console.log(randomObjectenteries)
