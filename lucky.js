let dateOfBirth = document.querySelector("#date-of-birth")
let luckyNumber = document.querySelector("#lucky-number")
let checkNumber = document.querySelector("#check-number")
let outputBox = document.querySelector("#output-div")


function compareValue(sum,luck){
    console.log(sum)
    console.log(luck)
    
 if(sum%luck===0){
    outputBox.innerText = "your birthday is lucky"
}else {
    outputBox.innerText = "your birthday is not lucky"
}

}
function checkBirthDateIsLucky(){
    let luck = Number(luckyNumber.value)
    
        let dob = dateOfBirth.value
        let sum = calculateSum(dob)
       
        if(luckyNumber.value<0){
            outputBox.innerText = "Nergative value is not Accepted"
        } else if(dob&&luckyNumber.value){
            compareValue(sum, luckyNumber.value)
            }
        else{
            outputBox.innerText = "Input both the Values"
        }
    
}

function calculateSum(dob){
    dob = dob.replaceAll("-","")
    let sum = 0
    for(let i = 0 ; i < dob.length ; i++){
        sum = sum + Number(dob.charAt(i))
    }
    return sum
}

checkNumber.addEventListener("click", checkBirthDateIsLucky)

