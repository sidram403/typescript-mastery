/**
 * OPTIONAL PROPERTIES IN TYPESCRIPT
 * ---------------------------------
 * Optional properties allow object fields to be omitted.
 *
 * We define optional properties using the `?` operator.
 *
 * Syntax:
 * propertyName?: type
 */

/**
 * Example 1: Optional Property
 */

type User = {
  name: string;
  age?: number;
};

let user1: User = {
  name: "Sid",
  age: 25,
};

let user2: User = {
  name: "Rahul",
};

/**
 * Example 2: Product Example
 */

type Product = {
  name: string;
  price?: number;
};

let product1: Product = {
  name: "Laptop",
  price: 50000,
};

let product2: Product = {
  name: "Mouse",
};

/**
 * Example 3: Real-world API Example
 *
 * Some API responses may contain optional fields.
 */

type ApiUser = {
  id: number;
  name: string;
  email?: string;
};

let apiUser: ApiUser = {
  id: 1,
  name: "Sid",
};
