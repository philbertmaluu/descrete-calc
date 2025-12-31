import { BaseFunction } from '../BaseFunction.js';

/**
 * Modulo Function
 * Calculates a mod b (remainder when a is divided by b)
 */
export class ModFunction extends BaseFunction {
    constructor() {
        super('mod', null);
    }

    replaceInExpression(expr) {
        while (expr.includes('mod(')) {
            expr = expr.replace(/mod\(([^,]+),([^)]+)\)/g, (match, aStr, bStr) => {
                try {
                    const a = Function('"use strict"; return (' + aStr + ')')();
                    const b = Function('"use strict"; return (' + bStr + ')')();
                    
                    if (isNaN(a) || isNaN(b) || b === 0) return 'NaN';
                    
                    const result = ((a % b) + b) % b; // Handles negative numbers correctly
                    return result.toString();
                } catch (e) {
                    return 'NaN';
                }
            });
        }
        return expr;
    }
}
