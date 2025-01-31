function checkAge() {

    let ageInput = document.getElementById("age-input").value;

    let age = Number(ageInput);
    
    if (isNaN(age)) {
        document.getElementById("error-content").style.visibility ="visible";
        document.getElementById("main-content").style.visibility ="hidden";
    } else if (!Number.isInteger(age)) {
        document.getElementById("error-content").style.visibility ="visible";
        document.getElementById("main-content").style.visibility ="hidden";
    }  else if (age < 18) {
        document.getElementById("error-content").style.visibility ="visible";
        document.getElementById("main-content").style.visibility ="hidden";
    } else if (age > 120) {
        document.getElementById("error-content").style.visibility ="visible";
        document.getElementById("main-content").style.visibility ="hidden"; 
    } else {   
        document.getElementById("main-content").style.visibility ="visible";
        document.getElementById("error-content").style.visibility ="hidden";
    }
}