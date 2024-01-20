
//配列
let colors = ['Red','Blue','Yellow'];
console.log(colors[0]);
console.log(colors.length);
console.log(colors[colors.length - 1]);

let Arr = ['a','b','c'];
Arr.splice(2,0,'D');
console.log(Arr);

Arr.splice(3,1);
console.log(Arr);

let a = Arr.pop();
console.log(a);
console.log(Arr);


let user = new Object();
user.name = "taro";
user.gender = "male";

console.log(user);

let user1 = {name:"Taro",gender:"male"};
console.log(user1);
console.log(user1.gender);
console.log(user1['name']);
console.log(Object.keys(user1).length);

//user1['prefecture'] = 'Kanagawa';
user1.prefecture = 'Kanagawa';
console.log(user1.prefecture);



//オブジェクトメソッド
let user2 = {
    name: "Kenji",
    gender: "male",
    birthyear: 1999,
    calcAge: function(thisYear){
        return thisYear - this.birthyear;
    }
}

console.log(user2.calcAge(2023));




//for loop
for(let i = 0; i<colors.length; i++){
    console.log(colors[i]);
}
//for each
colors.forEach(function(color) {
    console.log("color = " + color);
});
//for of
for(const color of colors){
    console.log(color);
}
for(const c of "JavaScript"){
    console.log(c);
}


const values = [12,14,30,20,11];
values.forEach(function(value) {
    console.log(value * 3);
});
//filter
const doFilter = values.filter(function(value) {
    return value % 3 === 0;
});
console.log(doFilter);

const doFilter2 = values.filter((value) => {
    return value % 2 === 0;
});
console.log(doFilter2);
