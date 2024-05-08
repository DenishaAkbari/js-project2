let month = 2;


document.querySelector(".winter").innerHTML = " 11 to 2 : winter";
document.querySelector(".summer").innerHTML = "3 to 6 : summer";
document.querySelector(".monsoon").innerHTML = "7 to 10 : monsoon";




switch (month)

{
    case 11:
    case 12:
    case 1:
    case 2:
        document.querySelector(".winter").innerHTML = "winter";
        break;
    case 3:
    case 4:
    case 5:
    case 6:
        document.querySelector(".summer").innerHTML = "summer";
        break;
    case 7:
    case 8:
    case 9:
    case 10:
        document.querySelector(".monsoon").innerHTML = "monsoon";
        break;
    // default:
     
        // Handles the condition if number entered
        // is not among the valid 12 months
        Document.QUerySelector(".d").innerHTML = ("valid month.....");
        break;
}