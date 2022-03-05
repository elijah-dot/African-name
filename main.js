//validation for all inputs
let inputToday = document.form["form"]["name"];
let inputGender = document.form["form"]["gender"];
let inputDate = document.form["form"]["date"];
let week = document.form["form"]["week"];
//validation for all errors
let today_error = document.getElementById("name_error");
let gender_error = document.getElementById("gender_error");
let date_error = document.getElementById("date_error");
//
function validated() {
  if (inputToday.value === "" || inputToday.value === null) {
    inputToday.style.border = "solid 1px red";
    today_error.style.display = "block";
    inputToday.focus();
    return false;
  }

  if (inputGender.value === "" || inputGender.value === null) {
    inputGender.style.border = "solid 1px red";
    gender_error.style.display = "block";
    inputGender.focus();
    return false;
  }

  if (inputDate.value === "" || inputDate.value === null) {
    inputDate.style.border = "solid 1px red";
    date_error.style.display = "block";
    inputDate.focus();
    return false;
  }
}

