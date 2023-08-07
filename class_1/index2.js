// operators(relation between 2 values)

// 1. Mathematical Operators

console.log("Addition operator",2+2)  // +
console.log("Subtraction operator",22-2)  // -
console.log("Multiplication operator",2*2)  // *
console.log("divide operator",20/2)  // /    always gives the value of quotient
console.log("Modulus operator",20%2)  // %   always gives the value of remainder
console.log("Exponential  operator",2**64)  // **   Exponential operator

let value = 2
console.log(value--)   // ++increement operator(pre and post), --Decrement operator(pre and post)
console.log(value)

// 2. Relational Operators [return a boolean(true or false) value]
// (<,>,>=,<=,)
console.log(10=='10')  // == loose equals
console.log(10===10)  // == strict equals

console.log(10 != "10")   // !=  not equal

// 3. Logical Operators [return a boolean(true or false) value] but it operates between 2 boolean statements
// 3.1 AND (&&) (return only only TRUE , when both statements are true)
let statemntOne = 5<4
console.log(statemntOne)
let statementTwo = 10<100
console.log(statementTwo)
let statementThird = 10==="10"
console.log(statementThird)

console.log("AND OPERATOR",statementTwo && statemntOne && statementThird )
// 3.2 OR (||)   (return only only TRUE , when any of them statement is true)
console.log("OR OPERATOR",statementTwo || statemntOne || statementThird )

// 3.3 NOT (!)
console.log("NOT OPERATOR",!false)


// truthy and falsy(0,'',undefined,null)



