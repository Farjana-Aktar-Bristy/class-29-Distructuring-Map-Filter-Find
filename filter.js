// const numbers = [1, 2, 4, 6, 8, 10, 11, 14, 15, 16, 30, 60, 120, 240, 299, 399];
// const oddNum = numbers.filter(number => number % 2 == 0);
// console.log(oddNum);

// const evenNum = numbers.filter(number => number % 2 != 0);
// console.log(evenNum);

const products = [
    { name: 'Mobile', model: 'Samsung S21 FE', price: 600, color: 'Blue' },
    { name: 'Laptop', model: 'HP ProBook', price: 500, color: 'Gray' },
    { name: 'Smart Watch', model: 'Haylou RS4', price: 300, color: 'Black' },
    { name: 'Camera', model: 'Canon M50', price: 200, color: 'Black' },
]

// const lowPrice = products.filter(product => product.price < 400);
// console.log(lowPrice);

// const highPrice = products.filter(product => product.price > 400);
// console.log(highPrice);

const blackProduct = products.filter(product => product.color == 'Black');
console.log(blackProduct);