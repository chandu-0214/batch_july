// json and storage mechanism

let sampleObj={
    name:"Chandu",
    role:"Front-end"
}
//json (js object notation is bascially used to communication between frontend and backend)

let sampleJsonObj={
    'name':"chandu",
    "role":"Front-end"
}

// json.strinfy(converts into json) and json.parse(parse the json into original data-type)

let stingifyData = JSON.stringify(sampleObj)
let parsedData = JSON.parse(stingifyData)
// console.log((parsedData))


let needToStore="This is local storage"
localStorage.setItem('local',needToStore)    // is used to stote the dta
localStorage.setItem('name','Chandu')


let getvalue=localStorage.getItem("local")
console.log(getvalue)

//localStorage.removeItem('local')
localStorage.clear()




