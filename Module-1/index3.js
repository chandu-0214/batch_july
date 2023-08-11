// Data structures(array and object) and algorithims (DSA)

// is used to store the data where we can works efficienlty while retriving the data
// 1. ARRAY([])

let students=["suresh Babu","Meena R",'Sevanthi','Disha panigrahi','sheela singh','Pema Khandu']

console.log(students[0])   // here 0 is index  (Method is called indexing)

// 2. OBJECTS({}) (items should be in key:value pair)

let mobiles = {apple:"14 pro Max",onePLus:'nord',person1:"suresh Babu",person2:"Meena R","Full Name":'chandu'}

// retrive the data(bracket,dot)


// 2.1 dot Method(applicable only for valid keys)

console.log(mobiles.apple)

// 2.2 bracket method 
let name = "person1"
console.log(mobiles["Full Name"])



// Array Methods
let students=["suresh Babu","Meena R",'Sevanthi','Disha panigrahi','sheela singh','Pema Khandu']

console.log(students)

console.log(students.length)  // to find length of array

students.push(2154154) //  push() add item to the last of the array
 
students.pop()           // pop() removes the last item of the array

// modify the items 
students[0]='Suresh'
console.log(students)


// Object Method 

let mobiles = {apple:"14 pro Max",onePLus:'nord',person1:"suresh Babu",person2:"Meena R","Full Name":'chandu'}


console.log(mobiles.length)

mobiles.length= 250            // add item in the object     (object.key=value)
mobiles.apple='13 pro max'     // // modify the items         (object.modifyKey=newValue)
console.log(mobiles)










