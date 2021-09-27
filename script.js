'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = ''; //.textContent=0
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1}${type}</div>
    <div class="movements__value">${mov}</div>
    </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);
const createUserName = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0]) //returning the first letter
      .join(''); // used join() to join the returned element
  });
};
createUserName(accounts);
console.log(accounts);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// let arr = ['a', 'b', 'c', 'd', 'e'];
//slice
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice()); //returns same arry
// console.log([...arr]);
// //splice
// // console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr); //the splice changes original arry splice deleted them
// arr.splice(1, 2); //it takes start index and no of elements to delete after that
// console.log(arr);

//Reverse
// let arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);
// //Concat
// const letters = arr.concat(arr2);
// // console.log(...arr, ...arr2); //same as above result
// console.log(letters);

// //join
// console.log(letters.join('-'));

//for of loop
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// // for (const movement of movements)
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}:You have deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`); //Math.abs to remove negative sign
//   }
// }
// console.log('-------FOREACH-------');
// //for each for above for of loop
// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}:You have deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`); //Math.abs to remove negative sign
//   }
// });
//0:function(200) //for Each works on each element in an array index
//1:function(450)
//2:function(400)

//ForEach on maps and sets
//MAP
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);
// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });
// //SET
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, set) {
//   console.log(`${value}: ${value}`);
// });

//Challenge
// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.slice();
//   dogsJuliaCorrected.splice(0, 1); //removing first data
//   dogsJuliaCorrected.splice(-2); //removing last two data
//   //dogsJulia.slice(1, 3); // can use this method for above code
//   const dogs = dogsJuliaCorrected.concat(dogsKate);
//   console.log(dogs);
//   //"Dog number 1 is an adult, and 5 years old"
//   // or a Puppy ("Dog number 2 is still a puppy")
//   dogs.forEach(function (dog, i) {
//     if (dog >= 3) {
//       console.log(`Dog number ${i + 1} is an Adult, and ${dog} years old`);
//     } else {
//       console.log(`Dog number ${i + 1} is still a Puppy`);
//     }
//   });
// };
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

//The Map method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;
// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });
// //Writing using arrow function
// // const movementsUSD = movements.map(mov => mov * eurToUsd);

// console.log(movements);
// console.log(movementsUSD);
// // same as above but using for of loop
// const movementsUDSfor = [];
// for (const mov of movements) {
//   movementsUDSfor.push(mov * eurToUsd);
// }
// console.log(movementsUDSfor);

// const movementsDescriptons = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}:You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//       mov
//     )}`
// );
// console.log(movementsDescriptons);

//Filter method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movements.filter(function (mov) {
  return mov > 0;
});

console.log(movements);
console.log(deposits);

//using for of loop exercise
const depositsfor = [];
for (const mov of movements) {
  if (mov > 0) depositsfor.push(mov);
}
console.log(depositsfor);
//for withdrawal
const withdrawalfor = movements.filter(mov => mov < 0);
console.log(withdrawalfor);
