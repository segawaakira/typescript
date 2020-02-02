
/*
 * 変数に型指定
 */

let num:number = 28;
let aa:string = '28';
enum Colors {
  Grey,
  Black
}
let myColor = Colors.Black;
// console.log(Colors.Black);


/*
 * 関数に型指定
 */

let myName = "太郎";
function returnMyName (): string {
  return myName;
}
// console.log(returnMyName());


// void　戻り値許可しない
function sayHello (): void {
  console.log("Hello!");
}


// never エラーを含む処理結果をなくす。（あまり使わなそう）
function noReturn(): never {
  throw new Error("エラーです");
}
let something: never;

// 引数をnumberに限定
function multiply(value1: number, value2: number): number {
  return value1 * value2
}
// console.log(multiply("あああ", 22));エラーになる
console.log(multiply(22, 22));


// 型としての関数
let myFunctionType: (val1: number, val2: number) => number;
myFunctionType = multiply;
// console.log(myFunctionType(2, 1));


//　オブジェクトの型定義
let userData: {
  name: string,
  age: number
} = {
  name: '太郎',
  age: 30
};


// alias
// type ○○ で、同じ型定義を使いまわしたい時に便利
type Complex = {
  data: number[],
  output: (all: boolean) => number[]
};
let Complex2: Complex = {
  data: [123, 8888, 1.9],
  output: function(flag: boolean): number[]{
    console.log(flag);
    return this.data;
  }
}


// union型　共同体型、合併型
// 2019→number "2019" stringのどちらでも許可したい時に
let thisYear: number | string = 2019;

function checkLength(str: string | null):number{
  if (str != null) {
    return str.length;
  } else {
    return 0;
  }
}
// console.log(checkLength(""));


// デフォルト引数
const countDown = (start: number = 10): void => {
  while(start > 0) {
    // console.log(start);
    start--;
  }
  // console.log("終了");
}
countDown(5);// 5指定しなくても、10が代入される


// レスト演算子
function makeArray(...args: number[]){
  return args;
}
// console.log(makeArray(1,2));


// インターフェース
// 特定のプロパティの型指定
/*
interface NamedPerson {
  name: string;
  age?: number; // ?で、あってもなくても良いプロパティの指定。
  [prepName: string]: any; // []で名称不明でも指定できる。prepNameはなんでも良い。
}

function greet(person: NamedPerson): void {
  console.log("こんにちは、" + person.age + "!");
}
const person = {
  name: "太郎",
  age: 30,
  hobbies: ["ゲーム", "競馬"],
}
function changedName(person: NamedPerson) {
  person.name = "権兵衛";
  person.age = 34;
}
greet(person);
changedName(person);
greet(person);
*/


// インターフェース（メソッド）
interface NamedPerson {
  name: string;
  age?: number; // ?で、あってもなくても良いプロパティの指定。
  [prepName: string]: any; // []で名称不明でも指定できる。prepNameはなんでも良い。
  greet(lastName: string): void;
}

function greet(person: NamedPerson): void {
  console.log("こんにちは、" + person.age + "!");
}

const person: NamedPerson = {
  name: "太郎",
  age: 30,
  hobbies: ["ゲーム", "競馬"],
  greet(lastName: string) {
    console.log("こんにちは、" + lastName + this.name + "!");
  }
}
function changedName(person: NamedPerson) {
  person.name = "権兵衛";
  person.age = 34;
}
greet(person);
changedName(person);
greet(person);
person.greet("ななしの");



// class
// クラスを作って、実装したインターフェイスにない機能やプロパティを足すことができる。
class Person implements NamedPerson {
  name: string;
  constructor(name: string) {
    this.name = name
  }
  greet(lastName: string) {
    console.log("こんにちは、" + lastName + this.name + "!");
  }
}

const myPerson = new Person("誰かさん");
greet(myPerson);
myPerson.greet("どこかの");

interface DoubleValues {
  (number1: number, number2: number): number;
}
let myDoubleFunction: DoubleValues;
myDoubleFunction = (value1: number, value2: number) => {
  return (value1 + value2) * 2;
};
console.log(myDoubleFunction(10, 20));



// インターフェースをインターフェイスで継承
interface AgedPerson extends NamedPerson {
  age: number;
}
const oldPerson: AgedPerson = {
  name: "Johndoe",
  greet(lastName: string) {
    console.log("こんにちは、" + lastName + this.name + "!");
  },
  age: 35
}
console.log(oldPerson);