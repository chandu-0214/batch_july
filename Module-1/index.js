let headingEl = document.getElementById('heading')
let buttonEl = document.getElementById('button')

function handleButton(){
headingEl.textContent='Thank You for Joining'
headingEl.style.color='orange'
headingEl.style.backgroundColor='yellow'

}
buttonEl.addEventListener('click',handleButton)

