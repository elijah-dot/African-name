//arrays
var maleNames = ["Kwasi", "Kwadwo","Kwabena", " Kwaku", "Yaw", "Kofi","Kwame"];
var femaleNames = ["Akosua", "Adwoa", " Abenaa", "Akua", "Yaa", "Afua","Ama"];

var one_error = document.getElementById("one_error");
var two_error = document.getElementById("two_error");



function getDay(){
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var gender = document.getElementById("gender").value;
    var year = document.getElementById("year").value;
    var DD = parseInt(day);
    var MM = parseInt(month);
    var YY = parseInt(year.substr(2, 4));
    var CC = parseInt(year.substr(0, 2));

    var mine = Math.round(parseInt(((CC/4) -2*CC-1) + ((5*YY/4)) + ((26*(MM+1)/10)) + DD)%7);

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