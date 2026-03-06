/**
 * OBJECT TYPES IN TYPESCRIPT
 * --------------------------
 * Objects are used to represent structured data.
 * TypeScript allows us to define the shape (structure)
 * of an object to ensure type safety.
 */

/**
 * Example 1: Defining an Object Type
 */

let user: {
  name: string;
  age: number;
  isAdmin: boolean;
} = {
  name: "Sid",
  age: 25,
  isAdmin: true,
};

/**
 * TypeScript ensures the object follows this structure.
 */

// ❌ Error - wrong type
// user.age = "twenty five"

/**
 * Example 2: Type Inference with Objects
 */

let product = {
  title: "Laptop",
  price: 50000,
  inStock: true,
};

/*
TypeScript infers:

{
  title: string
  price: number
  inStock: boolean
}
*/

/**
 * Real-world Example
 * User data coming from an API
 */

let apiUser: {
  id: number;
  name: string;
  email: string;
} = {
  id: 1,
  name: "Sid",
  email: "sid@example.com",
};
