<?php
/**
 * MySQL Database Connection
 * Handles database connection and configuration
 */

class Database {
    private $host;
    private $user;
    private $password;
    private $database;
    private $connection;

    public function __construct() {
        $this->host = $_ENV['DB_HOST'] ?? 'localhost';
        $this->user = $_ENV['DB_USER'] ?? 'root';
        $this->password = $_ENV['DB_PASSWORD'] ?? '';
        $this->database = $_ENV['DB_NAME'] ?? 'calculator_db';
    }

    /**
     * Connect to MySQL database
     */
    public function connect() {
        try {
            // Create database if it doesn't exist
            $tempConnection = new mysqli($this->host, $this->user, $this->password);
            
            if ($tempConnection->connect_error) {
                throw new Exception("Connection failed: " . $tempConnection->connect_error);
            }
            
            $createDbQuery = "CREATE DATABASE IF NOT EXISTS `{$this->database}`";
            $tempConnection->query($createDbQuery);
            $tempConnection->close();
            
            // Connect to the database
            $this->connection = new mysqli($this->host, $this->user, $this->password, $this->database);
            
            if ($this->connection->connect_error) {
                throw new Exception("Connection failed: " . $this->connection->connect_error);
            }
            
            $this->connection->set_charset("utf8mb4");
            
            // Initialize schema
            $this->initializeSchema();
            
            return $this->connection;
        } catch (Exception $e) {
            error_log("Database connection error: " . $e->getMessage());
            throw $e;
        }
    }

    /**
     * Initialize database schema
     */
    private function initializeSchema() {
        $createTableQuery = "
            CREATE TABLE IF NOT EXISTS calculations (
                id INT AUTO_INCREMENT PRIMARY KEY,
                expression VARCHAR(500) NOT NULL,
                result VARCHAR(500) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                INDEX idx_created_at (created_at)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
        ";
        
        if ($this->connection->query($createTableQuery) === FALSE) {
            throw new Exception("Error creating table: " . $this->connection->error);
        }
    }

    /**
     * Get database connection
     */
    public function getConnection() {
        if (!$this->connection) {
            $this->connect();
        }
        return $this->connection;
    }

    /**
     * Close database connection
     */
    public function close() {
        if ($this->connection) {
            $this->connection->close();
        }
    }
}
?>
