//arrays
let maleNames = ["Kwasi", "Kwadwo","Kwabena", " Kwaku", "Yaw", "Kofi","Kwame"];
let femaleNames = ["Akosua", "Adwoa", " Abenaa", "Akua", "Yaa", "Afua","Ama"];

let one_error = document.getElementById("one_error");
let two_error = document.getElementById("two_error");



function getDay(){
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let gender = document.getElementById("gender").value;
    let year = document.getElementById("year").value;
    let DD = parseInt(day);
    let MM = parseInt(month);
    let YY = parseInt(year.substr(2, 4));
    let CC = parseInt(year.substr(0, 2));

    let mine = Math.round(parseInt(((CC/4) -2*CC-1) + ((5*YY/4)) + ((26*(MM+1)/10)) + DD)%7);

    if(DD <= 0 || DD > 31){
        alert("invalid date!")
        one_error.style.display = "block";
    }
    else if (MM <= 0 || MM > 12){
        alert("invalid month!")
        two_error.style.display = "block";
    }
    
    if (gender === "male"){
        document.getElementById("display").innerHTML = "your name is " +  maleNames[mine]
    }
    else if(gender === "female"){
        document.getElementById("display").innerHTML = "your name is " +  femaleNames[mine]

    }

}