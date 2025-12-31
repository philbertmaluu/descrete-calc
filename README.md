# Scientific Calculator Application

A modern, feature-rich scientific calculator built with vanilla JavaScript, PHP backend, and MySQL database. This application features a clean black and white design with gradient accents, comprehensive mathematical functions, and automatic calculation history storage.

![Calculator Interface](fontend/public/images/calc.png)

## ✨ Features

### Core Functionality
- **Basic Arithmetic Operations**: Addition, Subtraction, Multiplication, Division, Percentage
- **Scientific Functions**: Trigonometric, Logarithmic, Exponential, Algebraic operations
- **Discrete Mathematics**: Permutations, Combinations, GCD, LCM, Modulo, Prime checking
- **Constants**: Pi (π) and Euler's number (e)
- **Keyboard Support**: Full keyboard input support
- **Calculation History**: Automatic saving to MySQL database

### Mathematical Functions

#### Trigonometric Functions
- `sin`, `cos`, `tan` - Basic trigonometric functions
- `sin⁻¹`, `acos`, `atan` - Inverse trigonometric functions

#### Logarithmic Functions
- `log` - Base 10 logarithm
- `ln` - Natural logarithm (base e)

#### Exponential Functions
- `exp` (e^x) - Exponential function
- `x^y` - Power function

#### Algebraic Functions
- `√` - Square root
- `n!` - Factorial

#### Discrete Mathematics
- `P(n,r)` - Permutations
- `C(n,r)` - Combinations
- `GCD(a,b)` - Greatest Common Divisor
- `LCM(a,b)` - Least Common Multiple
- `mod(a,b)` - Modulo operation
- `isPrime(n)` - Prime number checking
- `binomial(n,k)` - Binomial coefficient

## 🏗️ Architecture

This application follows a modular, maintainable architecture with separation of concerns:

```
calculator/
├── fontend/                      # Frontend application
│   ├── connections/              # API connection layer
│   │   └── ApiConnection.js     # Backend API client
│   ├── css/                      # Stylesheets
│   │   └── main.css             # Main stylesheet
│   ├── scripts/                  # JavaScript modules
│   │   ├── core/                # Core calculator logic
│   │   │   └── Calculator.js    # Main Calculator class
│   │   ├── handlers/            # Input handlers
│   │   │   └── InputHandler.js
│   │   ├── services/            # Business logic services
│   │   │   ├── ExpressionEvaluator.js
│   │   │   ├── ConstantProvider.js
│   │   │   └── KeyboardHandler.js
│   │   ├── ui/                  # UI components
│   │   │   ├── DisplayManager.js
│   │   │   └── ButtonFactory.js
│   │   ├── functions/           # Mathematical functions
│   │   │   ├── trigonometric/   # Trig functions (11 files)
│   │   │   ├── logarithmic/     # Log functions (2 files)
│   │   │   ├── exponential/     # Exp functions (1 file)
│   │   │   ├── algebraic/       # Algebraic functions (2 files)
│   │   │   └── descrete/        # Discrete math (7 files)
│   │   ├── utils/               # Utility classes
│   │   │   ├── OperatorChecker.js
│   │   │   └── SetOperations.js
│   │   ├── config/              # Configuration
│   │   │   └── ButtonConfig.js
│   │   └── main.js              # Application entry point
│   ├── pages/                   # HTML pages
│   │   └── calculator.html
│   ├── public/                  # Public assets
│   │   └── images/
│   │       └── calc.png
│   └── index.html               # Main entry point
│
└── backend/                      # PHP backend API
    ├── api/                     # API endpoints
    │   └── calculations.php     # Calculations REST API
    ├── database/                # Database layer
    │   ├── db.php              # Database connection
    │   ├── setup.sql           # Database schema
    │   └── create_db.sh        # Setup script
    ├── services/                # Business logic
    │   └── CalculationService.php
    ├── config.php              # Configuration
    ├── server.php              # PHP server router
    └── .htaccess               # Apache configuration
```

## 🚀 Quick Start

### Prerequisites

- **PHP 7.4+** (with MySQL extension)
- **MySQL/MariaDB**
- **Modern web browser** (Chrome, Firefox, Safari, Edge)

### Installation

1. **Clone or download the project**
   ```bash
   cd calculator
   ```

2. **Setup Database**
   ```bash
   # Option 1: Automatic (recommended)
   cd backend/database
   ./create_db.sh
   
   # Option 2: Manual
   mysql -u root -p < backend/database/setup.sql
   ```

3. **Configure Database** (if needed)
   Edit `backend/config.php`:
   ```php
   define('DB_HOST', 'localhost');
   define('DB_USER', 'root');
   define('DB_PASSWORD', 'your_password');
   define('DB_NAME', 'calculator_db');
   ```

### Running the Application

#### Start Backend Server

```bash
# Option 1: Using the script
./start-backend.sh

# Option 2: Manual start
cd backend
php -S localhost:8001 server.php
```

Backend will run on: **http://localhost:8001**

#### Start Frontend Server

```bash
# Option 1: Using PHP
cd fontend
php -S localhost:8080

# Option 2: Using Python
cd fontend
python3 -m http.server 8080
```

Frontend will run on: **http://localhost:8080**

### Access the Application

Open your browser and navigate to:
- **Calculator**: http://localhost:8080/index.html
- **API Test**: http://localhost:8001/api/calculations.php?stats=1

## 📖 Usage Guide

### Basic Calculations

1. Click number buttons or type numbers on keyboard
2. Click operation buttons (+, -, ×, /)
3. Press `=` or `Enter` to calculate
4. Result is automatically saved to database

### Scientific Functions

**Trigonometric:**
- Click `sin`, `cos`, or `tan` buttons
- Enter value: `sin(30)` → calculates sin(30)

**Logarithms:**
- Use `log` for base 10
- Use `ln` for natural logarithm

**Powers and Roots:**
- Use `x^y` for exponentiation: `2^3` = 8
- Use `√` for square root: `sqrt(16)` = 4

### Discrete Mathematics

**Permutations and Combinations:**
- `P(10,3)` - Number of ways to arrange 3 items from 10
- `C(10,3)` - Number of ways to choose 3 items from 10

**Number Theory:**
- `gcd(48,18)` - Greatest common divisor
- `lcm(12,18)` - Least common multiple
- `mod(17,5)` - Modulo operation
- `isPrime(17)` - Check if number is prime

### Keyboard Shortcuts

- **Numbers**: `0-9`
- **Operators**: `+`, `-`, `*`, `/`, `%`
- **Calculate**: `Enter` or `=`
- **Clear**: `Escape` or `C`
- **Delete**: `Backspace`
- **Parentheses**: `(`, `)`

## 🔌 API Documentation

### Base URL
```
http://localhost:8001/api
```

### Endpoints

#### Save Calculation
```http
POST /calculations.php
Content-Type: application/json

{
  "expression": "2 + 2",
  "result": "4"
}
```

**Response:**
```json
{
  "success": true,
  "id": 1,
  "message": "Calculation saved successfully"
}
```

#### Get All Calculations
```http
GET /calculations.php?limit=100&offset=0
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "expression": "2 + 2",
      "result": "4",
      "created_at": "2024-01-01 12:00:00"
    }
  ],
  "count": 1
}
```

#### Get Calculation by ID
```http
GET /calculations.php?id=1
```

#### Get Statistics
```http
GET /calculations.php?stats=1
```

**Response:**
```json
{
  "success": true,
  "data": {
    "total": 100,
    "today": 10,
    "this_week": 50
  }
}
```

#### Delete Calculation
```http
DELETE /calculations.php?id=1
```

## 🗄️ Database Schema

### Database: `calculator_db`

### Table: `calculations`

| Column      | Type        | Description                    |
|-------------|-------------|--------------------------------|
| id          | INT         | Primary key, auto-increment    |
| expression  | VARCHAR(500)| The calculation expression     |
| result      | VARCHAR(500)| The calculation result         |
| created_at  | TIMESTAMP   | When the record was created    |
| updated_at  | TIMESTAMP   | When the record was updated    |

### Database Queries

**View all calculations:**
```sql
SELECT * FROM calculations ORDER BY created_at DESC;
```

**Get today's calculations:**
```sql
SELECT * FROM calculations WHERE DATE(created_at) = CURDATE();
```

**Get statistics:**
```sql
SELECT 
    COUNT(*) as total,
    COUNT(CASE WHEN DATE(created_at) = CURDATE() THEN 1 END) as today,
    COUNT(CASE WHEN WEEK(created_at) = WEEK(NOW()) THEN 1 END) as this_week
FROM calculations;
```

## 🎨 Design Features

- **Black & White Theme**: Clean, minimalist design with gradient accents
- **Responsive Layout**: Works on desktop, tablet, and mobile devices
- **Modern UI**: Smooth transitions and hover effects
- **Accessible**: Keyboard navigation and clear visual feedback

## 🔧 Configuration

### Frontend API URL

Edit `fontend/connections/ApiConnection.js`:
```javascript
constructor(baseUrl = 'http://localhost:8001/api') {
    this.baseUrl = baseUrl;
}
```

### Database Configuration

Edit `backend/config.php`:
```php
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'calculator_db');
```

### Disable Backend Saving

Edit `fontend/scripts/core/Calculator.js`:
```javascript
this.saveToBackend = false; // Set to false to disable
```

## 🧪 Testing

### Test API Connection

```bash
# Save a test calculation
curl -X POST http://localhost:8001/api/calculations.php \
  -H "Content-Type: application/json" \
  -d '{"expression":"2+2","result":"4"}'

# Get all calculations
curl http://localhost:8001/api/calculations.php

# Get statistics
curl http://localhost:8001/api/calculations.php?stats=1
```

### Test Database

```bash
# Connect to database
mysql -u root calculator_db

# Check calculations
SELECT * FROM calculations ORDER BY id DESC LIMIT 10;
```

## 📁 Project Structure Details

### Frontend Architecture

- **Modular Design**: Each function has its own dedicated file
- **OOP Principles**: Classes for Calculator, Services, Handlers
- **Separation of Concerns**: UI, Logic, and Data layers separated
- **ES6 Modules**: Modern JavaScript module system

### Backend Architecture

- **RESTful API**: Clean API design following REST principles
- **Service Layer**: Business logic separated from API layer
- **Database Abstraction**: Database connection class for reusability
- **Error Handling**: Comprehensive error handling and logging

## 🐛 Troubleshooting

### Backend Not Saving Calculations

1. Check if backend server is running:
   ```bash
   curl http://localhost:8001/api/calculations.php?stats=1
   ```

2. Check browser console (F12) for errors

3. Verify database connection:
   ```bash
   mysql -u root -e "SELECT 1;"
   ```

4. Check PHP error logs

### CORS Errors

- CORS headers are already enabled in the API
- Ensure frontend and backend URLs are correct
- Check browser console for specific CORS messages

### Database Connection Failed

1. Verify MySQL is running:
   ```bash
   mysql -u root -e "SELECT 1;"
   ```

2. Check credentials in `backend/config.php`

3. Ensure database exists:
   ```bash
   mysql -u root -e "SHOW DATABASES LIKE 'calculator_db';"
   ```

### Buttons Not Working

1. Check browser console for JavaScript errors
2. Verify all JavaScript files are loading correctly
3. Check that ES6 modules are supported in your browser

## 🚀 Deployment

### Production Setup

1. **Update API URL** in `fontend/connections/ApiConnection.js`
2. **Configure Database** credentials in `backend/config.php`
3. **Set up Web Server** (Apache/Nginx) to serve PHP files
4. **Disable Error Display** in `backend/config.php`:
   ```php
   ini_set('display_errors', 0);
   ```
5. **Enable HTTPS** for secure connections
6. **Set up Database Backups**

### Apache Configuration

```apache
<VirtualHost *:80>
    ServerName calculator.example.com
    DocumentRoot /path/to/calculator
    
    <Directory /path/to/calculator>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```

## 📝 License

This project is open source and available for personal and educational use.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For issues, questions, or contributions, please open an issue on the project repository.

## 🎯 Future Enhancements

- [ ] Calculation history viewer UI
- [ ] Export calculations to CSV/JSON
- [ ] Multiple themes support
- [ ] Graph plotting capabilities
- [ ] Unit conversions
- [ ] Scientific notation display
- [ ] Calculation sharing
- [ ] User authentication
- [ ] Multiple calculation modes

---

**Built with ❤️ using Vanilla JavaScript, PHP, and MySQL**
