/**
 * API Connection Service
 * Handles all communication with the backend API
 */
export class ApiConnection {
    constructor(baseUrl = 'http://localhost:8001/api') {
        this.baseUrl = baseUrl;
    }

    /**
     * Save a calculation to the backend
     */
    async saveCalculation(expression, result) {
        try {
            const response = await fetch(`${this.baseUrl}/calculations.php`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    expression: expression,
                    result: result
                })
            });

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error saving calculation:', error);
            return {
                success: false,
                message: 'Failed to save calculation: ' + error.message
            };
        }
    }

    /**
     * Get all calculations
     */
    async getAllCalculations(limit = 100, offset = 0) {
        try {
            const response = await fetch(
                `${this.baseUrl}/calculations.php?limit=${limit}&offset=${offset}`
            );

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching calculations:', error);
            return {
                success: false,
                message: 'Failed to fetch calculations: ' + error.message,
                data: []
            };
        }
    }

    /**
     * Get calculation by ID
     */
    async getCalculationById(id) {
        try {
            const response = await fetch(
                `${this.baseUrl}/calculations.php?id=${id}`
            );

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching calculation:', error);
            return {
                success: false,
                message: 'Failed to fetch calculation: ' + error.message
            };
        }
    }

    /**
     * Delete a calculation
     */
    async deleteCalculation(id) {
        try {
            const response = await fetch(
                `${this.baseUrl}/calculations.php?id=${id}`,
                {
                    method: 'DELETE'
                }
            );

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error deleting calculation:', error);
            return {
                success: false,
                message: 'Failed to delete calculation: ' + error.message
            };
        }
    }

    /**
     * Get statistics
     */
    async getStatistics() {
        try {
            const response = await fetch(
                `${this.baseUrl}/calculations.php?stats=1`
            );

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching statistics:', error);
            return {
                success: false,
                message: 'Failed to fetch statistics: ' + error.message
            };
        }
    }
}
