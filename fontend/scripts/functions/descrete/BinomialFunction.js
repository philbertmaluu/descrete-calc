import { BaseFunction } from '../BaseFunction.js';

/**
 * Binomial Coefficient Function
 * Same as combination, but with binomial notation
 * Returns C(n,k) = n! / (k! * (n-k)!)
 */
export class BinomialFunction extends BaseFunction {
    constructor() {
        super('binomial', null);
    }

    replaceInExpression(expr) {
        while (expr.includes('binomial(')) {
            expr = expr.replace(/binomial\(([^,]+),([^)]+)\)/g, (match, nStr, kStr) => {
                try {
                    const n = Math.round(Function('"use strict"; return (' + nStr + ')')());
                    const k = Math.round(Function('"use strict"; return (' + kStr + ')')());
                    
                    if (isNaN(n) || isNaN(k) || n < 0 || k < 0 || k > n) return 'NaN';
                    if (n > 170) return 'NaN';
                    
                    // Use symmetry and optimized calculation
                    if (k > n - k) k = n - k;
                    
                    let result = 1;
                    for (let i = 0; i < k; i++) {
                        result = result * (n - i) / (i + 1);
                    }
                    return Math.round(result).toString();
                } catch (e) {
                    return 'NaN';
                }
            });
        }
        return expr;
    }
}
