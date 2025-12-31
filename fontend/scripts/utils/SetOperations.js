/**
 * Set Operations Utility
 * Handles set operations for discrete mathematics
 * Note: Sets should be represented as arrays in expressions
 */
export class SetOperations {
    /**
     * Union of two sets: A ∪ B
     */
    static union(setA, setB) {
        const set = new Set([...setA, ...setB]);
        return Array.from(set).sort((a, b) => a - b);
    }

    /**
     * Intersection of two sets: A ∩ B
     */
    static intersection(setA, setB) {
        const setBSet = new Set(setB);
        return Array.from(setA).filter(x => setBSet.has(x)).sort((a, b) => a - b);
    }

    /**
     * Difference of two sets: A - B
     */
    static difference(setA, setB) {
        const setBSet = new Set(setB);
        return Array.from(setA).filter(x => !setBSet.has(x)).sort((a, b) => a - b);
    }

    /**
     * Symmetric difference: A Δ B = (A - B) ∪ (B - A)
     */
    static symmetricDifference(setA, setB) {
        return this.union(
            this.difference(setA, setB),
            this.difference(setB, setA)
        );
    }

    /**
     * Check if setA is subset of setB: A ⊆ B
     */
    static isSubset(setA, setB) {
        const setBSet = new Set(setB);
        return Array.from(setA).every(x => setBSet.has(x));
    }

    /**
     * Cardinality (size) of a set: |A|
     */
    static cardinality(set) {
        return new Set(set).size;
    }
}
