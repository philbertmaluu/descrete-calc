# Calculator Setup Instructions

## Backend Configuration Complete ✅

The backend is now configured to automatically save calculations to the database when you press the equals (=) button.

## Quick Start

### 1. Start the Backend Server

Run the backend server using one of these methods:

**Option A: Using the script (Recommended)**
```bash
./start-backend.sh
```

**Option B: Manual start**
```bash
cd backend
php -S localhost:8001 server.php
```

The backend will run on: `http://localhost:8001`

### 2. Start the Frontend

**Option A: Using PHP server (if backend is running)**
```bash
cd fontend
php -S localhost:8080
```
Then open: `http://localhost:8080`

**Option B: Using Python (if you prefer)**
```bash
cd fontend
python3 -m http.server 8080
```

### 3. Test the Connection

1. Open the calculator in your browser
2. Perform a calculation (e.g., `2 + 2`)
3. Press the equals button (=)
4. Check the browser console (F12) - you should see: "Calculation saved to backend:"
5. Verify in database:
   ```bash
   mysql -u root calculator_db -e "SELECT * FROM calculations ORDER BY id DESC LIMIT 5;"
   ```

## How It Works

When you press the **equals (=)** button:

1. Calculator evaluates the expression
2. If successful, it automatically calls `saveCalculationToBackend()`
3. The expression and result are sent to: `http://localhost:8001/api/calculations.php`
4. PHP API saves it to MySQL database
5. Success/error is logged in browser console

## API Configuration

- **Backend URL**: `http://localhost:8001/api`
- **Database**: `calculator_db`
- **Table**: `calculations`

If you need to change the backend URL, edit:
`fontend/connections/ApiConnection.js` line 6

## Database Verification

Check saved calculations:
```sql
-- Connect to database
mysql -u root calculator_db

-- View all calculations
SELECT * FROM calculations ORDER BY created_at DESC;

-- Count total calculations
SELECT COUNT(*) as total FROM calculations;

-- Get today's calculations
SELECT * FROM calculations WHERE DATE(created_at) = CURDATE();
```

## Troubleshooting

### Backend not saving?
1. Check if backend server is running: `curl http://localhost:8001/api/calculations.php?stats=1`
2. Check browser console for errors (F12)
3. Verify database connection in `backend/config.php`
4. Check PHP error logs

### CORS Errors?
- The API already has CORS headers enabled
- Make sure you're accessing frontend from the same origin or update CORS settings

### Database Connection Failed?
- Verify MySQL is running: `mysql -u root -e "SELECT 1;"`
- Check credentials in `backend/config.php`
- Ensure database exists: `mysql -u root -e "SHOW DATABASES LIKE 'calculator_db';"`

## Files Structure

```
calculator/
├── backend/
│   ├── api/
│   │   └── calculations.php      # API endpoint
│   ├── database/
│   │   ├── db.php                # Database connection
│   │   └── setup.sql             # Database schema
│   ├── services/
│   │   └── CalculationService.php # Business logic
│   ├── server.php                # PHP server router
│   └── config.php                # Configuration
├── fontend/
│   ├── connections/
│   │   └── ApiConnection.js      # Frontend API client
│   └── scripts/
│       └── core/
│           └── Calculator.js     # Main calculator (saves on =)
└── start-backend.sh              # Backend startup script
```

Everything is ready! Just start the servers and start calculating! 🎉
