const operandButton = document.querySelectorAll('.operand');
const operatorButton = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');
const allClearButton = document.querySelector('.all-clear');
const previousResultTextElement = document.querySelector('.previous-result');
const currentResultTextElement = document.querySelector('.current-result');



class Calculator {
    //set text elements inside calculator class
    constructor(previousResultTextElement, currentResultTextElement) {
        this.previousResultTextElement = previousResultTextElement;
        this.currentResultTextElement = currentResultTextElement;
        //default the calculator
        this.allClear();
    }
    //clears everything
    allClear() {
        this.previousResult = '';
        this.currentResult = '';
        this.operator = '';
    }
    //clears the current element
    clear(){

    }
    //Add a number to the screen once clicked
    appendNumber(operand){
        this.currentResult = this.currentResult.toString() + operand.toString();
    }
    //Add an operator to the screen 
    chooseOperator(operator){
        if (this.currentResult == '') return //disallow user to enter in an operator if nothing to operate on
        if (this.previousResult !=='') {
            this.compute();
        }
        this.operator = operator;
        this.previousResult = this.currentResult;
        this.currentResult = '';

    }
    //Take values selected + compute a result
    compute(){
        let computation;
        const prev = parseFloat(this.previousResult); //convert to int
        const current = parseFloat(this.currentResult);
        if (isNaN(prev) || isNaN(current)) return;
        switch(this.operator) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case 'x':
                computation = prev * current;
                break;
            case '÷':
                computation = prev / current;
                break;
            default:
                return
        }
        this.currentResult = computation;
        this.operator = undefined;
        this.previousResult = '';

    }
    //updates values inside output
    updateDisplay(){
        this.currentResultTextElement.innerText = this.currentResult;
        this.previousResultTextElement.innerText = this.previousResult;
    }
}
//Create a calculator object
const calculator = new Calculator(previousResultTextElement, currentResultTextElement)

//Whenever a button is clicked -> do these things
operandButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

operatorButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperator(button.innerText);
        calculator.updateDisplay();
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
})




/* Possible Improvements:
-Allow keyboard input
-Add more functions
-Allow a user to click the . button once 
*/