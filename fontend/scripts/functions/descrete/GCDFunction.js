import { BaseFunction } from '../BaseFunction.js';

/**
 * GCD Function (Greatest Common Divisor)
 * Calculates the greatest common divisor of two numbers
 */
export class GCDFunction extends BaseFunction {
    constructor() {
        super('gcd', null);
    }

    replaceInExpression(expr) {
        while (expr.includes('gcd(')) {
            expr = expr.replace(/gcd\(([^,]+),([^)]+)\)/g, (match, aStr, bStr) => {
                try {
                    const a = Math.round(Function('"use strict"; return (' + aStr + ')')());
                    const b = Math.round(Function('"use strict"; return (' + bStr + ')')());
                    
                    if (isNaN(a) || isNaN(b)) return 'NaN';
                    if (a === 0 && b === 0) return 'NaN';
                    
                    // Euclidean algorithm
                    let x = Math.abs(a);
                    let y = Math.abs(b);
                    
                    while (y !== 0) {
                        const temp = y;
                        y = x % y;
                        x = temp;
                    }
                    
                    return x.toString();
                } catch (e) {
                    return 'NaN';
                }
            });
        }
        return expr;
    }
}
