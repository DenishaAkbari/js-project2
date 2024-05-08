let units = 1000
let bill = 0


if(units<=50){
  bill  = units*1
}
else if(units <=150){
  bill = 50*1 + (units-50)*2
}
else if(units <=250){
  bill = 50*1 + 100*2 + (units-150)*3
}
else if(units>250){
  bill = 50*1 + 100*2 + 150*3 + (units-250) *4
}

if(bill>150){
  bill = bill + bill*0.2
}
document.querySelector('.tbill').innerHTML = "Total units : " + units;
document.querySelector('.bill').innerHTML = "Bill : " + bill;




