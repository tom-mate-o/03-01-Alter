const yourname = prompt("Hello Stranger! What's your Name?");
const ageInYears = Number(prompt("How old are you? (in years)")); //Number vor prompt stellt den Datentyp auf Number um

const daysPerYear = 365.25; // average days per year including leap years
const daysPerMonth = 30.44; // average days per month

const ageInDays = ageInYears*daysPerYear;
const ageInHours = ageInDays*24;
const ageInMonths = ageInDays/daysPerMonth;
const ageInWeeks = ageInMonths*4;

//Conditional Operator
var commentage = (ageInYears>=50)?"👴👵 Okay Boomer... i guess your first christmas, was the acutal first christmas...":"Sheesh... ";


    if (isNaN(ageInYears)){
        alert("This is not a number!"); //alert if prompt is Not a Number
    } else{
    console.log("Hi, "+yourname+ "! :)");
    console.log("You are about " +ageInDays+ " days old. I say about, because I only know your age and not your exact date of birth.");
    console.log("That are round about " +ageInMonths+ " months.");
    console.log("Which are approximate " +ageInWeeks+ " weeks.");
    console.log("AAAAAaaaaand... HOLY MOTHER OF GOD!!! That are " +ageInHours+ " hours!!!! 😲")
    console.log(commentage + yourname + " ... you are REALLY old... o.O");
    }

    