import { BaseFunction } from '../BaseFunction.js';

/**
 * Factorial Function
 * Handles factorial operation with custom evaluation
 */
export class FactorialFunction extends BaseFunction {
    constructor() {
        super('factorial', null);
    }

    /**
     * Replace factorial function in expression
     * Factorial requires special handling
     */
    replaceInExpression(expr) {
        while (expr.includes('factorial(')) {
            expr = expr.replace(/factorial\(([^()]+)\)/g, (match, innerExpr) => {
                try {
                    // Evaluate inner expression first
                    const innerResult = Function('"use strict"; return (' + innerExpr + ')')();
                    if (innerResult === null || isNaN(innerResult)) return 'NaN';
                    
                    const n = Math.round(innerResult);
                    if (n < 0 || n > 170) return 'NaN'; // Limit to prevent overflow
                    
                    let result = 1;
                    for (let i = 2; i <= n; i++) {
                        result *= i;
                    }
                    return result.toString();
                } catch (e) {
                    return 'NaN';
                }
            });
        }
        return expr;
    }
}
