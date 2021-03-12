

//var shedA = prompt("enter amount of milk for shed A ")

//var shedB = prompt("enter amount of milk for shed B ")


//ar shedC= prompt("enter amount of milk for shed c ")


//var shedD = prompt("enter amount of milk for shed D ")


//var totalProduction = parseInt(shedA) + parseInt(shedB) +parseInt(shedC) + parseInt(shedD);


//console.log ("Your production in shed A is "+shedA+ " litres in a day") ;
//console.log ("Your production in shed Bis "+shedB+ " litres in a day");
//console.log ("Your production in shed C is "+shedC+ " litres in a day");
//console.log ("Your production in shed D is "+shedD+ " litres in a day");
//console.log ("Your total production in a day is "+totalProduction+ " litres");
function shedProduction(){
    

    var shedA = document.getElementById("amt1").value;
    var shedB = document.getElementById("amt2").value;
    var shedC = document.getElementById("amt3").value;
    var shedD = document.getElementById("amt4").value;

    var totalProduction = parseInt(shedA) + parseInt(shedB) +parseInt(shedC) + parseInt(shedD);
    var dailyPro = document.getElementById("dailyPro");

        dailyPro.innerHTML = "Your daily production for shed A is " + shedA + "<br>"
                             + "Your daily production for shed B is " + shedB + "<br>"  
                             + "Your daily production for shed C is " + shedC+ "<br>"  
                             + "Your daily production for shed D is " + shedD + "<br>" 
                             + "Your total milk production in a day is  " + totalProduction;

    //if (shedA === 0 || shedB === 0 || shedC === 0 || shedD === 0){
        //dailyPro.innerHTML = "please fill all the fields";
    //}
    //else{
        //dailyPro.innerHTML = "Your daily production for Shed A is " + shedA;
        //dailyPro.innerHTML = "Your daily production for Shed B is " + shedB;
       // dailyPro.innerHTML = "Your daily production for Shed C is " + shedC;
        //dailyPro.innerHTML = "Your daily production for Shed D is " + shedD;

        //dailyPro.innerHTML = totalProduction;
    //}
    
   
}