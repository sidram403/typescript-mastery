/**
 * ARRAYS IN TYPESCRIPT
 * --------------------
 * Arrays are used to store multiple values of the same type.
 *
 * TypeScript allows us to define the type of elements inside an array.
 * This ensures type safety and prevents inserting incorrect data types.
 */

/**
 * Example 1: Number Array
 */

let numbers: number[] = [1, 2, 3, 4, 5];

/**
 * TypeScript will prevent inserting other types.
 */

// ❌ Error
// numbers.push("hello")

/**
 * Example 2: String Array
 */

let fruits: string[] = ["Apple", "Banana", "Mango"];

/**
 * Example 3: Boolean Array
 */

let flags: boolean[] = [true, false, true];

/**
 * Alternative Syntax (Less commonly used)
 */

let scores: Array<number> = [10, 20, 30];

/**
 * Example 4: Mixed Type Arrays using Union Types
 */

let values: (string | number)[] = ["Sid", 25, "Developer", 100];

/**
 * Real-world Example
 *
 * API response returning multiple users
 */

let users: string[] = ["Alice", "Bob", "Charlie"];

/**
 * Example operations
 */

numbers.push(6);
fruits.pop();
