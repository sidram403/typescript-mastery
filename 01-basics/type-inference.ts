/**
 * TYPE INFERENCE IN TYPESCRIPT
 * ----------------------------
 * TypeScript can automatically determine the type of a variable
 * based on the value assigned to it.
 *
 * This feature is called "Type Inference".
 *
 * Because of this, developers don't always need to explicitly
 * define types in TypeScript.
 */

/**
 * Example 1: String Inference
 */

let userName = "Sid";
// TypeScript infers: string

/**
 * Example 2: Number Inference
 */

let price = 499;
// TypeScript infers: number

/**
 * Example 3: Boolean Inference
 */

let isLoggedIn = true;
// TypeScript infers: boolean

/**
 * Example 4: Array Inference
 */

let numbers = [1, 2, 3, 4];
// TypeScript infers: number[]

/**
 * Example 5: Object Inference
 */

let user = {
  name: "Sid",
  age: 25,
  isAdmin: true,
};

/*
TypeScript infers:

{
  name: string
  age: number
  isAdmin: boolean
}
*/

/**
 * When Should We Explicitly Define Types?
 *
 * 1. Function parameters
 * 2. API responses
 * 3. Complex objects
 * 4. Public interfaces
 */
