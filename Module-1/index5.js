// Loops (for,while)
// console.log("chandu")
// console.log("chandu")
// console.log("chandu")
// console.log("chandu")
// console.log("chandu")

// basic for loop

// syntax => for(initialization,termination condition,updation){
                            // code
//             }

for(let i=0;i<10;i++){
    // console.log(i)
}

// for loop in arrays 

let students=['xyz','Disha panigrahi','sheela singh','Pema Khandu']

for(let eachStudent of students){
    console.log(eachStudent)
}
students.push('chandu')

let lengthOfTheStudentsArray= students.length
for(let i=0;i<lengthOfTheStudentsArray;i++){
    console.log(i)
    console.log(students[i])
}
console.log(students)

// while loop
let i =10
while(i<10){
    console.log(" while",i)
    i++
}
let j=8
do{
    console.log("do while",j)
    j++
}while(j<10)





















