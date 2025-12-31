/**
 * Button Configuration
 * Defines all calculator buttons and their properties
 */
export const ButtonConfig = {
    buttons: [
        // Row 1: Scientific Functions
        { type: 'function', label: 'sin', action: 'sin', class: 'function' },
        { type: 'function', label: 'cos', action: 'cos', class: 'function' },
        { type: 'function', label: 'tan', action: 'tan', class: 'function' },
        { type: 'function', label: 'log', action: 'log', class: 'function' },
        { type: 'function', label: 'ln', action: 'ln', class: 'function' },
        
        // Row 2: More Scientific Functions
        { type: 'function', label: 'sin⁻¹', action: 'asin', class: 'function' },
        { type: 'function', label: 'acos', action: 'acos', class: 'function' },
        { type: 'function', label: 'atan', action: 'atan', class: 'function' },
        { type: 'function', label: 'x^y', action: 'power', class: 'function' },
        { type: 'function', label: '√', action: 'sqrt', class: 'function' },
        
        // Row 3: Constants and Operations
        { type: 'constant', label: 'π', action: 'π', class: 'constant' },
        { type: 'constant', label: 'e', action: 'e', class: 'constant' },
        { type: 'operator', label: '(', action: '(', class: 'operator' },
        { type: 'operator', label: ')', action: ')', class: 'operator' },
        { type: 'clear', label: 'C', action: 'clear', class: 'clear' },
        
        // Row 4: Numbers and Basic Operations
        { type: 'number', label: '7', action: '7', class: 'number' },
        { type: 'number', label: '8', action: '8', class: 'number' },
        { type: 'number', label: '9', action: '9', class: 'number' },
        { type: 'operator', label: '/', action: '/', class: 'operator' },
        { type: 'operator', label: '%', action: '%', class: 'operator' },
        
        // Row 5
        { type: 'number', label: '4', action: '4', class: 'number' },
        { type: 'number', label: '5', action: '5', class: 'number' },
        { type: 'number', label: '6', action: '6', class: 'number' },
        { type: 'operator', label: '×', action: '*', class: 'operator' },
        { type: 'function', label: 'n!', action: 'factorial', class: 'function' },
        
        // Row 6
        { type: 'number', label: '1', action: '1', class: 'number' },
        { type: 'number', label: '2', action: '2', class: 'number' },
        { type: 'number', label: '3', action: '3', class: 'number' },
        { type: 'operator', label: '-', action: '-', class: 'operator' },
        { type: 'function', label: 'e^x', action: 'exp', class: 'function' },
        
        // Row 7
        { type: 'number', label: '0', action: '0', class: 'number zero' },
        { type: 'number', label: '.', action: '.', class: 'number' },
        { type: 'equals', label: '=', action: 'calculate', class: 'equals' },
        { type: 'operator', label: '+', action: '+', class: 'operator' },
        { type: 'clear', label: '⌫', action: 'delete', class: 'clear' },
        
        // Row 8: Discrete Mathematics Functions
        { type: 'function', label: 'P', action: 'permutation', class: 'function', title: 'Permutation P(n,r)' },
        { type: 'function', label: 'C', action: 'combination', class: 'function', title: 'Combination C(n,r)' },
        { type: 'function', label: 'GCD', action: 'gcd', class: 'function', title: 'Greatest Common Divisor' },
        { type: 'function', label: 'LCM', action: 'lcm', class: 'function', title: 'Least Common Multiple' },
        { type: 'function', label: 'mod', action: 'mod', class: 'function', title: 'Modulo mod(a,b)' }
    ]
};
