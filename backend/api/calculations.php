<?php
/**
 * Calculations API Endpoint
 * Handles HTTP requests for calculation operations
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once __DIR__ . '/../services/CalculationService.php';

$method = $_SERVER['REQUEST_METHOD'];
$service = new CalculationService();

try {
    switch ($method) {
        case 'POST':
            // Save a new calculation
            $data = json_decode(file_get_contents('php://input'), true);
            
            if (!isset($data['expression']) || !isset($data['result'])) {
                http_response_code(400);
                echo json_encode([
                    'success' => false,
                    'message' => 'Missing required fields: expression and result'
                ]);
                exit();
            }
            
            $result = $service->saveCalculation($data['expression'], $data['result']);
            
            if ($result['success']) {
                http_response_code(201);
            } else {
                http_response_code(500);
            }
            
            echo json_encode($result);
            break;

        case 'GET':
            // Get calculations
            if (isset($_GET['id'])) {
                // Get single calculation by ID
                $id = intval($_GET['id']);
                $result = $service->getCalculationById($id);
                
                if ($result['success']) {
                    http_response_code(200);
                } else {
                    http_response_code(404);
                }
                
                echo json_encode($result);
            } else if (isset($_GET['stats'])) {
                // Get statistics
                $result = $service->getStatistics();
                http_response_code(200);
                echo json_encode($result);
            } else {
                // Get all calculations
                $limit = isset($_GET['limit']) ? intval($_GET['limit']) : 100;
                $offset = isset($_GET['offset']) ? intval($_GET['offset']) : 0;
                
                $result = $service->getAllCalculations($limit, $offset);
                http_response_code(200);
                echo json_encode($result);
            }
            break;

        case 'DELETE':
            // Delete a calculation
            if (!isset($_GET['id'])) {
                http_response_code(400);
                echo json_encode([
                    'success' => false,
                    'message' => 'Missing required parameter: id'
                ]);
                exit();
            }
            
            $id = intval($_GET['id']);
            $result = $service->deleteCalculation($id);
            
            if ($result['success']) {
                http_response_code(200);
            } else {
                http_response_code(500);
            }
            
            echo json_encode($result);
            break;

        default:
            http_response_code(405);
            echo json_encode([
                'success' => false,
                'message' => 'Method not allowed'
            ]);
            break;
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Server error: ' . $e->getMessage()
    ]);
}
?>
