# Calculator Backend API

PHP backend API for storing calculation history using MySQL database.

## Setup Instructions

### 1. Database Setup

1. Make sure MySQL/MariaDB is installed and running
2. Update database credentials in `config.php` or set environment variables:
   - `DB_HOST` (default: localhost)
   - `DB_USER` (default: root)
   - `DB_PASSWORD` (default: empty)
   - `DB_NAME` (default: calculator_db)

### 2. PHP Setup

1. Ensure PHP 7.4+ is installed
2. Enable required PHP extensions:
   ```bash
   # On Ubuntu/Debian
   sudo apt-get install php-mysqli
   
   # On macOS (Homebrew)
   brew install php
   ```

3. Configure your web server (Apache/Nginx) to point to the backend directory

### 3. Apache Configuration

If using Apache, add this to your `.htaccess` or `httpd.conf`:

```apache
<VirtualHost *:80>
    DocumentRoot /path/to/calculator/backend
    ServerName calculator.local
    
    <Directory /path/to/calculator/backend>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```

### 4. Database Schema

The database and table will be created automatically on first API call. However, you can also create it manually:

```sql
CREATE DATABASE IF NOT EXISTS calculator_db;

USE calculator_db;

CREATE TABLE IF NOT EXISTS calculations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    expression VARCHAR(500) NOT NULL,
    result VARCHAR(500) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

## API Endpoints

### POST /api/calculations.php
Save a new calculation

**Request Body:**
```json
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

### GET /api/calculations.php
Get all calculations

**Query Parameters:**
- `limit` (optional): Number of results (default: 100)
- `offset` (optional): Offset for pagination (default: 0)

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

### GET /api/calculations.php?id={id}
Get a specific calculation by ID

**Response:**
```json
{
    "success": true,
    "data": {
        "id": 1,
        "expression": "2 + 2",
        "result": "4",
        "created_at": "2024-01-01 12:00:00"
    }
}
```

### GET /api/calculations.php?stats=1
Get calculation statistics

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

### DELETE /api/calculations.php?id={id}
Delete a calculation by ID

**Response:**
```json
{
    "success": true,
    "message": "Calculation deleted successfully"
}
```

## Frontend Integration

The frontend `ApiConnection.js` class is already integrated with the Calculator class. Calculations are automatically saved after successful evaluations.

To change the API base URL, update the `ApiConnection` constructor in `fontend/connections/ApiConnection.js`:

```javascript
const apiConnection = new ApiConnection('http://your-domain.com/calculator/backend/api');
```

## Testing

Test the API using curl:

```bash
# Save a calculation
curl -X POST http://localhost/calculator/backend/api/calculations.php \
  -H "Content-Type: application/json" \
  -d '{"expression":"2+2","result":"4"}'

# Get all calculations
curl http://localhost/calculator/backend/api/calculations.php

# Get statistics
curl http://localhost/calculator/backend/api/calculations.php?stats=1
```

## File Structure

```
backend/
├── api/
│   └── calculations.php       # API endpoint
├── database/
│   └── db.php                 # Database connection class
├── services/
│   └── CalculationService.php # Business logic
├── config.php                 # Configuration
├── .htaccess                  # Apache configuration
└── README.md                  # This file
```
