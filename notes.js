// type of data
// Number/String/Boolean/Symbol/Object/Null/Undefined

// Number 不区分整数和浮点数值　1.0+2.0=0.30000000000000004

// parseInt()　字符到整形
// parseFloat()　字符到浮点,只解析十进制数字
//  parseInt() 和 parseFloat() 函数会尝试逐个解析字符串中的字符，直到遇上一个无法被解析成数字的字符，
//  然后返回该字符前所有数字字符组成的数字。使用运算符 "+" 将字符串转换成数字，只要字符串中含有无法被解析
//  成数字的字符，该字符串都将被转换成 NaN

// NaN (not a number) NaN + 3 = NaN
// Infinity 正无穷
// -Infinity　负无穷
// isNaN()　是否为NaN
// isFinite() 是否有穷

// JavaScript 中 null 和 undefined 是不同的，
// 前者表示一个空值（non-value），必须使用null关键字才能访问，
// 后者是“undefined（未定义）”类型的对象，表示一个未初始化的值，也就是还没有被分配的值

// Boolean
// false、0、空字符串("")、NaN、null 和 undefined 被转换为 false
// 所有其他值被转换为 true

//  JavaScript 中语句块（blocks->if else）是没有作用域的，只有函数有作用域;

// 控制结构if-else
 var name = "kittens";
if (name == "puppies") {
  name += "!";
} else if (name == "kittens") {
  name += "!!";
} else {
  name = "!" + name;
}
name == "kittens!!"; // true

// while,do-while
while (true) {
  // 一个无限循环！
}

var input;
do {
  input = get_input();
} while (inputIsNotValid(input))

// for
for (var i = 0; i < 5; i++) {
  // 将会执行五次
}

// 三元运算符
var allowed = (age > 18) ? "yes" : "no";

// switch
switch(action) {
    case 'draw':
        drawIt();
        break;
    case 'eat':
        eatIt();
        break;
    default:
        doNothing();
}

// 原型链
// Person.prototype 是一个可以被Person的所有实例共享的对象。
// 它是一个名叫原型链（prototype chain）的查询链的一部分：
// 当你试图访问一个 Person 没有定义的属性时，解释器会首先检查
// 这个 Person.prototype 来判断是否存在这样一个属性。所以，
// 任何分配给 Person.prototype 的东西对通过 this 对象构造的实例都是可用的

function Person(first, last) {
    this.first = first;
    this.last = last;
}
Person.prototype.fullName = function() {
    return this.first + ' ' + this.last;
}
Person.prototype.fullNameReversed = function() {
    return this.last + ', ' + this.first;
}


// var 声明一个变量，可赋一个初始化值。
// let 声明一个块作用域的局部变量，可赋一个初始化值。
// const 声明一个块作用域的只读的命名常量。

// 一个 JavaScript 标识符必须以字母、下划线（_）或者美元符号（$）开头；后续的字符也可以是数字（0-9）
// 当你对一个 null 变量求值时，空值 null 在数值类型环境中会被当作0来对待，而布尔类型环境中会被当作 false

// JavaScript 变量的另一特别之处是，你可以引用稍后声明的变量而不会引发异常。
// 这一概念称为变量声明提升(hoisting)；JavaScript 变量感觉上是被“提升”或移到了所有函数和语句之前。
// 然而提升后的变量将返回 undefined 值

// let（const）将不会提升变量到代码块的顶部。
// 因此，在变量声明之前引用这个变量，将抛出错误ReferenceError。
// 这个变量将从代码块一开始的时候就处在一个“暂时性死区”，直到这个变量被声明为止

// 对于函数，只有函数声明会被提升到顶部，而不包括函数表达式
/* 函数声明 */

foo(); // "bar"

function foo() {
  console.log("bar");
}


/* 函数表达式 */

baz(); // TypeError: baz is not a function

var baz = function() {
  console.log("bar2");
};


// 常量不可以通过赋值改变其值，也不可以在脚本运行时重新声明。它必须被初始化为某个值；
// 在同一作用域中，不能使用与变量名或函数名相同的名字来命名常量
// 然而,对象属性是不受保护的,所以可以使用如下语句来执行

const MY_OBJECT = {"key": "value"};
MY_OBJECT.key = "otherValue";

// 字面量是由语法表达式定义的常量；或，通过由一定字词组成的语词表达式定义的常量


// 闭包是 JavaScript 中最强大的特性之一。JavaScript 允许函数嵌套，并且内部函数可以访问定义在外部函数中的所有变量和函数，
// 以及外部函数能访问的所有变量和函数。但是，外部函数却不能够访问定义在内部函数中的变量和函数。这给内部函数的变量提供了一定的安全性。
// 此外，由于内部函数可以访问外部函数的作用域，因此当内部函数生存周期大于外部函数时，外部函数中定义的变量和函数将的生存周期比内部函数执行时间长。
// 当内部函数以某一种方式被任何一个外部函数作用域访问时，一个闭包就产生了.

// 函数的实际参数会被保存在一个类似数组的arguments对象中,arguments变量只是 ”类数组对象“


// this
// 在箭头函数出现之前，每一个新函数都重新定义了自己的 this 值
// （在严格模式下，一个新的对象在构造函数里是未定义的，以“对象方法”的方式调用的函数是上下文对象等）
function Person() {
  var self = this; // Some choose `that` instead of `self`. 
                   // Choose one and be consistent.
  self.age = 0;

  setInterval(function growUp() {
    // The callback refers to the `self` variable of which
    // the value is the expected object.
    self.age++;
  }, 1000);
}
// 箭头功能捕捉闭包上下文的this值
function Person(){
  this.age = 0;

  setInterval(() => {
    this.age++; // |this| properly refers to the person object
  }, 1000);
}

var p = new Person();


// 关系操作符对操作数进行比较，根据比较结果真或假，返回相应的布尔值
// in操作符， 如果所指定的属性确实存在于所指定的对象中，则会返回true
// instance of 如果所判别的对象确实是所指定的类型，则返回true