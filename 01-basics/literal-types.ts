/**
 * LITERAL TYPES IN TYPESCRIPT
 * ---------------------------
 * Literal types allow variables to accept only specific values.
 *
 * Instead of allowing any string or number, we restrict
 * the variable to predefined values.
 *
 * This is very useful for controlling valid states
 * in applications.
 */

/**
 * Example 1: String Literal Types
 */

let status: "success" | "error" | "loading";

status = "success";
status = "error";
status = "loading";

// ❌ Error
// status = "pending"

/**
 * Example 2: Direction Control
 */

let direction: "left" | "right";

direction = "left";
direction = "right";

// ❌ Error
// direction = "up"

/**
 * Example 3: Number Literal Types
 */

let diceValue: 1 | 2 | 3 | 4 | 5 | 6;

diceValue = 3;

// ❌ Error
// diceValue = 7

/**
 * Real-world Example
 * UI Button Variants
 */

type ButtonVariant = "primary" | "secondary" | "danger";

let buttonStyle: ButtonVariant = "primary";
