import { BaseFunction } from '../BaseFunction.js';

/**
 * Prime Check Function
 * Returns 1 if number is prime, 0 if not
 */
export class PrimeFunction extends BaseFunction {
    constructor() {
        super('isPrime', null);
    }

    replaceInExpression(expr) {
        while (expr.includes('isPrime(')) {
            expr = expr.replace(/isPrime\(([^)]+)\)/g, (match, nStr) => {
                try {
                    const n = Math.round(Function('"use strict"; return (' + nStr + ')')());
                    
                    if (isNaN(n) || n < 2) return '0';
                    if (n === 2) return '1';
                    if (n % 2 === 0) return '0';
                    
                    // Check for factors up to sqrt(n)
                    const sqrt = Math.sqrt(n);
                    for (let i = 3; i <= sqrt; i += 2) {
                        if (n % i === 0) return '0';
                    }
                    
                    return '1';
                } catch (e) {
                    return 'NaN';
                }
            });
        }
        return expr;
    }
}
