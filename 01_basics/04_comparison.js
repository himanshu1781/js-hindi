//console.log(2>1)
//console.log(2>=1)
//console.log(2<1)

//console.log("2" > 1)
//here js will automatically convert string to number
//here the result cannot be predictable 
//console.log(null > 0);
//console.log(null == 0);
//console.log(null >= 0);
//similar for undefined
// in most of the avoid these operation quite  confusing
//the reaason is that an wqality check == and comaprison > <>= <= work diffenftly
// comparison convert null to a number treating it as o
// thats why null> =0 is true  and  (1) 
// === strict check not only check values but check its datatypes also
//console.log("2" === 2);
//kis tarh store aur kis tarah acces kar skte ho unhi type me define kiya gya hai
//primitive(ccall by value- jab bhi aap inklo copy karte hai jab bhi aapko inka data diya jata hai wo copy hota hai to aap copy me chnage karte ho naki actual data me) and non primitive (call by reference)
// 7 types primitive : string ,number,boolean,null, undefined,symbol(for making anyvalue unique),bigInt
const score = false;
//const score:Number = false
const scoreValue = 100.3
const isloggedin = false
const id = Symbol('123')

//non-primitive(referecne)
//array,objects,functions

