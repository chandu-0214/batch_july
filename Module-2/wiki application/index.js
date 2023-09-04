// console.log("Data fetching start")
// let url = "https://restcountries.com/v2/all"

// // fetch()

// fetch(url)
// .then((res)=>res.json())
// .then((data)=>console.log("Data",data))

// console.log("Data Recieved")

let searchInputEl = document.getElementById('searchInput')
let resultsContainer = document.getElementById('resultsContainer')
let wikiURL = "https://apis.ccbp.in/wiki-search?search=";



const integrateItem = (eachItem)=>{
    let divElemt = document.createElement('div')
    let h2Elemt = document.createElement('h2')
    let acchorElemt = document.createElement('a')
    let descriptionElemt = document.createElement('p')

    h2Elemt.textContent=eachItem.title
    divElemt.appendChild(h2Elemt)

    acchorElemt.textContent=eachItem.link
    acchorElemt.href=eachItem.link
    divElemt.appendChild(acchorElemt)

    descriptionElemt.textContent=eachItem.description
    divElemt.appendChild(descriptionElemt)

    resultsContainer.appendChild(divElemt)

}


const renderData = (data)=>{
    resultsContainer.textContent=''
    for(let eachItem of data.search_results){
        integrateItem(eachItem)
    }


}
const fetchdata = (searchvalue)=>{
   
    let url = wikiURL + searchvalue
    fetch(url)
.then((res)=>res.json())
.then((data)=>renderData(data))
    

}



const handlesearchInput = (event)=>{
    if(event.target.value!=="" &&event.key==='Enter'){
    fetchdata(event.target.value)
    }


}

searchInputEl.addEventListener('keyup',handlesearchInput)
















