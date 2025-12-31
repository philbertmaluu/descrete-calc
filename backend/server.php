<?php
/**
 * PHP Built-in Server Router
 * Use this file to run the backend API with PHP's built-in server
 * 
 * Usage: php -S localhost:8001 server.php
 * Then access API at: http://localhost:8001/api/calculations.php
 */

// Get the request URI
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

// Route API requests
if (preg_match('#^/api/#', $uri)) {
    // Remove /api prefix and route to api directory
    $file = __DIR__ . str_replace('/api', '/api', $uri);
    
    if (file_exists($file) && is_file($file)) {
        return false; // Serve the requested file
    }
}

// Default: serve index or return 404
http_response_code(404);
echo json_encode(['error' => 'Not Found']);
