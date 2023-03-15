// const numbers = [2, 4, 6, 8, 10, 15, 30, 60, 120, 240];
// // for (const number of numbers) {
// //     console.log(number);
// // }

// const doubleNum = number => number * 2;
// const output = numbers.map(doubleNum);
// console.log(output);


const products = [
    { name: 'Mobile', model: 'Samsung S21 FE', price: 600, color: 'Blue' },
    { name: 'Laptop', model: 'HP ProBook', price: 500, color: 'Gray' },
    { name: 'Smart Watch', model: 'Haylou RS4', price: 300, color: 'Pink' },
    { name: 'Camera', model: 'Canon M50', price: 200, color: 'Black' },
]
// const productName = products.map(function (product) {
//     console.log(productName);
// });

// const productName = products.map(product => console.log(product.name))
// console.log(productName);

products.map(product => console.log(product.name));
