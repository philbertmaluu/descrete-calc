/**
 * Operator Checker Utility
 * Checks if a character is an operator
 */
export class OperatorChecker {
    constructor() {
        this.operators = ['+', '-', '*', '/', '%', '^'];
    }

    /**
     * Check if character is operator
     */
    isOperator(char) {
        return this.operators.includes(char);
    }

    /**
     * Get all operators
     */
    getOperators() {
        return [...this.operators];
    }

    /**
     * Add custom operator
     */
    addOperator(op) {
        if (!this.operators.includes(op)) {
            this.operators.push(op);
        }
    }
}
