console.log('Hi Welcome');
a=8;
var a=8;
let g;
console.log(typeof(g))
// Javascript Objects
let person={
    name:'Maya',
    age:22,
    location:'TVM'
}
console.log(person.name);
let arr=['Heera','Jai',10]
console.log(arr.length)
let arr_obj=[{age:23,location:'TVM'},{age:43,location:'kochi'}]
console.log(arr_obj[1].location)
function add(a,b) {
    var sum=a+b;
    return sum
}
let result=add(20,30)
console.log(result)
var a1=99;
var a2='99';
if (a1>a2) {
   console.log('a1 is greater') 
} else if(a1==a2){
console.log('a1 is sameas a2 and the value is'+a1)
}
else {
    console.log('a2 is greater') 
}
var arr2=[10,20,40,50]
for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i])
    
}
for (const i in arr2) {
    console.log(arr2[i])
}
for (const i of arr2) {
    console.log(i)
}