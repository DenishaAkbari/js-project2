
let P = 1000;
let R = 2;
let N = 50;
let SI = (P * R * N) / 100;

document.querySelector(".units").innerHTML = "Enter Units : 1000";
document.querySelector(".rate").innerHTML = "Enter Rate : 2";
document.querySelector(".years").innerHTML = "Enter Years : 50";
document.querySelector(".famount").innerHTML = "Final Amount : " + SI;



if (8>=N && N<=12) { 
    if (5>=N && N<=8) { 
        if(3<=N && N<=5) { 
            document.querySelector(".r3").innerHTML="Rate based on year 3";
        }else {
            document.querySelector(".rn3").innerHTML="rate based on year not 3";
        }
    } else {
        if(5<=N && N<=8) {
            document.querySelector(".r5").innerHTML="rate based on year 5";
        } else {
            document.querySelector(".rn5").innerHTML="rate based on year not 5";
        }
    }
} else {
    if(8<=N && N<=12) {
        document.querySelector(".r12").innerHTML="rate based on year 12";
    } else {
        document.querySelector(".rn12").innerHTML="rate based on year is not 12";
    }   
}
console.log(SI);