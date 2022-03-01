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