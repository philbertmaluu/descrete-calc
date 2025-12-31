/**
 * Expression Evaluator Class
 * Handles expression evaluation with modular function support
 */
import { FunctionRegistry } from '../functions/FunctionRegistry.js';
import { ConstantProvider } from './ConstantProvider.js';

export class ExpressionEvaluator {
    constructor() {
        this.functionRegistry = new FunctionRegistry();
        this.constantProvider = new ConstantProvider();
    }

    /**
     * Evaluate mathematical expression
     */
    evaluate(expr) {
        try {
            // Replace constants
            expr = this.replaceConstants(expr);
            
            // Handle percentage
            expr = this.handlePercentage(expr);
            
            // Replace ^ with ** for exponentiation
            expr = expr.replace(/\^/g, '**');
            
            // Replace functions
            expr = this.functionRegistry.replaceFunctions(expr);
            
            // Evaluate the expression
            const result = Function('"use strict"; return (' + expr + ')')();
            
            // Format result to avoid floating point precision issues
            if (typeof result === 'number') {
                if (Math.abs(result) < 1e-15) return 0;
                return Math.round(result * 1e10) / 1e10;
            }
            return result;
        } catch (e) {
            return null;
        }
    }

    /**
     * Replace constants in expression
     */
    replaceConstants(expr) {
        expr = expr.replace(/π/g, this.constantProvider.getConstant('π').toString());
        expr = expr.replace(/e(?![0-9x(])/g, this.constantProvider.getConstant('e').toString());
        return expr;
    }

    /**
     * Handle percentage - convert % to /100
     */
    handlePercentage(expr) {
        return expr.replace(/(\d+(?:\.\d+)?)%/g, '($1/100)');
    }
}
