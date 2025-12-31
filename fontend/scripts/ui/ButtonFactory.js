/**
 * Button Factory Class
 * Creates calculator buttons dynamically
 */
export class ButtonFactory {
    constructor(calculator) {
        this.calculator = calculator;
    }

    /**
     * Create button element from config
     */
    createButton(buttonConfig) {
        const button = document.createElement('button');
        button.className = `btn ${buttonConfig.class}`;
        button.textContent = buttonConfig.label;
        if (buttonConfig.title) {
            button.title = buttonConfig.title; // Tooltip for discrete math functions
        }
        button.addEventListener('click', () => this.handleButtonClick(buttonConfig));
        return button;
    }

    /**
     * Handle button click
     */
    handleButtonClick(config) {
        switch (config.type) {
            case 'number':
            case 'operator':
                this.calculator.appendValue(config.action);
                break;
            case 'function':
                if (config.action === 'power') {
                    this.calculator.inputPower();
                } else {
                    this.calculator.inputFunction(config.action);
                }
                break;
            case 'constant':
                this.calculator.inputConstant(config.action);
                break;
            case 'clear':
                if (config.action === 'clear') {
                    this.calculator.clear();
                } else if (config.action === 'delete') {
                    this.calculator.deleteLast();
                }
                break;
            case 'equals':
                this.calculator.calculate();
                break;
        }
    }

    /**
     * Create all buttons from config
     */
    createButtons(buttonConfigs, container) {
        buttonConfigs.forEach(config => {
            const button = this.createButton(config);
            container.appendChild(button);
        });
    }
}
