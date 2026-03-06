/**
 * ANY vs UNKNOWN IN TYPESCRIPT
 * ----------------------------
 * Both `any` and `unknown` can store any type of value.
 *
 * However, they behave very differently in terms of safety.
 *
 * any     → disables TypeScript type checking
 * unknown → requires type checking before usage
 */

/**
 * Example 1: Using `any`
 */

let value: any = "hello";

value = 10;
value = true;

// TypeScript allows any operation
value.toUpperCase();
value();
value.foo.bar;

/**
 * This is dangerous because TypeScript cannot protect us
 * from runtime errors.
 */

/**
 * Example 2: Using `unknown`
 */

let data: unknown = "hello";

/**
 * TypeScript does NOT allow direct operations.
 */

// ❌ Error
// data.toUpperCase()

/**
 * We must check the type first.
 */
if (typeof data === "string") {
  console.log(data.toUpperCase());
}

/**
 * Example 3 : Real-world API response
 *
 * Sometimes we don't know the exact type of data
 * returned from an API.
 */
function handleApiResponse(response: unknown) {
  if (typeof response === "string") {
    console.log("Response is string:", response);

    if (typeof response === "number") {
      console.log("Response is number:", response);
    }
  }
}
