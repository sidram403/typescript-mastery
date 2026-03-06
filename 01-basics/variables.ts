/**
 * VARIABLES IN TYPESCRIPT
 * -----------------------
 * TypeScript allows us to explicitly define the type of a variable.
 * This helps catch errors during development instead of runtime.
 *
 * Syntax:
 * let variableName: type = value
 */

/**
 * Example 1: String Type
 * Represents textual data such as names, cities, emails, etc.
 */
let userName: string = "Sid";

/**
 * Example 2: Number Type
 * Used for numeric values such as age, price, quantity, etc.
 */
let age: number = 25;

/**
 * Example 3: Boolean Type
 * Represents true or false values.
 * Commonly used for flags such as authentication, status, permissions.
 */
let isAdmin: boolean = true;

/**
 * Example 4: Type Safety
 * TypeScript prevents assigning incorrect types.
 */

// ❌ This will cause a TypeScript error
// age = "twenty five"

/**
 * Example 5: Type Inference
 * TypeScript can automatically detect the type based on the assigned value.
 */

let city = "Bangalore"; // inferred as string
let salary = 50000; // inferred as number
let isLoggedIn = false; // inferred as boolean
