console.log("Data fetching start")
let url = "https://restcountries.com/v2/all"

// fetch()

fetch(url)
.then((res)=>res.json())
.then((data)=>console.log("Data",data))

console.log("Data Recieved")




















