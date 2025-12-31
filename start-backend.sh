#!/bin/bash

# Start PHP Built-in Server for Calculator Backend
# This script starts the PHP server on port 8001

echo "🚀 Starting Calculator Backend Server..."
echo ""
echo "Server will run at: http://localhost:8001"
echo "API endpoint: http://localhost:8001/api/calculations.php"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

cd "$(dirname "$0")/backend"
php -S localhost:8001 server.php
