# Database Setup

## Quick Setup

The database and table will be created automatically when you first use the API. However, you can also create it manually using the SQL script.

## Manual Setup

### Option 1: Using MySQL Command Line

```bash
# Connect to MySQL
mysql -u root -p

# Run the setup script
source /path/to/calculator/backend/database/setup.sql

# Or copy and paste the SQL commands from setup.sql
```

### Option 2: Using phpMyAdmin

1. Open phpMyAdmin
2. Go to SQL tab
3. Copy and paste the contents of `setup.sql`
4. Click "Go"

### Option 3: Using MySQL Workbench

1. Open MySQL Workbench
2. Connect to your MySQL server
3. Open `setup.sql` file
4. Execute the script

## Verify Database

After creating the database, verify it was created correctly:

```sql
-- Check database exists
SHOW DATABASES LIKE 'calculator_db';

-- Use the database
USE calculator_db;

-- Check table exists
SHOW TABLES;

-- View table structure
DESCRIBE calculations;

-- Check if table is empty
SELECT COUNT(*) FROM calculations;
```

## Database Structure

### Database: `calculator_db`

### Table: `calculations`

| Column      | Type        | Null | Key | Default           | Extra                         |
|-------------|-------------|------|-----|-------------------|-------------------------------|
| id          | INT         | NO   | PRI | NULL              | AUTO_INCREMENT                |
| expression  | VARCHAR(500)| NO   |     | NULL              |                               |
| result      | VARCHAR(500)| NO   |     | NULL              |                               |
| created_at  | TIMESTAMP   | YES  | MUL | CURRENT_TIMESTAMP |                               |
| updated_at  | TIMESTAMP   | YES  |     | CURRENT_TIMESTAMP | ON UPDATE CURRENT_TIMESTAMP   |

## Default Configuration

If you haven't configured custom database credentials, the default settings are:
- **Host**: localhost
- **User**: root
- **Password**: (empty)
- **Database**: calculator_db

Update these in `backend/config.php` if needed.
