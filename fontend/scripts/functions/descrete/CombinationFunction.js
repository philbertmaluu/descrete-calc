import { BaseFunction } from '../BaseFunction.js';

/**
 * Combination Function C(n,r) or nCr
 * Calculates number of ways to choose r items from n items
 * Formula: C(n,r) = n! / (r! * (n-r)!)
 */
export class CombinationFunction extends BaseFunction {
    constructor() {
        super('combination', null);
    }

    replaceInExpression(expr) {
        while (expr.includes('combination(') || expr.includes('C(')) {
            // Match combination(n,r) or C(n,r)
            expr = expr.replace(/combination\(([^,]+),([^)]+)\)/g, (match, nStr, rStr) => {
                try {
                    const n = Math.round(Function('"use strict"; return (' + nStr + ')')());
                    const r = Math.round(Function('"use strict"; return (' + rStr + ')')());
                    
                    if (isNaN(n) || isNaN(r) || n < 0 || r < 0 || r > n) return 'NaN';
                    if (n > 170) return 'NaN'; // Prevent overflow
                    
                    // Use optimized calculation
                    if (r > n - r) r = n - r; // Use symmetry
                    
                    let result = 1;
                    for (let i = 0; i < r; i++) {
                        result = result * (n - i) / (i + 1);
                    }
                    return Math.round(result).toString();
                } catch (e) {
                    return 'NaN';
                }
            });
            
            // Also handle C(n,r) format
            expr = expr.replace(/C\(([^,]+),([^)]+)\)/g, (match, nStr, rStr) => {
                try {
                    const n = Math.round(Function('"use strict"; return (' + nStr + ')')());
                    const r = Math.round(Function('"use strict"; return (' + rStr + ')')());
                    
                    if (isNaN(n) || isNaN(r) || n < 0 || r < 0 || r > n) return 'NaN';
                    if (n > 170) return 'NaN';
                    
                    if (r > n - r) r = n - r;
                    
                    let result = 1;
                    for (let i = 0; i < r; i++) {
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
