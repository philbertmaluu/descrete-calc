/**
 * Base Function Class
 * Abstract base class for all mathematical functions
 */
export class BaseFunction {
    constructor(name, mathFunction) {
        this.name = name;
        this.mathFunction = mathFunction;
    }

    /**
     * Get function name
     */
    getName() {
        return this.name;
    }

    /**
     * Get Math function reference
     */
    getMathFunction() {
        return this.mathFunction;
    }

    /**
     * Replace function in expression
     * Override in subclasses for custom behavior
     */
    replaceInExpression(expr) {
        return expr.replace(
            new RegExp(this.name + '\\(', 'g'),
            this.mathFunction + '('
        );
    }
}
