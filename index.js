const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// //Code your solution here
// function getTotalAmountForProducts(batteryBatches) {
//   let totalPrice = 0;

//   for (const product of batteryBatches) {
//     totalPrice += product.price;
//   };

//   return totalPrice;
// }

// console.log(getTotalAmountForProducts(batteryBatches));

// Sum of all the assembled batteries
let totalBatteries = batteryBatches.reduce( (batteryAmount, assembledBatteries) => { return batteryAmount + assembledBatteries })
