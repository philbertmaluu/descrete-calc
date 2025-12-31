/**
 * Input Handler Class
 * Handles all input operations and validations
 */
import { OperatorChecker } from '../utils/OperatorChecker.js';
import { ConstantProvider } from '../services/ConstantProvider.js';

export class InputHandler {
    constructor(calculator) {
        this.calculator = calculator;
        this.operatorChecker = new OperatorChecker();
        this.constantProvider = new ConstantProvider();
    }

    /**
     * Append value to current input
     */
    appendValue(currentInput, value) {
        if (currentInput === '0' && value !== '.') {
            return value;
        }
        return currentInput + value;
    }

    /**
     * Handle function input
     */
    inputFunction(currentInput, funcName) {
        if (currentInput !== '0' && 
            !this.operatorChecker.isOperator(currentInput.slice(-1)) && 
            currentInput.slice(-1) !== '(') {
            currentInput += '*';
        }
        return currentInput + funcName + '(';
    }

    /**
     * Handle power operation
     */
    inputPower(currentInput) {
        if (currentInput !== '0' && 
            !this.operatorChecker.isOperator(currentInput.slice(-1)) && 
            currentInput.slice(-1) !== '(') {
            return currentInput + '^';
        }
        return currentInput + '^';
    }

    /**
     * Handle constant input
     */
    inputConstant(currentInput, constant) {
        const value = this.constantProvider.getConstant(constant);
        if (currentInput !== '0' && 
            !this.operatorChecker.isOperator(currentInput.slice(-1)) && 
            currentInput.slice(-1) !== '(') {
            currentInput += '*';
        }
        return currentInput + value.toString();
    }

    /**
     * Delete last character
     */
    deleteLast(currentInput) {
        if (currentInput.length > 1) {
            return currentInput.slice(0, -1);
        }
        return '0';
    }
}
