const add = (a, b) => {
  return a + b;
};
const sub = (a, b) => {
  return a - b;
};
// default export
module.exports = add;
// es 5 export
// named export
module.exports = { sub };
//  array method => map
// const new

const nA = [];
for (let item of ranks) {
  console.log("item", item);
  nA.push(item * 2);
}
console.log("ranks", ranks);
console.log("new arr", nA);

const newArr = ranks.map((val) => val * 2);
console.log("new array", newArr);
