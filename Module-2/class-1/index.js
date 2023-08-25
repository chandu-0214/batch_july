
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












