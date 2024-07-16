const data = [
  {
    productName: "Bakery",
    unitPrice: 5000,
    amount: 100,
    totalPrice: 500000,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Chocolate",
    unitPrice: 3000,
    amount: 18,
    totalPrice: 540000,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Cake",
    unitPrice: 8000,
    amount: 10,
    totalPrice: 80000,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Candy",
    unitPrice: 2000,
    amount: 16,
    totalPrice: 32000,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Icecream",
    unitPrice: 6000,
    amount: 12,
    totalPrice: 22000,
    casherId: 1,
    date: "2022-11-01",
  },
];
let sum1 = 0;
const allPrice = data.map((a) => {
  sum1 = sum1 + a.totalPrice;

  return a.totalPrice;
});
console.log("===>", allPrice);
console.log("SUM : ", sum1);

const topPrice = data.filter((top) => {
  return top.totalPrice > 45000;
});
console.log("topPrice", topPrice);
// ranks.sort((a, b) => a - b);

// const sum = data.reduce((pV, cV) => pV + cV, 0);
