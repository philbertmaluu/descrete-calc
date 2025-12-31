/**
 * Constant Provider Class
 * Provides mathematical constants
 */
export class ConstantProvider {
    constructor() {
        this.constants = {
            'π': Math.PI,
            'pi': Math.PI,
            'e': Math.E
        };
    }

    /**
     * Get constant value
     */
    getConstant(name) {
        return this.constants[name] || null;
    }

    /**
     * Add new constant
     */
    addConstant(name, value) {
        this.constants[name] = value;
    }

    /**
     * Get all constants
     */
    getAll() {
        return { ...this.constants };
    }
}
