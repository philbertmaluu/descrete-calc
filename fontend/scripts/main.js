/**
 * Main Entry Point
 * Initializes the calculator application
 */
import { Calculator } from './core/Calculator.js';
import { ButtonFactory } from './ui/ButtonFactory.js';
import { ButtonConfig } from './config/ButtonConfig.js';

// Initialize calculator when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Create calculator instance
    const calculator = new Calculator();
    
    // Initialize calculator
    calculator.init();
    
    // Create button factory
    const buttonFactory = new ButtonFactory(calculator);
    
    // Get buttons container
    const buttonsContainer = document.querySelector('.buttons');
    
    // Clear existing buttons (if any)
    buttonsContainer.innerHTML = '';
    
    // Create all buttons from config
    buttonFactory.createButtons(ButtonConfig.buttons, buttonsContainer);
    
    // Make calculator available globally for debugging (optional)
    window.calculator = calculator;
});
