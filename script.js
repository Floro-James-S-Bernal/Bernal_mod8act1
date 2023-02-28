var Name= prompt("Enter your Full Name.")
var Username = prompt("Enter your Username.")
var Gender
if(confirm("What is your gender?\nPress OK if you are Male.\nPress Cancel if Female.")){
    alert("Your Gender has been set as Male.")
    Gender = "M"
    }else{
        alert("Your Gender has been set as Female.")
        Gender = "F"
    }
var Desc = prompt("Please type a brief description of yourself.")
var Year = prompt("Enter your Year of Birth.")
var Age = 2023 - Year
if(confirm("Do you want to use a Custom Profile Picture?")){
    var Custom = prompt("Please enter the File Name of the Picture.")
}else{
    alert("No image has been set.")
}
document.getElementById("fname").innerHTML = Name;
document.getElementById("username").innerHTML = Username;
document.getElementById("gender").innerHTML = Gender;
document.getElementById("desc").innerHTML = Desc;
document.getElementById("year").innerHTML = Year;
document.getElementById("age").innerHTML = Age;
document.getElementById("ppic").src = Custom;