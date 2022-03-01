function disableDates(date) {
    if (date.getDay() == 3)
        return [false];
}


$(document).ready(function() {

    $("#dateAndTime").datepicker(
        {
            maxDate: "+2M"
        }
    );

});

function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /^(\([-+]?[0-9]+)\)$/;
    if (filter.test(a) || String(a).length == 10) {
        
        return true;
    }
    else {
        return false;
    }
}
function validateCard(cardNum){
    var a = document.getElementById(cardNum).value;
    var filter = /^(\([-+]?[0-9]+)\)$/;
    if (filter.test(a) || String(a).length == 16) {
        return true;
    }
    else {
        return false;
    }
}
function validateCVV(cvv){
    var a = document.getElementById(cvv).value;
    var filter = /^(\([-+]?[0-9]+)\)$/;
    if (filter.test(a) || String(a).length == 3) {
        return true;
    }
    else {
        return false;
    }
}
function validateExpDate(expdate){
    var a = document.getElementById(expdate).value;
    var filter = /^(\([-+]?[0-9]+)\)$/;
    if (filter.test(a) || String(a).length == 6) {
        return true;
    }
    else {
        return false;
    }
}

$(document).ready(function(){

    $("#phone").on("change", function(){
        if (!validatePhone("phone")){
            alert("Invalid phone number. Phone must be a 10 digit number.");
            $("#phone").val("1234567890");
            $("#phone").addClass("error");
        }
        else {
            $("#phone").removeClass("error");
        }
    });

    $("#debit").on("change", function(){
        if (!validateCard("debit")){
            alert("Invalid card number. Phone must be a 16 digit number.");
            $("#debit").val("1111111111111111");
            $("#debit").addClass("error");
        }
        else {
            $("#debit").removeClass("error");
        }
    });
    $("#expdate").on("change", function(){
        if (!validateCVV("expdate")){
            alert("Invalid card number. Phone must be a 6 digit number.");
            $("#expdate").val("042026");
            $("#expdate").addClass("error");
        }
        else {
            $("#cvv").removeClass("error");
        }
    });
    $("#cvv").on("change", function(){
        if (!validateCVV("cvv")){
            alert("Invalid card number. Phone must be a 3 digit number.");
            $("#cvv").val("123");
            $("#cvv").addClass("error");
        }
        else {
            $("#cvv").removeClass("error");
        }
    });


    // Look at the different events on which an action can be performed
    // https://www.w3schools.com/jquery/jquery_events.asp
    // Here, we put 
    $("#debit").on("mouseenter", function(){
        $("#debit").addClass("showInput");
    });

    $("#debit").on("mouseleave", function(){
        $("#debit").removeClass("showInput");
    });
  
    // https://jqueryui.com/tooltip/ 
    // The class "highlight" used here is predefined in JQuery UI
    // the message of the tooltip is encoded in the input (in the HTML file)
    $("#debit").tooltip({
        classes: {
          "ui-tooltip": "highlight"
        }
      });


});