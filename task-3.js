const findBestEmployee = function (employees) {
    
    const arrayOfKeys = Object.keys(employees);
    const arrayOfValues = Object.values(employees);
    
    let theBiggestValue = 0;
    for(const value of arrayOfValues) {        
        if (value > theBiggestValue) {
            theBiggestValue = value;
        }
    }
    
    const indexOfNumber = arrayOfValues.indexOf(theBiggestValue);   
    return arrayOfKeys[indexOfNumber]

};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
