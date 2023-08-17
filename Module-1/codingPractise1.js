// (task = take input as a number  and return the reverse of that number)


function reverseTheNumber(num){
    let lengthOfTheNum= num.length
    let reversedNum = ''
    for(let i=lengthOfTheNum-1;i>=0;i--){
        reversedNum=reversedNum+num[i]
    }
    //console.log(reversedNum)
}
reverseTheNumber("Apple")   // 'enalp'



// (task = take a string as a input and count the alphabets)


'Apple'           // a=1,p=2,l=1,e=1




function countOFAlpahbets(inputNumber){
    let lengthOfInput= inputNumber.length
    let returenedObject ={}
    for(let i=0;i<lengthOfInput;i++){
        console.log("i",inputNumber[i])  // p
        for(let j=0;j<lengthOfInput;j++){
            if(inputNumber[i]===inputNumber[j]){
                console.log("Chandu")
            }
            
        }
    }
}

countOFAlpahbets("ApplA")      // a=1,p=2,l=1,e=1




