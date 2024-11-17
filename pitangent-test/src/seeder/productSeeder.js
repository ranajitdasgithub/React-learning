// // src/seeder/productSeeder.js
// import { faker } from "@faker-js/faker"; // Updated import for the new package

// // Function to generate a specified number of fake products
// const generateProducts = (count = 100) => {
//   const products = [];
//   for (let i = 0; i < count; i++) {
//     products.push({
//       id: faker.datatype.uuid(), // Generate a unique ID
//       name: faker.commerce.productName(), // Generate a product name
//       image: faker.image.imageUrl(), // Generate a product image URL
//       description: faker.commerce.productDescription(), // Generate a product description
//     });
//   }
//   return products;
// };

// export default generateProducts;

import { faker } from "@faker-js/faker";

export function generateProducts() {
  return {
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    image: faker.image.avatar(),
  };
}
export const products = faker.helpers.multiple(generateProducts, {
  count: 100,
});
