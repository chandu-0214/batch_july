// scopes(global and local)


let name = "chandu"
console.log(name)


if(true){
    // code always execute bacause condition is true
    let role= 'frontend'
    console.log(role)
    console.log('conditional',name)
    if(true){
        console.log('nested if',role)
     

    }
}

for(let i=0;i<2;i++){
    console.log('loops',name)

}

function random(){
    console.log('function',name)
}
random()









