function calculator() {
  var displayFix = function(num) {
    if (num.length > 9) {
      total.innerHTML = num.substr(0, 9);
    }
  };
  var number = "";
  var newNumber = "";
  var operator = "";
  var total = document.getElementsByClassName("display");
  total.innerHTML = "0";

  var insertNumber = document.querySelector(".numbers span");
  for (var i = insertNumber.length; i--;) {
    if (insertNumber[i].className != 'clear' && insertNumber[i].className != 'dot') {
      var arg = insertNumber[i].innerHTML;
      insertNumber[i].onclick = function(arg) {
        return function() { 
          number += arg;
          total.innerHTML = number;
          displayFix(number);
        };
      };
    }
  }

  var insertDecimal = document.querySelector(".dot");
  insertDecimal.onclick = function() {
    if (number.length == 0) {
      number = "0.";
    } else {
      number += insertDecimal.innerHTML;
      total.innerHTML = number;
      displayFix(number);
    };
  };

  var insertOperator = document.querySelector(".operators span");

  for (var i = insertOperator.length; i--;) {
    if (insertOperator[i].className != 'igual') {
      var arg = insertOperator[i].innerHTML;
      insertOperator[i].onclick = function(arg) {
        return function() { 
          operator = arg;
          newNumber = number;
          number = "";
          total.innerHTML = "0";
        };
      };
    }
  }

  
  document.querySelector(".clear").onclick = function() {
    number = "";
    total.innerHTML = "0";
    newNumber = "";
  };


  document.querySelector(".igual").onclick = function() {
    if (operator === "+") {
      number = (parseFloat(newNumber, 10) + parseFloat(number, 10)).toString(10);
    } else if (operator === "-") {
      number = (parseFloat(newNumber, 10) - parseFloat(number, 10)).toString(10);
    } else if (operator === "/") {
      number = (parseFloat(newNumber, 10) / parseFloat(number, 10)).toString(10);
    } else if (operator === "*") {
      number = (parseFloat(newNumber, 10) * parseFloat(number, 10)).toString(10);
    }
    total.innerHTML = number;
    displayFix(number);
    number = "";
    newNumber = "";
  };

  document.querySelector(".igual").onkeypress = function(event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    var elm = "";
    if (keycode === 49) {
      elm = document.getElementById("num1");
      elm.onclick.apply(elm);
    } else if (keycode === 50) {
      elm = document.getElementById("num2");
      elm.onclick.apply(elm);
    } else if (keycode === 51) {
      elm = document.getElementById("num3");
      elm.onclick.apply(elm);
    }
  };
};