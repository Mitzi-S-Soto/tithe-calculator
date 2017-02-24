// tipcalc.js

//Calculate the tip
function calculateTip(){
    // store the data of the inputs
    var paycheckAmount = document.getElementById('paycheckAmount').value;
    var giving = document.getElementById('giving').value;
    var numPaychecks = document.getElementById('numPaychecks').value;
    var tipPercent = (document.getElementById('tipPercent').value)/100;
    
    //make sure things are numbers
    if(isNaN(paycheckAmount) || isNaN(tipPercent)|| isNaN(numPaychecks)){
        return document.getElementById("message").style.display = "block";
    }
     //make sure required fields are filled
    if(paycheckAmount === "" || giving == 0 && tipPercent ===""){
        return document.getElementById("message").style.display = "block";
    }
    
    //check if input is empty or less/equal to 1
    if(numPaychecks === "" || numPaychecks <= 1){
        numPaychecks = 1;
      document.getElementById('each').style.display = "none";
    } else {
        document.getElementById('each').style.display = "block";
    }
    
    //calculate total
    if (tipPercent != ""){
        //if user filled out the or % clear the option box
        document.getElementById('giving').value = "0";
        //do some math; using or % as tip/tithe percent
    var total = (paycheckAmount * tipPercent)/numPaychecks;
    total = Math.round(total*100)/100;
    total = total.toFixed(2); 
    }else{
        //do some math; basing amount on chosen option
    var total = (paycheckAmount * giving)/numPaychecks;
    total = Math.round(total*100)/100;
    total = total.toFixed(2);
    }
    //display the tip
    document.getElementById("totalTithe").style.display = "block";
    document.getElementById("tithe").innerHTML = total;
}
//close the error box
function okButton(){
 document.getElementById("message").style.display = "none";
}
//close the about box
function backButton(){
 document.getElementById("about").style.display = "none";
}
//open the about box
function aboutSite(){
     return document.getElementById("about").style.display = "block";
}

//hide the tip amount on load
document.getElementById("totalTithe").style.display = "none";
document.getElementById("each").style.display = "none";
document.getElementById("message").style.display = "none";
document.getElementById("about").style.display = "none";

//clicking the Let's Give button runs calculation function
document.getElementById("calculate").onclick = function(){
    calculateTip();
};
//clicking ok button runs okButton
document.getElementById("ok").onclick = function(){
    okButton();
};
//clicking back button runs backButton
document.getElementById("back").onclick = function(){
    backButton();
};
//clicking on the about link opens the about page
document.getElementById("aboutSite").onclick = function(){
    aboutSite();
};
