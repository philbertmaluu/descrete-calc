#!/bin/bash

# Database Setup Script
# This script creates the calculator database

echo "Creating calculator database..."
echo ""

# Read database credentials (defaults provided)
read -p "MySQL username [root]: " DB_USER
DB_USER=${DB_USER:-root}

read -sp "MySQL password: " DB_PASS
echo ""

# Run SQL script
mysql -u "$DB_USER" -p"$DB_PASS" < "$(dirname "$0")/setup.sql"

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Database created successfully!"
else
    echo ""
    echo "❌ Error creating database. Please check your MySQL credentials."
    exit 1
fi
