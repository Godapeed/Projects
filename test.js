a = [
  { id: 999, name: "sdfasdfasd" },
  { id: 888, name: "sdsddssaad" },
  { id: 777, name: "hghghgjjnv" },
];
const result = a.reduce((arr, obj) => {
  arr[obj.name] = obj.id;
  return arr;
}, {});

console.log(result);
