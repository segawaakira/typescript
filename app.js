var num = 28;
var aa = '28';
var Colors;
(function (Colors) {
    Colors[Colors["Grey"] = 0] = "Grey";
    Colors[Colors["Black"] = 1] = "Black";
})(Colors || (Colors = {}));
var myColor = Colors.Black;
var myName = "太郎";
function returnMyName() {
    return myName;
}
function sayHello() {
    console.log("Hello!");
}
function noReturn() {
    throw new Error("エラーです");
}
var something;
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(22, 22));
var myFunctionType;
myFunctionType = multiply;
var userData = {
    name: '太郎',
    age: 30
};
var Complex2 = {
    data: [123, 8888, 1.9],
    output: function (flag) {
        console.log(flag);
        return this.data;
    }
};
var thisYear = 2019;
function checkLength(str) {
    if (str != null) {
        return str.length;
    }
    else {
        return 0;
    }
}
var countDown = function (start) {
    if (start === void 0) { start = 10; }
    while (start > 0) {
        start--;
    }
};
countDown(5);
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
function greet(person) {
    console.log("こんにちは、" + person.age + "!");
}
var person = {
    name: "太郎",
    age: 30,
    hobbies: ["ゲーム", "競馬"],
    greet: function (lastName) {
        console.log("こんにちは、" + lastName + this.name + "!");
    }
};
function changedName(person) {
    person.name = "権兵衛";
    person.age = 34;
}
greet(person);
changedName(person);
greet(person);
person.greet("ななしの");
var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function (lastName) {
        console.log("こんにちは、" + lastName + this.name + "!");
    };
    return Person;
}());
var myPerson = new Person("誰かさん");
greet(myPerson);
myPerson.greet("どこかの");
var myDoubleFunction;
myDoubleFunction = function (value1, value2) {
    return (value1 + value2) * 2;
};
console.log(myDoubleFunction(10, 20));
var oldPerson = {
    name: "Johndoe",
    greet: function (lastName) {
        console.log("こんにちは、" + lastName + this.name + "!");
    },
    age: 35
};
console.log(oldPerson);
//# sourceMappingURL=app.js.map