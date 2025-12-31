<?php
/**
 * Test API Endpoint
 * Simple test to verify the API is working
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

echo json_encode([
    'success' => true,
    'message' => 'API is running!',
    'timestamp' => date('Y-m-d H:i:s'),
    'endpoints' => [
        'POST /api/calculations.php' => 'Save a calculation',
        'GET /api/calculations.php' => 'Get all calculations',
        'GET /api/calculations.php?stats=1' => 'Get statistics',
        'DELETE /api/calculations.php?id={id}' => 'Delete a calculation'
    ]
]);
?>
