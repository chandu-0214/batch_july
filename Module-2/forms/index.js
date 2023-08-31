// accessing all html elemets
let formEl = document.getElementById('myForm')
let nameEl = document.getElementById('name')
let ContactEl = document.getElementById('Contact')
let maleEl = document.getElementById('male')
let femaleEl = document.getElementById('female')
let othersEl = document.getElementById('others')
let dobEl = document.getElementById('dob')
let emailEl = document.getElementById('email')
let passEl = document.getElementById('pass')
let jobRoleEl = document.getElementById('jobRole')

let emailErrorEl = document.getElementById("emailError")

let runTimeFormDetails={
    name:'',
    contactNo:0,
    gender:'',
    dob:"",
    email:"",
    password:"",
    jobRole:""
}

// Add Events

const handleName=(event)=>{
    let nameValue=event.target.value
    console.log(nameValue)
    runTimeFormDetails.name=nameValue
}
const handleContactNo=(event)=>{
    let Value=event.target.value
    runTimeFormDetails.contactNo=Value
}
const handleGender=(event)=>{
    let Value=event.target.value
    runTimeFormDetails.gender=Value
}
const handleEmail=(event)=>{
    let Value=event.target.value
    runTimeFormDetails.email=Value
}
const handlePassword=(event)=>{
    let Value=event.target.value
    runTimeFormDetails.password=Value
}
const handleJobRole=(event)=>{
    let nameValue=event.target.value
    runTimeFormDetails.jobRole=nameValue
}
const handleDob=(event)=>{
    let nameValue=event.target.value
    runTimeFormDetails.dob=nameValue
}



nameEl.addEventListener('change',handleName)
ContactEl.addEventListener('change',handleContactNo)
maleEl.addEventListener('change',handleGender)
femaleEl.addEventListener('change',handleGender)
othersEl.addEventListener('change',handleGender)
jobRoleEl.addEventListener('change',handleJobRole)
passEl.addEventListener('change',handlePassword)
emailEl.addEventListener('change',handleEmail)
dobEl.addEventListener('change',handleDob)



const handleSubmit=(event)=>{
    event.preventDefault()
    console.log(runTimeFormDetails)
    if(runTimeFormDetails.name===''){
        alert("Name should not be blank")
    }
    if(runTimeFormDetails.email){

        if(runTimeFormDetails.email.includes('@gmail.com')){
            emailErrorEl.textContent="Correct Gmail"
            emailErrorEl.style.color='green'
        }
        if(!runTimeFormDetails.email.includes('@gmail.com')){
            emailErrorEl.textContent="Incorrect Gmail"
            emailErrorEl.style.color='red'
        }
    }
}

formEl.addEventListener('submit',handleSubmit)







