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
        this.operator = operator;
        this.previousResult = this.currentResult;
        this.currentResult = '';

    }
    //Take values selected + compute a result
    compute(){

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




/* Possible Improvements:
-Add more functions
-Allow a user to click the . button once 
*/