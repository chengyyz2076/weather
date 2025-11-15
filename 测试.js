// console.log(typeof null)
// console.log(typeof undefined)
// console.log(typeof [1,2,'4'])
// console.log(typeof {name: 'test'})

// console.log(typeof 'abc')
// console.log(typeof new String('abc'))
// console.log(typeof true)
// console.log(typeof new Boolean(true))

// console.log({a: 1} == true);//false
// console.log({a: 1} == "[object Object]");//true
// console.log(NaN == NaN);//false
// let ob={a: 1}
// console.log(ob.toString())

// console.log(9999999999999999n)
// // console.log(+9999999999999999n) // Uncaught TypeError TypeError: Cannot convert a BigInt value to a number
// console.log(typeof 9999999999999999n)
// // console.log(typeof new BigInt(9999999999999999))//TypeError: BigInt is not a constructor
// if(0n){
//     // console.log('true')
// }
// if (2n){
//     console.log('true')
// }

// console.log(-0 == +0)
// console.log(Object.is(-0, +0))
// console.log(NaN == NaN)
// console.log(Object.is(NaN, NaN))

// console.log([]==![])
// a={}
// console.log(a=={})

// var 版本：三个函数输出的都是 3
// var funcs = [];
// for (let i = 0; i < 3; i++) {
//   funcs.push(() => console.log(i));
// console.log(funcs[i])

// }
// funcs[0](); // 3
// funcs[1](); // 3
// funcs[2](); // 3

// console.log(null == undefined); // true
// console.log(null == null); // true
// console.log(undefined == undefined); // true
// console.log('' == 0); // false
// console.log({} == '[object Object]'); // true
