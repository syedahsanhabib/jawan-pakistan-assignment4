const arrays = [42, true, "hello, world!", 
{name : "john", age : 25, isStudent : false,},
 false, 3.14, "JavaScript is fun!",];


let newArr = arrays.map((e, i) => {
    return typeof e.toString
  });
  
  console.log(newArr);

  
let arr = arrays.filter((e)=>{
   return typeof e === 'number';
});
console.log(arr)

let arr1 = arrays.forEach((e,i)=>{
  console.log(e)
})

let element = arrays.reduce((a, b) => {
  return typeof b === 'number' ? a+b : a
},0);

console.log(element);


let Arr = arrays.find((e, i) => {
    return typeof e === 'boolean';
  });
  
  console.log(Arr);


  let Arr2 = arrays.findIndex((e, i) => {
    return typeof e === 'object';
  });
  
  console.log(Arr2);

  let find = arrays.some((e,i)=>{
   return typeof e === 'number';
  });
  console.log(find)


let find2 = arrays.every((e, i) => {
  return typeof e === "string";
});
console.log(Arr);