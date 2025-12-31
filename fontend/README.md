# Scientific Calculator - Advanced Architecture

A modern, maintainable, and expandable scientific calculator built with OOP principles and modular architecture.

## Project Structure

```
calculator/
├── fontend/
│   ├── css/
│   │   └── main.css                    # Main stylesheet
│   ├── pages/
│   │   └── calculator.html             # Calculator page (alternative entry)
│   └── scripts/
│       ├── main.js                     # Application entry point
│       ├── core/
│       │   └── Calculator.js           # Main Calculator class (orchestrator)
│       ├── handlers/
│       │   └── InputHandler.js         # Input handling logic
│       ├── ui/
│       │   ├── DisplayManager.js       # Display management
│       │   └── ButtonFactory.js        # Dynamic button creation
│       ├── services/
│       │   ├── ExpressionEvaluator.js  # Expression evaluation service
│       │   ├── ConstantProvider.js     # Mathematical constants provider
│       │   └── KeyboardHandler.js      # Keyboard input handler
│       ├── functions/
│       │   ├── BaseFunction.js         # Base class for all functions
│       │   ├── FunctionRegistry.js     # Function registration system
│       │   ├── trigonometric/
│       │   │   ├── SinFunction.js
│       │   │   ├── CosFunction.js
│       │   │   ├── TanFunction.js
│       │   │   ├── AsinFunction.js
│       │   │   ├── AcosFunction.js
│       │   │   └── AtanFunction.js
│       │   ├── logarithmic/
│       │   │   ├── LogFunction.js
│       │   │   └── LnFunction.js
│       │   ├── exponential/
│       │   │   └── ExpFunction.js
│       │   └── algebraic/
│       │       ├── SqrtFunction.js
│       │       └── FactorialFunction.js
│       ├── utils/
│       │   └── OperatorChecker.js      # Operator validation utility
│       └── config/
│           └── ButtonConfig.js         # Button configuration
├── backend/                             # Backend services (for future expansion)
│   ├── database/
│   ├── logics/
│   └── services/
├── index.html                           # Main entry point
└── README.md                            # This file
```

## Architecture Overview

### Design Patterns Used

1. **OOP (Object-Oriented Programming)**: Core classes for Calculator, InputHandler, DisplayManager, etc.
2. **Factory Pattern**: ButtonFactory for creating buttons dynamically
3. **Registry Pattern**: FunctionRegistry for managing mathematical functions
4. **Provider Pattern**: ConstantProvider for mathematical constants
5. **Modular Architecture**: Each function has its own dedicated file

### Key Components

#### Core Classes

- **Calculator**: Main orchestrator class that coordinates all calculator operations
- **InputHandler**: Handles all input operations and validations
- **DisplayManager**: Manages display updates and error messages
- **ExpressionEvaluator**: Evaluates mathematical expressions

#### Services

- **ConstantProvider**: Provides mathematical constants (π, e)
- **KeyboardHandler**: Handles keyboard input events
- **FunctionRegistry**: Registers and manages all mathematical functions

#### Functions

Each mathematical function is a separate class extending `BaseFunction`:
- Trigonometric: sin, cos, tan, asin, acos, atan
- Logarithmic: log, ln
- Exponential: exp
- Algebraic: sqrt, factorial

### Adding New Functions

To add a new function, follow these steps:

1. Create a new file in the appropriate category folder (or create a new category):
   ```javascript
   // fontend/scripts/functions/your-category/YourFunction.js
   import { BaseFunction } from '../BaseFunction.js';
   
   export class YourFunction extends BaseFunction {
       constructor() {
           super('yourfunc', 'Math.yourFunction');
       }
   }
   ```

2. Register it in `FunctionRegistry.js`:
   ```javascript
   import { YourFunction } from './your-category/YourFunction.js';
   
   registerDefaultFunctions() {
       // ... existing functions
       this.register(new YourFunction());
   }
   ```

3. Add button configuration in `ButtonConfig.js`:
   ```javascript
   { type: 'function', label: 'Your Func', action: 'yourfunc', class: 'function' }
   ```

### Adding New Constants

1. Add constant in `ConstantProvider.js`:
   ```javascript
   this.constants = {
       'π': Math.PI,
       'e': Math.E,
       'yourConstant': YourValue
   };
   ```

2. Add button configuration in `ButtonConfig.js`

### Benefits of This Architecture

1. **Maintainability**: Each function is isolated in its own file
2. **Expandability**: Easy to add new functions, constants, or features
3. **Testability**: Each class can be tested independently
4. **Separation of Concerns**: UI, logic, and services are clearly separated
5. **Code Reusability**: Base classes and utilities can be reused
6. **Scalability**: Structure supports future features (history, themes, plugins, etc.)

## Usage

1. Open `index.html` in a modern browser (ES6 modules support required)
2. Use buttons or keyboard to perform calculations
3. All functions are available via the UI

## Browser Compatibility

Requires a modern browser with ES6 module support:
- Chrome 61+
- Firefox 60+
- Safari 11+
- Edge 16+

## Future Enhancements

The architecture supports easy addition of:
- Calculation history
- Multiple themes
- Custom functions
- Unit conversions
- Graph plotting
- Export/import functionality
- Backend API integration

