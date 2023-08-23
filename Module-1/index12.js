// recrusion (function calling itself )

// callbacks(while calling function you are passing function as a argument)



let greet =(message)=>{
    console.log('Hello chandu'+message)

}
function sendOff(callbacks){
    console.log("Bye ! chandu  ")
    callbacks('call back message')
}
sendOff(greet)













