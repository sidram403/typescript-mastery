/**
 * UNION TYPES IN TYPESCRIPT
 * -------------------------
 * Union types allow a variable to accept multiple types.
 *
 * Syntax:
 * typeA | typeB
 *
 * This means the variable can hold either typeA OR typeB.
 */

/**
 * Example 1: Basic Union Type
 */

let id: number | string;

id = 101;
id = "user-101";

/**
 * Example 2: Function using Union Type
 */

function printId(id: number | string) {
  console.log("User ID:", id);
}

printId(101);
printId("user-101");

/**
 * Example 3: Type Narrowing
 *
 * When using union types, we often need to check the type
 * before performing specific operations.
 */

function processId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}

/**
 * Real-world Example
 *
 * API responses sometimes return different types.
 */

function formatValue(value: string | number) {
  if (typeof value === "string") {
    return value.trim();
  }

  return value.toString();
}
