let obj = new Object;
obj.name = "李华";
obj.age = 18;
obj.gender = "男";
console.log(obj);

let obj1 = {
    name : "小明",
    age : 4,
    gender : "男"
};
console.log(obj1);
function createPerson(name,age,gender){
     const x = new Object();
     x.name = name;
     x.age = age;
     x.gender = gender;
     return x;
}
const a = createPerson("小王",15,"男");
const b = createPerson("小黄",16,"女");
console.log(a);
console.log(b);