console.log('Hello World');
const fs = require('fs');
fs.writeFileSync('hello.txt','Hello World');

const multiply = (num1,num2)=>{
    return num1*num2;
}
const res = multiply(5,3);
console.log(res);

const student ={
    name:'John',
    age: 22,
    gender: 'Male',
  getFullName: function () {
    return this.name;
  },
  
};
console.log(student.getFullName());

const fruits =['apple','oranges','','mango','','lemon']
console.log(fruits.map(fruit =>{
  return fruit ===''?'empty': fruit;
}))

const hobbies =['Sports','Cooking'];
/*for(let hobby of hobbies){
  console.log(hobby);
}*/
console.log(hobbies.map(hobby => {
  return 'Hobby:'+hobby;
}));

const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

let { key1, key3} = obj1



key1 = 20;

key3 = 123

console.log(obj1.key1, obj1.key3)
