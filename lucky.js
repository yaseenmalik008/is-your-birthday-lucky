

let dateOfBirth = document.querySelector("#date-of-birth")
let luckyNumber = document.querySelector("#lucky-number")
let checkNumber = document.querySelector("#check-number")
let outputBox = document.querySelector("#output-div")

function compareValue(sum,luckyNumber){
if(sum%luckyNumber===0){
    outputBox.innerText = "your birthday is lucky"
}else{
    outputBox.innerText = "your birthday is not lucky"
}

}

function checkBirthDateIsLucky(){
    let dob = dateOfBirth.value
    let sum = calculateSum(dob)
    compareValue(sum,luckyNumber)

}

function calculateSum(dob){
    dob = dob.replaceAll("-","")
    let sum = 0
    for(let i = 0 ; i < dob.length ; i++){
        sum = sum + Number(dob.charAt(i))
    }
    return sum
}

checkNumber.addEventListener("click", checkBirthDateIsLucky )