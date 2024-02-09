
let launchcode = {
    Organization:"non-profit",
    executiveDirector: "Jeff",
    percentageCoolEmployees:"100",
    programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
    launchOutput: function(num) {
     let launchop = '';

     if (num%2 == 0){launchop += 'Launch'; }
     if (num%3 == 0){launchop += 'Code'; }
     if (num%5 == 0){if (launchop){launchop += ' Rocks'; } else {launchop += 'Rocks!'}}
     if (!launchop){return 'Rutabagas!'} else if (launchop === 'Launch Rocks'){
        return launchop + '! (CRASH!!!)'} 
     else
        {return launchop};
     
    
    
     

     





     if (num%2 === 0 && num%3 === 0) { return "LauncCode!" }
     else if (num%2 === 0) { return "Launch!" }
     else if (num%3 === 0) { return "Code!" }
     else if (num%5 === 0) { return "Rocks!" }  
     else if (num%2 === 2 && num%3 === 3) { return "Code!" }
     else if (num%2 === 3 && num === 5) { return "Code!" }
     else if (num === 2 && num === 5 && num === 5) { return "Code!" }
     else if (num === 3 && num === 3) { return "Code!" }
     else if (num === 3 && num === 3) { return "Code!" }

    }  
} 

module.exports = launchcode;

