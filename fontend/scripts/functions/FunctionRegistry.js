/**
 * Function Registry Class
 * Registers and manages all mathematical functions
 */
import { SinFunction } from './trigonometric/SinFunction.js';
import { CosFunction } from './trigonometric/CosFunction.js';
import { TanFunction } from './trigonometric/TanFunction.js';
import { AsinFunction } from './trigonometric/AsinFunction.js';
import { AcosFunction } from './trigonometric/AcosFunction.js';
import { AtanFunction } from './trigonometric/AtanFunction.js';
import { LogFunction } from './logarithmic/LogFunction.js';
import { LnFunction } from './logarithmic/LnFunction.js';
import { ExpFunction } from './exponential/ExpFunction.js';
import { SqrtFunction } from './algebraic/SqrtFunction.js';
import { FactorialFunction } from './algebraic/FactorialFunction.js';
import { PermutationFunction } from './descrete/PermutationFunction.js';
import { CombinationFunction } from './descrete/CombinationFunction.js';
import { GCDFunction } from './descrete/GCDFunction.js';
import { LCMFunction } from './descrete/LCMFunction.js';
import { ModFunction } from './descrete/ModFunction.js';
import { PrimeFunction } from './descrete/PrimeFunction.js';
import { BinomialFunction } from './descrete/BinomialFunction.js';

export class FunctionRegistry {
    constructor() {
        this.functions = new Map();
        this.registerDefaultFunctions();
    }

    /**
     * Register default functions
     */
    registerDefaultFunctions() {
        // Trigonometric
        this.register(new SinFunction());
        this.register(new CosFunction());
        this.register(new TanFunction());
        this.register(new AsinFunction());
        this.register(new AcosFunction());
        this.register(new AtanFunction());
        
        // Logarithmic
        this.register(new LogFunction());
        this.register(new LnFunction());
        
        // Exponential
        this.register(new ExpFunction());
        
        // Algebraic
        this.register(new SqrtFunction());
        this.register(new FactorialFunction());
        
        // Discrete Mathematics
        this.register(new PermutationFunction());
        this.register(new CombinationFunction());
        this.register(new GCDFunction());
        this.register(new LCMFunction());
        this.register(new ModFunction());
        this.register(new PrimeFunction());
        this.register(new BinomialFunction());
    }

    /**
     * Register a function
     */
    register(func) {
        this.functions.set(func.getName(), func);
    }

    /**
     * Replace functions in expression with their implementations
     */
    replaceFunctions(expr) {
        let result = expr;
        for (const [name, func] of this.functions) {
            result = func.replaceInExpression(result);
        }
        return result;
    }

    /**
     * Get function by name
     */
    getFunction(name) {
        return this.functions.get(name);
    }

    /**
     * Get all registered functions
     */
    getAllFunctions() {
        return Array.from(this.functions.values());
    }
}
