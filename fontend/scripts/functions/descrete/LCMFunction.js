import { BaseFunction } from '../BaseFunction.js';

/**
 * LCM Function (Least Common Multiple)
 * Calculates the least common multiple of two numbers
 * Formula: LCM(a,b) = |a*b| / GCD(a,b)
 */
export class LCMFunction extends BaseFunction {
    constructor() {
        super('lcm', null);
    }

    replaceInExpression(expr) {
        while (expr.includes('lcm(')) {
            expr = expr.replace(/lcm\(([^,]+),([^)]+)\)/g, (match, aStr, bStr) => {
                try {
                    const a = Math.round(Function('"use strict"; return (' + aStr + ')')());
                    const b = Math.round(Function('"use strict"; return (' + bStr + ')')());
                    
                    if (isNaN(a) || isNaN(b)) return 'NaN';
                    if (a === 0 || b === 0) return '0';
                    
                    // Calculate GCD first
                    let x = Math.abs(a);
                    let y = Math.abs(b);
                    const originalX = x;
                    const originalY = y;
                    
                    while (y !== 0) {
                        const temp = y;
                        y = x % y;
                        x = temp;
                    }
                    
                    const gcd = x;
                    const lcm = Math.abs(originalX * originalY) / gcd;
                    
                    return lcm.toString();
                } catch (e) {
                    return 'NaN';
                }
            });
        }
        return expr;
    }
}
