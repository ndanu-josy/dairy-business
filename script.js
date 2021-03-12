
    var totalProduction;
function shedProduction(){
    

    var shedA = document.getElementById("amt1").value;
    var shedB = document.getElementById("amt2").value;
    var shedC = document.getElementById("amt3").value;
    var shedD = document.getElementById("amt4").value;

     totalProduction = parseInt(shedA) + parseInt(shedB) +parseInt(shedC) + parseInt(shedD);
    var dailyPro = document.getElementById("dailyPro");

        
    if (isNaN(shedA) || isNaN(shedB) || isNaN(shedC) || isNaN(shedD)){
        alert ("CAUTION !!! Only numeric values are accepted")
        return;
    }
    else if (shedA === "" || shedB === " " || shedC === " " || shedD === " "){
        alert ("please fill all the fields") 
        return;
    
    }
    else{
        dailyPro.innerHTML = "Your daily production for shed A is " + shedA + "<br>"
                             + "Your daily production for shed B is " + shedB + "<br>"  
                             + "Your daily production for shed C is " + shedC+ "<br>"  
                             + "Your daily production for shed D is " + shedD + "<br>" 
                             + "Your total milk production in a day is  " + totalProduction;

    }
    
   
}
/* var income = function (sp, time){
    var buyingPrice = 45;
    var weeklyIncome = totalProduction * buyingPrice * 7;
    console.log("Your weekly income will be Kshs"+ weeklyIncome);

    var yearlyIncome = tot * buyingPrice* 366;
    console.log("Your annual income will be Kshs"+ yearlyIncome);

}
 income ();*/
function income (sp, time) {
    var buyingPrice = 45;
    var weeklyIncome = totalProduction * buyingPrice *7;
    var weeklyOutput = document.getElementById("weeklyOutput")

    weeklyOutput.innerHTML = "Kshs" + weeklyIncome;
}