$(document).ready(function(){
    var displayFix = function(number) {
        if (number.length > 9) {
            totaldiv.text(number.substr(number.length-9,9));
        } 
    };
    var number = "";
    var newnumber = "";
    var operator = "";
    var totaldiv = $(".display");
    totaldiv.text("0");
    $(".numbers span").not(".clear").click(function(){
        number += $(this).text();
        totaldiv.text(number);
        displayFix(number);
    });
    $(".operators span").not(".igual").click(function(){
        operator = $(this).text();
        newnumber = number;
        number = "";
        totaldiv.text("0");
    });
    $(".clear").click(function(){
        number = "";
        totaldiv.text("0");
        if ($(this).attr("id") === "clearall") {
            newnumber = "";
        }
    });
    $(".igual").click(function(){
        if (operator === "+"){
            number = (parseInt(number, 10) + parseInt(newnumber,10)).toString(10);
        } else if (operator === "-"){
            number = (parseInt(newnumber, 10) - parseInt(number,10)).toString(10);
        } else if (operator === "/"){
            number = (parseInt(newnumber, 10) / parseInt(number,10)).toString(10);
        } else if (operator === "*"){
            number = (parseInt(newnumber, 10) * parseInt(number,10)).toString(10);
        }
        totaldiv.text(number);
        displayFix(number);
        number = "";
        newnumber = "";
    });
});