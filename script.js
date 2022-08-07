 //no obj mutation allowed
/*const person = {
  name: 'ibra',
  age: 22
}
person.name = 'ibra';
*/
/**const myFunction = true
 ? () => console.log('first option')
 : () => console.log('second option');

 const DEVELOPMENT = true;
 const fetchDataReal = () => ({
  name: 'john doe',
  age: 32,
 });
 const double = x => x * 2;
 const subtractOne = x => x -1;
 const triple = x => x * 2;
const add5 = x => x +5;

const myNumber = 42;

const doubled = double(myNumber);
const minusOne = subtractOne(double);**/

/**const functionArray = [
  double,
  triple,
  subtractOne,
  add5,
];

var number = 42;
functionArray.forEach(func => func(number));
console.log(number);**/


//const createPrinter = () => () => console.log('hello');

//clouser

/**const createPrinter1 = () => {
  const myFavoriteNumber2 = 45;
  return () => 
    console.log(`My favorite number is ${myFavoriteNumber2}`);
}

const printer = createPrinter1();
printer();**/

// obj distructuring 
/**const person2 = ({name, age, job}) => {
  var _name = name;
  var _age = age;
  var _job = job;
  return{
    getName: () => _name,
  };
}

const me = Person3({name: 'shaun', age: 32, job: 'developer'});
console.log(me.getName());**/


//Higher order function
//const divide = (x, y) => x / y;

/**const divide = (x, y) => {
  /*if(y === 0){
    console.log('Error: dividing by zero');
    return null;
  }

  return x / y;
}**/

/**const secondArgumentIsnitZero = func =>
(...args) => {
    if(args[1] === 0){
      console.log('Error: dividing by zero');
      return null;
    }
    return func(...args);
}
const divideSafe = secondArgumentIsnitZero(divide);

console.log(divideSafe(7,0));
console.log(divideSafe(5, 3)); **/


//spreed operator
const persona1 = {
  name: 'ibra',
  age: 22,
  hairColor: 'black',
  eyeColor: 'black&white'
};

const careerData ={
  tittle: 'developer',
  company: 'NTT Data Center',
}


const personWithCariaData = {
  ...persona1,
  ...careerData,
};

console.log(personWithCariaData);

//spereed operator with arrays
const numbers = [1,2,3,4,5];
const newNumbers = [
  ...numbers,
  6,
];
console.log(newNumbers);

//Build-in Map function
const numeri = [1,2,3,4,5];
numeri.reverse();

console.log(numeri);

//map array
const numeri1 =[1,2,3,4,5];
const doubleNumeri = [];

for(let i = 0; i < numeri1.length; i++){
  doubleNumeri.push(numeri1[i] * 2);
}

//function programming way of writing it
const numeri2 = [1,2,3,4,5];
const double = x => x * 2;

const doubleNumeri2 = numeri2.map(double);
console.log(doubleNumeri2);
//Filter Method
const numeri3 = [1,2,3,4,5,6,7,8,10];
 var evenNumber = [];
 for(let i = 0; i < numeri3.length; i++ ){
  if(numeri3[i] % 2 === 0){
    evenNumber.push(numbers[i]);
  };
 }
 //console.log(evenNumber);
 // other way of writen filter method using functional programming way
 const numeri4 = [1,2,3,4,5,6,7,8,10];
 const isEvent = x => x % 2 === 0;
const evenNumber = numeri4.filter(isEvent);
console.log(evenNumber);

const words = [
  'hello',
  'goodbye',
  'the',
  'Antarctica',
];

const isLongerThan5 = word => word.length > 5;
const longWords = words.filter(isLongerThan5);
console.log(longWords);

//every & some method

const employee = [
  {
    name0: 'Jane Doe',
    salary: 90000,
  },
  {
    name1: 'ibra sonkp',
    salary: 1500000,
  },
  {
    name2: 'francesco',
    salary: 2500000,
  }
];

const makesMoreThanOneMillione = employee =>
      employee.salary > 1000000;
const result = employee.some(makesMoreThanOneMillione);

console.log(result);

//form

const formValue = [
  'shaun',
  'wassel',
  'maine',
  'developer',
  //'',
];

const isNotEmpty = string => !!string;
const allFieldsFilled = formValue.every(isNotEmpty);

console.log(allFieldsFilled);

//slice Array
const numeri5 = [0,1,2,3,4,5,6,7,8,9,10];
console.log(numeri5.slice(3, 8));

//sort used to change the order
const mixedUpNumbers = [10,2,4,3,7,5,8,9,1,6];

const ascending = (a, b) => {
  if(a < b) return -1;
  if(a > b) return 1;

  return 0;
}
const sortedNumbers = mixedUpNumbers.slice().sort(ascending);
console.log(sortedNumbers);

//descending order
const mixedUpNumbers1 = [10,2,4,3,7,5,8,9,1,6];

const descending = (a, b) => {
  if(a > b) return -1;
  if(a < b) return 1;

  return 0;
}
const sortedNumbers1 = mixedUpNumbers1.slice().sort(descending);
console.log(sortedNumbers1);

//Reduce function
const numbers0 = [5,7,2,40,23,14,8,4,11];

const product = numbers0.reduce((acc,x) =>{
  console.log(`acc is ${acc}`);
  console.log(`x is ${x}`);

  return acc * x;
}, 1);

console.log(product);


