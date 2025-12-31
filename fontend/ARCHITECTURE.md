# Architecture Documentation

## Class Diagram Overview

```
Calculator (Core)
├── DisplayManager (UI)
├── InputHandler (Handler)
│   ├── OperatorChecker (Util)
│   └── ConstantProvider (Service)
├── ExpressionEvaluator (Service)
│   ├── FunctionRegistry (Registry)
│   │   ├── BaseFunction (Abstract)
│   │   ├── SinFunction, CosFunction, TanFunction (Trigonometric)
│   │   ├── AsinFunction, AcosFunction, AtanFunction (Inverse Trigonometric)
│   │   ├── LogFunction, LnFunction (Logarithmic)
│   │   ├── ExpFunction (Exponential)
│   │   └── SqrtFunction, FactorialFunction (Algebraic)
│   └── ConstantProvider (Service)
└── KeyboardHandler (Service)
```

## File Structure with Responsibilities

### Core (`/core/`)
- **Calculator.js**: Main orchestrator, coordinates all operations

### Handlers (`/handlers/`)
- **InputHandler.js**: Validates and processes all user input

### UI (`/ui/`)
- **DisplayManager.js**: Manages display updates
- **ButtonFactory.js**: Creates buttons dynamically from config

### Services (`/services/`)
- **ExpressionEvaluator.js**: Evaluates mathematical expressions
- **ConstantProvider.js**: Provides mathematical constants
- **KeyboardHandler.js**: Handles keyboard events

### Functions (`/functions/`)
Each function has a dedicated file following the pattern:
- Extends `BaseFunction`
- Implements `replaceInExpression()` if needed
- Registered in `FunctionRegistry`

#### Trigonometric Functions
- `SinFunction.js`, `CosFunction.js`, `TanFunction.js`
- `AsinFunction.js`, `AcosFunction.js`, `AtanFunction.js`

#### Logarithmic Functions
- `LogFunction.js`, `LnFunction.js`

#### Exponential Functions
- `ExpFunction.js`

#### Algebraic Functions
- `SqrtFunction.js`, `FactorialFunction.js`

### Utils (`/utils/`)
- **OperatorChecker.js**: Validates operators

### Config (`/config/`)
- **ButtonConfig.js**: Button definitions and layout

## Design Principles Applied

1. **Single Responsibility**: Each class has one clear purpose
2. **Open/Closed**: Open for extension (new functions), closed for modification
3. **Dependency Inversion**: Depend on abstractions (BaseFunction)
4. **Interface Segregation**: Small, focused interfaces
5. **DRY (Don't Repeat Yourself)**: Base classes reduce duplication

## Extension Points

### Adding a New Function
1. Create class extending `BaseFunction`
2. Register in `FunctionRegistry.registerDefaultFunctions()`
3. Add to `ButtonConfig.buttons`

### Adding a New Service
1. Create class in `/services/`
2. Import and use in `Calculator.js` or relevant class

### Adding a New Constant
1. Add to `ConstantProvider.constants`
2. Add button to `ButtonConfig.buttons`

### Adding a New UI Component
1. Create class in `/ui/`
2. Use in `Calculator.js` or `ButtonFactory.js`

## Data Flow

```
User Input
    ↓
InputHandler (validates)
    ↓
Calculator (processes)
    ↓
ExpressionEvaluator (evaluates)
    ↓
FunctionRegistry (resolves functions)
    ↓
Individual Function Classes (transform)
    ↓
JavaScript Evaluation
    ↓
DisplayManager (displays result)
```

