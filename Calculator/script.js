var buttons = document.querySelectorAll('.calculator span');
var operators = ['+', '-', '*', '/'];
var decimal = false;

for (var i = 0; i < buttons.length; i++) {
	buttons[i].onclick = function(e) {
		var input = document.querySelector('.screen');
		var inputValue = input.innerHTML;
		var buttonValue = this.innerHTML;

		if (buttonValue == 'C') {
			input.innerHTML = '';
			decimal = false;
		}
		else if (buttonValue == '=') {
			var equation = inputValue;
			var lastNumber = equation[equation.length - 1];
			if (operators.indexOf(lastNumber) > -1 || lastNumber == '.') {
				equation = equation.replace(/.$/, '');
			
			if(equation)
				input.innerHTML = eval(equation);
				
			decimal = false;
		}
		else if(operators.indexOf(buttonValue) > -1) {
			
			var lastNumber = inputValue[inputValue.length - 1];
			
			if(inputValue != '' && operators.indexOf(lastNumber) == -1) 
				input.innerHTML += buttonValue;
			
			
			else if(inputValue == '' && buttonValue == '-') 
				input.innerHTML += buttonValue;
			
			
			if(operators.indexOf(lastChar) > -1 && inputValue.length > 1) {
				input.innerHTML = inputValue.replace(/.$/, buttonValue);
			}
			
			decimal =false;
		}	