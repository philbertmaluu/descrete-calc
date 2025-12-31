<?php
/**
 * Calculation Service
 * Handles all calculation-related database operations
 */

require_once __DIR__ . '/../database/db.php';

class CalculationService {
    private $db;

    public function __construct() {
        $database = new Database();
        $database->connect();
        $this->db = $database->getConnection();
    }

    /**
     * Save a calculation to the database
     */
    public function saveCalculation($expression, $result) {
        try {
            $stmt = $this->db->prepare("INSERT INTO calculations (expression, result) VALUES (?, ?)");
            $stmt->bind_param("ss", $expression, $result);
            
            if ($stmt->execute()) {
                return [
                    'success' => true,
                    'id' => $this->db->insert_id,
                    'message' => 'Calculation saved successfully'
                ];
            } else {
                throw new Exception("Error saving calculation: " . $stmt->error);
            }
        } catch (Exception $e) {
            error_log("Save calculation error: " . $e->getMessage());
            return [
                'success' => false,
                'message' => $e->getMessage()
            ];
        }
    }

    /**
     * Get all calculations
     */
    public function getAllCalculations($limit = 100, $offset = 0) {
        try {
            $stmt = $this->db->prepare("SELECT id, expression, result, created_at FROM calculations ORDER BY created_at DESC LIMIT ? OFFSET ?");
            $stmt->bind_param("ii", $limit, $offset);
            $stmt->execute();
            $result = $stmt->get_result();
            
            $calculations = [];
            while ($row = $result->fetch_assoc()) {
                $calculations[] = $row;
            }
            
            return [
                'success' => true,
                'data' => $calculations,
                'count' => count($calculations)
            ];
        } catch (Exception $e) {
            error_log("Get calculations error: " . $e->getMessage());
            return [
                'success' => false,
                'message' => $e->getMessage(),
                'data' => []
            ];
        }
    }

    /**
     * Get calculation by ID
     */
    public function getCalculationById($id) {
        try {
            $stmt = $this->db->prepare("SELECT id, expression, result, created_at FROM calculations WHERE id = ?");
            $stmt->bind_param("i", $id);
            $stmt->execute();
            $result = $stmt->get_result();
            
            if ($row = $result->fetch_assoc()) {
                return [
                    'success' => true,
                    'data' => $row
                ];
            } else {
                return [
                    'success' => false,
                    'message' => 'Calculation not found'
                ];
            }
        } catch (Exception $e) {
            error_log("Get calculation error: " . $e->getMessage());
            return [
                'success' => false,
                'message' => $e->getMessage()
            ];
        }
    }

    /**
     * Delete a calculation by ID
     */
    public function deleteCalculation($id) {
        try {
            $stmt = $this->db->prepare("DELETE FROM calculations WHERE id = ?");
            $stmt->bind_param("i", $id);
            
            if ($stmt->execute()) {
                return [
                    'success' => true,
                    'message' => 'Calculation deleted successfully'
                ];
            } else {
                throw new Exception("Error deleting calculation: " . $stmt->error);
            }
        } catch (Exception $e) {
            error_log("Delete calculation error: " . $e->getMessage());
            return [
                'success' => false,
                'message' => $e->getMessage()
            ];
        }
    }

    /**
     * Get calculation statistics
     */
    public function getStatistics() {
        try {
            $stats = [];
            
            // Total calculations
            $result = $this->db->query("SELECT COUNT(*) as total FROM calculations");
            $stats['total'] = $result->fetch_assoc()['total'];
            
            // Today's calculations
            $result = $this->db->query("SELECT COUNT(*) as total FROM calculations WHERE DATE(created_at) = CURDATE()");
            $stats['today'] = $result->fetch_assoc()['total'];
            
            // This week's calculations
            $result = $this->db->query("SELECT COUNT(*) as total FROM calculations WHERE WEEK(created_at) = WEEK(NOW())");
            $stats['this_week'] = $result->fetch_assoc()['total'];
            
            return [
                'success' => true,
                'data' => $stats
            ];
        } catch (Exception $e) {
            error_log("Get statistics error: " . $e->getMessage());
            return [
                'success' => false,
                'message' => $e->getMessage()
            ];
        }
    }
}
?>
