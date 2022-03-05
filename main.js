//validation for all inputs
let inputToday = document.getElementById("name");
let inputGender = document.getElementById("gender");
let inputDate = document.getElementById("birth");
let week = document.getElementById("week");
//validation for all errors
let today_error = document.getElementById("name_error");
let gender_error = document.getElementById("gender_error");
let date_error = document.getElementById("date_error");
//validation of button submit

function mine(){
    if(inputToday.value === "" || inputToday.value === null){
        inputToday.style.border = "red";
        today_error.style.display = "block";
        inputToday.focus
        return false;
    }
    if(inputGender.value === "" || inputGender.value === null){
        inputGender.style.border = "red";
        gender_error.style.display = "block";
        inputGender.focus
        return false;}
    if(inputDate.value === "" || inputDate.value === null){
        inputGender.style.border = "red";
        gender_error.style.display = "block";
        inputGender.focus
        return false;}
}  