/**
 * Display Manager Class
 * Manages all display-related operations
 */
export class DisplayManager {
    constructor() {
        this.displayElement = document.getElementById('display');
        this.expressionElement = document.getElementById('expression');
    }

    /**
     * Update display with current input and expression
     */
    update(currentInput, currentExpression) {
        if (this.displayElement) {
            this.displayElement.textContent = currentInput;
        }
        if (this.expressionElement) {
            this.expressionElement.textContent = currentExpression;
        }
    }

    /**
     * Show error message
     */
    showError() {
        if (this.displayElement) {
            this.displayElement.textContent = 'Error';
        }
    }

    /**
     * Clear display
     */
    clear() {
        this.update('0', '');
    }
}
