/**
 * Main Calculator Class
 * Orchestrates all calculator operations
 */
import { DisplayManager } from '../ui/DisplayManager.js';
import { InputHandler } from '../handlers/InputHandler.js';
import { ExpressionEvaluator } from '../services/ExpressionEvaluator.js';
import { KeyboardHandler } from '../services/KeyboardHandler.js';
import { ApiConnection } from '../../connections/ApiConnection.js';

export class Calculator {
    constructor() {
        this.displayManager = new DisplayManager();
        this.inputHandler = new InputHandler(this);
        this.evaluator = new ExpressionEvaluator();
        this.keyboardHandler = new KeyboardHandler(this);
        this.apiConnection = new ApiConnection();
        
        this.currentInput = '0';
        this.currentExpression = '';
        this.saveToBackend = true; // Enable/disable backend saving
    }

    /**
     * Initialize the calculator
     */
    init() {
        this.displayManager.update(this.currentInput, this.currentExpression);
        this.keyboardHandler.attach();
    }

    /**
     * Handle input value
     */
    appendValue(value) {
        this.currentInput = this.inputHandler.appendValue(this.currentInput, value);
        this.updateDisplay();
    }

    /**
     * Handle function input
     */
    inputFunction(funcName) {
        this.currentInput = this.inputHandler.inputFunction(this.currentInput, funcName);
        this.updateDisplay();
    }

    /**
     * Handle power operation
     */
    inputPower() {
        this.currentInput = this.inputHandler.inputPower(this.currentInput);
        this.updateDisplay();
    }

    /**
     * Handle constant input
     */
    inputConstant(constant) {
        this.currentInput = this.inputHandler.inputConstant(this.currentInput, constant);
        this.updateDisplay();
    }

    /**
     * Calculate the result
     */
    async calculate() {
        try {
            this.currentExpression = this.currentInput;
            const result = this.evaluator.evaluate(this.currentInput);
            
            if (result !== null && !isNaN(result) && isFinite(result)) {
                const formattedResult = this.formatResult(result);
                this.currentInput = formattedResult;
                this.updateDisplay();
                
                // Save to backend if enabled
                if (this.saveToBackend) {
                    this.saveCalculationToBackend(this.currentExpression, formattedResult);
                }
            } else {
                throw new Error('Invalid expression');
            }
        } catch (error) {
            this.showError();
        }
    }

    /**
     * Save calculation to backend
     */
    async saveCalculationToBackend(expression, result) {
        try {
            const response = await this.apiConnection.saveCalculation(expression, result);
            if (response.success) {
                console.log('Calculation saved to backend:', response);
            } else {
                console.warn('Failed to save calculation:', response.message);
            }
        } catch (error) {
            console.error('Error saving calculation to backend:', error);
            // Don't interrupt user flow if backend save fails
        }
    }

    /**
     * Clear the display
     */
    clear() {
        this.currentInput = '0';
        this.currentExpression = '';
        this.updateDisplay();
    }

    /**
     * Delete last character
     */
    deleteLast() {
        this.currentInput = this.inputHandler.deleteLast(this.currentInput);
        this.updateDisplay();
    }

    /**
     * Format result for display
     */
    formatResult(result) {
        let resultStr = result.toString();
        if (resultStr.includes('.')) {
            resultStr = resultStr.replace(/\.?0+$/, '');
        }
        return resultStr;
    }

    /**
     * Update display
     */
    updateDisplay() {
        this.displayManager.update(this.currentInput, this.currentExpression);
    }

    /**
     * Show error message
     */
    showError() {
        this.displayManager.showError();
        setTimeout(() => {
            this.clear();
        }, 1500);
    }
}
