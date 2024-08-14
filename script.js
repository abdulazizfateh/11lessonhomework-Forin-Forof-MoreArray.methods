// TASK 1 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// 1. object ichida nested objeclar bo'lsa ularni boshqa arreyga solib jo'natadigan function yozing 

// let arr = [
//     {
//         name: "Abdulaziz",
//         age: 18,
//         friends: {
//             name: 'Muhammadjon',
//             age: 18,
//         }
//     },
//     {
//         name: "Fathullo",
//         age: 22,
//         friends: {
//             name: 'Sarvar',
//             age: 22,
//         }
//     }
// ];

// let newArr = [];

// // TASK 1 using (for-in)

// for (i in arr) {
//     console.log(arr[i].friends);
// }



// TASK 1 using for-classic

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i].friends)
// }



// TASK 1 using array method .map

// arr.map((item) => {
//     console.log(item.friends)
// })









// TASK 2 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// 2. arrey ichida objectlar bo'lsa boshqa bir arreyga solib jo'natadigan function 

// let arr = [12, 'Hello', null, undefined, '',
//     {
//         name: 'Abdulaziz',
//         age: 18,
//         status: 'Developer'
//     },
//     {
//         name: 'Fathullo',
//         age: 22,
//         status: 'Businessman'
//     }
// ];

// const relocateToArray = (arr) => {
//     let newArr = [];

//     for (i in arr) { // this for-in loop is the same as the for-classic for (let i = 0; i < arr.length; i++)
//         if (typeof arr[i] == 'object' && arr[i] !== null) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }

// console.log(relocateToArray(arr));




// TASK 2 using for-classic

// let arr = [12, 'Hello', null, undefined, '',
//     {
//         name: 'Abdulaziz',
//         age: 18,
//         status: 'Developer'
//     },
//     {
//         name: 'Fathullo',
//         age: 22,
//         status: 'Businessman'
//     }
// ];

// const relocateToArray = (arr) => {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] == 'object' && arr[i] !== null) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
// console.log(relocateToArray(arr));









// TASK 3 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// 3. prompt key kiritiladi arrey ichidagi objectlarni shu keyga mansubini yeg'ib beradigan function 

// let arr = [
//     {
//         name: 'Abdulaziz',
//         age: 18,
//         country: 'Uzbekistan',
//     },
//     {
//         name: 'Fathullo',
//         age: 22,
//         country: 'Uzb',
//     },
//     {
//         name: 'Muhammadjon',
//         age: 18,
//         country: 'Uz',
//     },
// ];

// const findTheObjectKeys = (arr) => {
//     let newArr = [`Object key is not found !`];
//     let inputKey = prompt(`Enter Object key`);
//     if (inputKey == 'name') {
//         for (let i = 0; i < arr.length; i++) {
//             newArr.push(arr[i].name);
//         }
//         newArr.splice(0, 1);
//     } else if (inputKey == 'age') {
//         for (let i = 0; i < arr.length; i++) { // used for-classic to find every index of array, 
//             // and then we can get the objects in it as well as the objects properties
//             newArr.push(arr[i].age);
//         }
//         newArr.splice(0, 1);
//     } else if (inputKey == 'country') {
//         for (i in arr) { // used for-in AS index counter, since it does the same job as for-classic
//             newArr.push(arr[i].country);
//         }
//         newArr.splice(0, 1);
//     }
//     return newArr;
// }

// console.log(findTheObjectKeys(arr));









// TASK 4 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// 4. arrey ichida arreyda user malumotlari bor shularni yoshi 20 madan kattasini boshqa bir arreyga solib berish 

// let arr = [['Abdulaziz', '18'], ['Fathullo', 22], ['Jack', 25], ['Jude', 21]];
// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         if (arr[i][j] > 20) {
//             newArr.push(arr[i][j]);
//         }
//     }
// }
// console.log(newArr);