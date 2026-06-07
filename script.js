function genpassword(length=8){
let chars = [
"A","B","C","D","E","F","G","H","I","J","K","L","M",
"N","O","P","Q","R","S","T","U","V","W","X","Y","Z",

"a","b","c","d","e","f","g","h","i","j","k","l","m",
"n","o","p","q","r","s","t","u","v","w","x","y","z",

"0","1","2","3","4","5","6","7","8","9",

"@","#","$","%","&","*","!","?"
];;
    let password="";

for(let i =0 ; i<length; i++){
    let d=Math.floor(Math.random()*chars.length)
    password+=chars[d]
}
return(password)
// console.log(password)
}
let locker=genpassword(10)
let display = document.querySelector("#display")
let btn= document.querySelector("#btn")
let input = document.querySelector("#input")
document.getElementById("btn").addEventListener("click",function(){
    locker=genpassword(input.value) 
    display.textContent=locker
    if(input.value<9){
        document.getElementById("power").textContent="weak"

    }
    else if (input.value<13) {
                document.getElementById("power").textContent="medium"

    } else {
                document.getElementById("power").textContent="strong"

    }
    // console.log(locker) 
})
let copy=document.getElementById("copy").addEventListener("click",function(){
    let clip=display.textContent
    navigator.clipboard.writeText(clip)
    alert("Text copiedddddd")
})