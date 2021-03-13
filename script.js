
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

function income (sp, time) {
    var buyingPrice = 45;
    var weeklyIncome = totalProduction * buyingPrice *7;
    var weeklyOutput = document.getElementById("weeklyOutput");

   

    var yearlyIncome = totalProduction * buyingPrice * 365;
    var annualOutput = document.getElementById("annualOutput");

    annualOutput.innerHTML = "Your weekly income will be Kshs " +weeklyIncome +"<br>"
                            + "Your yearly income will be Kshs " +yearlyIncome;
}

function leapYearIncome (month, days){
    var january = {
        month : "January",
        days : 31,
        
    };
    var february = {
       month : "February",
       days : 28
    };
    var march ={
       month : "March",
       days : 31
    };
    var april= {
       month : "April",
       days : 30
    };
    var may = {
       month : "May",
       days : 31
    };
    var june = {
       month : "June",
       days : 30
    };
    var july = {
       month : "July",
       days : 31
    }
    var august= {
       month : "August",
       days : 31
    }
    var september = {
       month : "September",
       days : 30
    }
    var october = {
       month : "October",
       days : 31
    }
    var november = {
       month : "November",
       days : 30
    }
    var december = {
       month : "Decembeer",
       days : 31
    }
    var leapYear = [january, february, march, april, may, june, july, august, september, october, november, december];
    var leapMonth = document.getElementById("leapMonth");

for (var i=0; i<12; i++) {

    //var totalProduction = 500;
    var monthlyIncome = leapYear[i].days * totalProduction * 45;

     leapMonth.innerHTML = "Your income for " + leapYear[0].month + " is Kshs " + monthlyIncome + "<br>"
                            +"Your income for " + leapYear[1].month + " is Kshs " + monthlyIncome + "<br>"
                            +"Your income for " + leapYear[2].month + " is Kshs " + monthlyIncome + "<br>"
                            +"Your income for " + leapYear[3].month + " is Kshs " + monthlyIncome + "<br>"
                            +"Your income for " + leapYear[4].month + " is Kshs " + monthlyIncome + "<br>"
                            +"Your income for " + leapYear[5].month + " is Kshs " + monthlyIncome + "<br>"
                            +"Your income for " + leapYear[6].month + " is Kshs " + monthlyIncome + "<br>"
                            +"Your income for " + leapYear[7].month + " is Kshs " + monthlyIncome + "<br>"
                            +"Your income for " + leapYear[8].month + " is Kshs " + monthlyIncome + "<br>"
                            +"Your income for " + leapYear[9].month + " is Kshs " + monthlyIncome + "<br>"
                            +"Your income for " + leapYear[10].month + " is Kshs " + monthlyIncome + "<br>"
                            +"Your income for " + leapYear[11].month + " is Kshs " + monthlyIncome ;
   
   
}

}
