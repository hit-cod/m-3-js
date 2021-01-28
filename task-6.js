const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
  ];

const calculateTotalPrice = function(allProducts, productName) {
    for (const product of allProducts) {
        const productSpecs = Object.values(product);
        
        if (productName === productSpecs[0]) {
            const total = productSpecs[1] * productSpecs[2];
            return total;
        }
    }
}

console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800