import { BaseFunction } from '../BaseFunction.js';

/**
 * Permutation Function P(n,r)
 * Calculates number of ways to arrange r items from n items
 * Formula: P(n,r) = n! / (n-r)!
 */
export class PermutationFunction extends BaseFunction {
    constructor() {
        super('permutation', null);
    }

    replaceInExpression(expr) {
        while (expr.includes('permutation(')) {
            // Match permutation(n,r) or P(n,r)
            expr = expr.replace(/permutation\(([^,]+),([^)]+)\)/g, (match, nStr, rStr) => {
                try {
                    const n = Math.round(Function('"use strict"; return (' + nStr + ')')());
                    const r = Math.round(Function('"use strict"; return (' + rStr + ')')());
                    
                    if (isNaN(n) || isNaN(r) || n < 0 || r < 0 || r > n) return 'NaN';
                    if (n > 170) return 'NaN'; // Prevent overflow
                    
                    let result = 1;
                    for (let i = n; i > n - r; i--) {
                        result *= i;
                    }
                    return result.toString();
                } catch (e) {
                    return 'NaN';
                }
            });
            
            // Also handle P(n,r) format
            expr = expr.replace(/P\(([^,]+),([^)]+)\)/g, (match, nStr, rStr) => {
                try {
                    const n = Math.round(Function('"use strict"; return (' + nStr + ')')());
                    const r = Math.round(Function('"use strict"; return (' + rStr + ')')());
                    
                    if (isNaN(n) || isNaN(r) || n < 0 || r < 0 || r > n) return 'NaN';
                    if (n > 170) return 'NaN';
                    
                    let result = 1;
                    for (let i = n; i > n - r; i--) {
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
