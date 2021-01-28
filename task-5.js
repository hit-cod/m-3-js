const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {

  let requestedArray = [];
  for (const objects of arr) {
      
    const keys = Object.keys(objects);
    const values = Object.values(objects);

    for (const key of keys) {
      if (prop === key) {
        const keyIndex = keys.indexOf(key);
        const valueToBeFound = values[keyIndex];
        requestedArray.push(valueToBeFound);
      }
    }
  }
  return requestedArray;
};

console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

console.log(getAllPropValues(products, "category")); // []
