$(document).ready(function(){
    var displayFix = function(num) {
        if (num.length > 9) {
            total.text(num.substr(0,9));
        }
    };
    var number = "";
    var newNumber = "";
    var operator = "";
    var total = $(".display");
    total.text("0");

    $(".numbers span").not(".clear, .dot").click(function() {
        number += $(this).text();
        total.text(number);
        displayFix(number);
    });

    $(".dot").click(function() {
        if (number == "") {
            number = "0.";
        } else {
            number += $(this).text();
            total.text(number);
            displayFix(number);
        };
    });

    $(".operators span").not(".igual").click(function() {
        operator = $(this).text();
        newNumber = number;
        number = "";
        total.text("0");
    });

    $(".clear").click(function() {
        number = "";
        total.text("0");
        newNumber = "";
    });

    $(".igual").click(function() {
        if (operator === "+"){
            number = (parseFloat(newNumber,10) + parseFloat(number,10)).toString(10);
        } else if (operator === "-"){
            number = (parseFloat(newNumber,10) - parseFloat(number,10)).toString(10);
        } else if (operator === "/"){
            number = (parseFloat(newNumber,10) / parseFloat(number,10)).toString(10);
        } else if (operator === "*"){
            number = (parseFloat(newNumber,10) * parseFloat(number,10)).toString(10);
        }
        total.text(number);
        displayFix(number);
        number = "";
        newNumber = "";

    });
        $(document).keypress(function(event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode === 49) {
            $("#num1").click();
       } else if (keycode === 50) {
            $("#num2").click();
        } else if (keycode === 51) {
            $("#num3").click();
        } else if (keycode === 52) {
            $("#num4").click();
        } else if (keycode === 53) {
            $("#num5").click();
        } else if (keycode === 54) {
            $("#num6").click();
        } else if (keycode === 55) {
            $("#num7").click();
        } else if (keycode === 56) {
            $("#num8").click();
        } else if (keycode === 57) {
            $("#num9").click();
        } else if (keycode === 48) {
            $("#num0").click();
        } else if (keycode === 99 || keycode === 127 || keycode === 8) {
            $(".clear").click();
        } else if (keycode === 46) {
            $(".dot").click();
        } else if (keycode === 61 || keycode === 13) {
            $(".igual").click();
        } else if (keycode === 43) {
            $("#plus").click();
        } else if (keycode === 45) {
            $("#minus").click();
        } else if (keycode === 42 || keycode === 120) {
            $("#multiply").click();
        } else if (keycode === 47) {
            $("#divide").click();
        }
    });
});