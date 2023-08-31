
let headingElemt= document.getElementById('heading')
let containerElement = document.getElementById('container')


//console.log(headingElemt)

let paragraphEl = document.getElementById('paragraph')

//console.log(paragraphEl)

// creates  an events 
let buttonElement = document.getElementById("clickButton")

const handleClickButton =()=>{
    console.log("Button is clicked")
    headingElemt.textContent='Hello Dom'
headingElemt.style.color='red'
headingElemt.style.backgroundColor='yellow'
headingElemt.className='heading'
paragraphEl.textContent="Yeahhhh I changes"
let headingElemt2 = document.createElement('p')
containerElement.appendChild(headingElemt2)
headingElemt2.textContent="Created from JS"
}
buttonElement.addEventListener('click',handleClickButton)

// creat a new html elements 
let inputElement = document.getElementById('input')
console.log(inputElement)

const handleInputElement =(event)=>{
    console.log(event.target.value)  // entire value in the input
    //console.log(event.key)           //  used to know the which key is pressed by the user

    let userEnteredKey= event.key
    if(userEnteredKey=='Enter'){
        console.log(event.target.value)
    }
}
inputElement.addEventListener('blur',handleInputElement)








