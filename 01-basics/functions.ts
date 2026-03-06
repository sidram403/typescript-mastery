/**
 * FUNCTIONS IN TYPESCRIPT
 * -----------------------
 * TypeScript allows us to define types for:
 * 1. Function parameters
 * 2. Function return values
 *
 * This ensures that functions receive correct data
 * and return predictable results.
 */

/**
 * Example 1: Function with typed parameters and return type
 */

function add(a: number, b: number): number {
  return a + b;
}

/**
 * Example usage
 */

const result = add(10, 20);

/**
 * TypeScript prevents passing incorrect types
 */

// ❌ Error
// add("10", "20")

/**
 * Example 2: Function returning a string
 */

function getGreeting(name: string): string {
  return `Hello ${name}`;
}

/**
 * Example 3: Function returning boolean
 */

function isAdult(age: number): boolean {
  return age >= 18;
}

/**
 * Real-world Example
 * API helper function
 */

function getUserById(id: number): string {
  return `Fetching user with ID: ${id}`;
}
