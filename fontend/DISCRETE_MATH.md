# Discrete Mathematics Functions

The calculator now supports discrete mathematics operations. All functions are implemented as dedicated classes following the OOP architecture.

## Available Discrete Math Functions

### 1. Permutation - P(n,r)
**Usage**: `P(5,3)` or `permutation(5,3)`
**Formula**: P(n,r) = n! / (n-r)!
**Example**: P(5,3) = 60 (ways to arrange 3 items from 5 items)

### 2. Combination - C(n,r)
**Usage**: `C(5,3)` or `combination(5,3)`
**Formula**: C(n,r) = n! / (r! * (n-r)!)
**Example**: C(5,3) = 10 (ways to choose 3 items from 5 items)

### 3. Greatest Common Divisor - GCD
**Usage**: `gcd(48,18)`
**Returns**: Largest number that divides both a and b
**Example**: gcd(48,18) = 6

### 4. Least Common Multiple - LCM
**Usage**: `lcm(12,18)`
**Formula**: LCM(a,b) = |a*b| / GCD(a,b)
**Example**: lcm(12,18) = 36

### 5. Modulo - mod
**Usage**: `mod(17,5)` or use `%` operator
**Returns**: Remainder when a is divided by b
**Example**: mod(17,5) = 2

### 6. Prime Check - isPrime
**Usage**: `isPrime(17)`
**Returns**: 1 if prime, 0 if not
**Example**: isPrime(17) = 1, isPrime(15) = 0

### 7. Binomial Coefficient
**Usage**: `binomial(5,3)`
**Same as**: C(5,3) or combination(5,3)
**Example**: binomial(5,3) = 10

## Examples

### Permutations and Combinations
```
P(10,3) = 720
C(10,3) = 120
```

### Number Theory
```
gcd(56,42) = 14
lcm(12,18) = 36
mod(23,7) = 2
isPrime(29) = 1
```

### Complex Expressions
```
gcd(48,18) + lcm(6,8) = 54
P(5,2) * C(5,3) = 200
```

## File Structure

All discrete math functions are located in:
```
fontend/scripts/functions/descrete/
├── PermutationFunction.js
├── CombinationFunction.js
├── GCDFunction.js
├── LCMFunction.js
├── ModFunction.js
├── PrimeFunction.js
├── BinomialFunction.js
└── sets.js (prepared for future set operations)
```

## Implementation Details

- Each function extends `BaseFunction` class
- Custom evaluation logic for multi-parameter functions
- Proper error handling for invalid inputs
- Optimized algorithms (e.g., Euclidean algorithm for GCD)

## Future Enhancements

- Set operations (union, intersection, difference)
- Graph theory functions
- Boolean algebra operations
- More number theory functions (totient, divisors, etc.)

## Usage Tips

1. **Two-parameter functions**: Use comma to separate parameters
   - Example: `gcd(48,18)` ✓
   - Not: `gcd(48 18)` ✗

2. **Combining with other functions**: All functions can be combined
   - Example: `gcd(48,18) + lcm(6,8)`

3. **Button shortcuts**: Use calculator buttons for quick input
   - P button → `permutation(`
   - C button → `combination(`
   - GCD button → `gcd(`
   - LCM button → `lcm(`
   - mod button → `mod(`

