/**
 * PRIMITIVE TYPES IN TYPESCRIPT
 * -----------------------------
 * Primitive types represent basic data types in TypeScript.
 * These types are the building blocks used to define data in applications.
 *
 * Common primitive types:
 * - string
 * - number
 * - boolean
 * - null
 * - undefined
 */

/**
 * STRING TYPE
 * Used for textual data such as names, emails, cities, etc.
 */

let firstName: string = "Sid";
let email: string = "sid@example.com";
let city: string = "Bangalore";

/**
 * NUMBER TYPE
 * Used for numeric values such as age, price, quantity.
 */

let age: number = 25;
let price: number = 499.99;
let quantity: number = 10;

/**
 * BOOLEAN TYPE
 * Used for true/false conditions such as authentication,
 * feature flags, and status indicators.
 */

let isLoggedIn: boolean = true;
let isAdmin: boolean = false;
let isPaymentSuccessful: boolean = true;

/**
 * NULL TYPE
 * Represents intentional absence of a value.
 */

let selectedUser: null = null;

/**
 * UNDEFINED TYPE
 * Indicates a variable has been declared but not assigned a value.
 */

let response: undefined = undefined;

/**
 * Example: Type Safety
 * TypeScript prevents assigning incorrect types.
 */

// ❌ Error
// price = "500"

/**
 * Real-world Example
 * These primitive types are commonly used in API responses
 */

let userName: string = "Sid";
let userAge: number = 25;
let userIsActive: boolean = true;
