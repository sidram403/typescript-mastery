/**
 * TYPE ALIASES IN TYPESCRIPT
 * --------------------------
 * A Type Alias allows us to create a custom name for a type.
 *
 * This helps improve code readability and allows
 * reuse of complex types across the application.
 *
 * Syntax:
 * type TypeName = ...
 */

/**
 * Example 1: Simple Type Alias
 */

type ID = number | string;

let userId: ID = 101;
userId = "user-101";

/**
 * Example 2: Object Type Alias
 */

type User = {
  name: string;
  age: number;
  isAdmin: boolean;
};

let user1: User = {
  name: "Sid",
  age: 25,
  isAdmin: true,
};

let user2: User = {
  name: "Rahul",
  age: 30,
  isAdmin: false,
};

/**
 * Example 3: Literal Types with Alias
 */

type Status = "success" | "error" | "loading";

let requestStatus: Status = "loading";

/**
 * Real-world Example
 * API response structure
 */

type ApiResponse = {
  success: boolean;
  message: string;
  data: unknown;
};

let response: ApiResponse = {
  success: true,
  message: "Request successful",
  data: { id: 1, name: "Sid" },
};
