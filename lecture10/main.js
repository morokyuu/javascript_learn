'use strict';
console.log("main js");

const PI = 3.14;
console.log(PI)

let num = 123;
console.log(num);
let str = '123';

//型を無視して比較する
if(num == str){
    console.log("おなじ");
}
else{
    console.log("ちがう");
}

//型を考慮して比較する 原則こちらを使う
if(num === str){
    console.log("おなじ");
}
else{
    console.log("ちがう");
}

//四角形の面積を求める関数
function rectangle(height, width) {
    return height * width;
}

console.log(rectangle(3,5));

//関数リテラル
const getTriangle = function triangle(height, width) {
    return height * width / 2;
}

console.log(getTriangle(3,5));

//Function constructor
const getRectangle = new Function('height','width','return height * width');

console.log(getRectangle(3,5));

//arrow function 関数リテラルの省略記法
const getRectangle2 = (height, width) => {
    return height * width;
}
console.log(getRectangle2(3,6));


//コールバック関数
const displayMessage = function(){
    console.log("timeout");
}
setTimeout(displayMessage, 2000);

//コールバックの例
function greeting(name){
    console.log("hello " + name + " san.");
}
function inputUserName(callback){
    let name = prompt("なまえをにゅうりょくしてください");
    callback(name);
}
inputUserName(greeting);






