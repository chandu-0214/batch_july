console.log("Hello Class 6")


// Function (declaration,expression,arrow)

// let firstInput=4
// let secoundInput=5
// console.log(firstInput+secoundInput)

// 1. Function Declaration
// (Task = write a function which takes 2 inputs and gives the sum as output)


function givesSumOfTwoNumbers(firstInput,secoundInput){             //(arguments)
    console.log("Function Triggered")
    let sumOfTwoNUmbers = firstInput+secoundInput
    return sumOfTwoNUmbers
}

let returnedValue = givesSumOfTwoNumbers(2,25)                          // Function Calling(parameters)
console.log(returnedValue)

let anotherReturnValue = givesSumOfTwoNumbers(2,2)                          // Function Calling(parameters)
console.log(anotherReturnValue)











