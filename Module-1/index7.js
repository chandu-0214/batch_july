// (Task = write a function which takes single input and return output whether it is even or odd)


function checkOddOrEven(inputNumber){
    let reaminderValue = inputNumber%2
    if(reaminderValue===0){
        return "Even Number"
    }
    else{
        return "Odd Number"
    }
}

let returneddValue=checkOddOrEven(45)
//console.log(returneddValue)



// (Task = write a function which takes firstname and lastName and country name and return "Hello {FullName},Welcome to {country name}")


function givesFullName(firstname,lastName,country){
    let firstString = 'Hello '+firstname+" "+lastName+","
    let secoundString = "Welcome to "+country
    return firstString+secoundString
}

let formattedText = givesFullName('Sheela','Singh','Canada')       
console.log(formattedText)

// string contactaenation

let a = "chandu  "
let b = "  reddy"
//console.log(a+b)




