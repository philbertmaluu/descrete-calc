/**
 * Keyboard Handler Service
 * Handles keyboard input events
 */
export class KeyboardHandler {
    constructor(calculator) {
        this.calculator = calculator;
        this.keyMap = {
            '0': () => calculator.appendValue('0'),
            '1': () => calculator.appendValue('1'),
            '2': () => calculator.appendValue('2'),
            '3': () => calculator.appendValue('3'),
            '4': () => calculator.appendValue('4'),
            '5': () => calculator.appendValue('5'),
            '6': () => calculator.appendValue('6'),
            '7': () => calculator.appendValue('7'),
            '8': () => calculator.appendValue('8'),
            '9': () => calculator.appendValue('9'),
            '.': () => calculator.appendValue('.'),
            '+': () => calculator.appendValue('+'),
            '-': () => calculator.appendValue('-'),
            '*': () => calculator.appendValue('*'),
            '/': () => calculator.appendValue('/'),
            '(': () => calculator.appendValue('('),
            ')': () => calculator.appendValue(')'),
            '%': () => calculator.appendValue('%'),
            'Enter': () => calculator.calculate(),
            '=': () => calculator.calculate(),
            'Escape': () => calculator.clear(),
            'c': () => calculator.clear(),
            'C': () => calculator.clear(),
            'Backspace': () => calculator.deleteLast()
        };
    }

    /**
     * Attach keyboard event listener
     */
    attach() {
        document.addEventListener('keydown', (e) => this.handleKeyPress(e));
    }

    /**
     * Handle key press event
     */
    handleKeyPress(event) {
        const key = event.key;
        const handler = this.keyMap[key];
        
        if (handler) {
            if (key === 'Enter' || key === '=' || key === 'Backspace') {
                event.preventDefault();
            }
            handler();
        }
    }

    /**
     * Add custom key mapping
     */
    addKeyMapping(key, handler) {
        this.keyMap[key] = handler;
    }
}
