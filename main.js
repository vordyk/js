// let count = 0;
// alert(`Загрузка началась ${performance.now()}мс назад`);

Function.prototype.defer = function (ms) {
	let f = this;
	return function (...args) {
		setTimeout(() => f.apply(this, args), ms);
	}
};

function wr() {
	let num = +prompt("колво итераций");
	console.log(num);

	if (num % 2 == 1 || num < 6) {
		alert("Число должно быть не меньше 6 и кратно 2");
	} else {
		for (let i = 2; i <= num; i++) {
			if (i % 2 == 0) {
				alert(i);
			}
		}
	}
}

function sw() {
	let a = +prompt();
	if (a > 2) {
		switch (a) {
			case 4:
				alert("malo" + a);
				break;
			case 5:
				alert("norm" + a);
				break;
			default:
				alert("no matching case");
		}
	} else {
		alert("no");
	}
}

function checkUp() {
	let age = prompt();
	(age < 18) ? (alert("netu 18"), location.reload()) : alert("Добро пожаловать");
}

function prs(str) {
	console.log(str + 1);
	let num = parseInt(str);
	console.log(num + 1);
}

prs("123");

// dom

function spisok() {
	// count++;

	let ol = document.getElementById('ol');
	let inf = document.getElementById('inf').value;

	let el = document.createElement('li');

	if (inf == false) {
		inf = "Вы ничего не ввелли.";
	}

	el.innerHTML = inf;
	// ol.prepend(count);
	ol.prepend(el);
}

function openMenu() {
	let menu = document.getElementById('menu');

	if (menu.style.display === 'block') {
		menu.style.display = 'none';
	} else {
		menu.style.display = 'block';
	}

	document.addEventListener('keydown', function (event) {
		if (event.key === 'Esc' || event.key === 'Escape') {
			menu.style.display = 'none';
		}
	});

}

function keys() {
	addEventListener('keydown', function (event) {
		if (event.key === 'Shift') {
			alert('Пасхалочка')
		}
	});
}

keys();

// let a = "1";
// let b = 0;
// console.log(a);
// console.log(+a);

// switch(+a) {
// 	case b + 1:
// 		alert("done");
// }

// let num = parseInt(prompt());
// console.log(num + 1);

// switch(num) {
// 	case 5:
// 	case 6: 
// 	alert("norm");
// 	break;
// 	case 7:
// 	case 8:
// 	alert("mnogo");
// 	break;
// }

// let browser = prompt();

// if(browser == 'Edge') {
// 	alert("Edge")
// }

// else if(browser == 'Chrome' ||browser == 'Firefox' ||browser == 'Safari' ||browser == 'Opera') {
// 	alert("Another")
// }

// else {
// 	alert("No support")
// }

// const number = +prompt();

// switch(number) {
// 	case 0:
// 		alert(number);
// 		break;
// 	case 1:
// 		alert(number);
// 		break;
// 	case 2:
// 	case 3:
// 		alert(number);
// }

function finalGrade(exam, projects) {
	let grade = 0;
	if (exam > 90 || projects > 10) {
		grade = 100;
	}
	else if (exam > 75 && projects >= 5) {
		grade = 90;
	}
	else if (exam > 50 && projects >= 2) {
		grade = 75;
	}
	console.log(grade);
	return grade;
}

// function plural(n) {
// 	if (n == "Plural for 0") {
// 		return true;
// 	}
// 	else if (n == "Plural for 0.5") {
// 		return true;
// 	}
// 	else if (n == "Plural for 1") {
// 		return false;
// 	}
// 	else if (n == "Plural for 100") {
// 		return true;
// 	}
// 	else if (n == "Plural for Infinity") {
// 		return true;
// 	}
// }

function plural(n) {
	if (n % 2 == 0 || n == Infinity || n / 2 == 0, 25) {
		return true;
	} else {
		return false;
	}
}

// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(plural(0), true, "Plural for 0");
// Test.assertEquals(plural(0.5), true, "Plural for 0.5");
// Test.assertEquals(plural(1), false, "Plural for 1");
// Test.assertEquals(plural(100), true, "Plural for 100");
// Test.assertEquals(plural(Infinity), true, "Plural for Infinity");

//   });
// });

// alert(1 % 2)

function hello(name) {
	if (!name) { return 'Hello, World!'; }
	return `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`;
}
// Hello, Name or World!

// let count = 0;
// alert(count ?? "fj")

function sum(a, b) {
	return a + b;
}

// let result = sum(1, 2);
// // alert(result);

// function checkAge(age) {
// 	if(age > 18) {
// 		return true;
// 	} else {
// 		return confirm('netru')
// 	}
// }

// let age = +prompt('Skoka let?');

// if( checkAge(age) ) {
// 	alert('poluchen');
// } else {
// 	alert('nepoluchen');
// }

function findNeedle(haystack) {
	let needle = haystack.findIndex(function (value) {
		return value == 'needle';
	});

	if (index === -1) {
		return 'значення "needle" НЕ знайдено в масиві';
	} else {
		return `found the needle at position ${index}`;
	}
}

// findNeedle(['js', 'Janaksn', 'UHHG', 'needle']);

let func = (arg1, arg2, arg3) => arg1 + arg2 + arg3;
// console.log(func(1, 1, 1));

// let age = parseInt(prompt('skoka let?'));

// let welcome = (age > 18) ? 
// () => alert('zdraste') :
// () => alert('privet');

// welcome()

let ask = (question, yes, no) => {
	(confirm(question)) ? yes() :
		no();
	return ask;
}

// ask("Вы согласны?", () => {alert("Вы согласились.")}, () => {alert("Вы отменили.")});

let dfk = +false; //0
console.log(dfk);

// ОПЕРАТОР НУЛЕВОГО СЛИЯНИЯ
let y;
console.log(y ?? 'und')

// СТРОГОЕ СРАВНЕНИЕ
let x1 = '1'
let y1 = 1;

if (x1 == y1) { //lali
	console.log('lali')
} else {
	console.log('lale')
}

if (x1 === y1) { //lale
	console.log('lali')
} else {
	console.log('lale')
}
// DO WHILE
console.log("вывод чисел до 5, кроме 3");

let i = 0;

do {
	i = i + 1;
	if (i === 3) {
		continue;
	}
	console.log(i);
} while (i < 5);

console.log("сумма всех чисел четных которые < 10");
let sumAllNums10 = () => {
	let num = 0;
	let sum = 0;

	do {
		num++;
		if (num % 2 !== 0) {
			continue;
		}
		sum += num;
	} while (num < 10);

	console.log(sum);
	return sum;
}

sumAllNums10();

// обьекты

console.log("обьекты");

let objects = () => {
	let user = {     // объект
		name: "John",  // под ключом "name" хранится значение "John"
		age: 30,        // под ключом "age" хранится значение 30
	};
	let key = prompt("Что вы хотите узнать о пользователе?", "name");
	alert(user[key]);
	console.log("Что будет если вписать просто имя обьекта: " + user);
	console.log("Имя: " + user.name);
	console.log("Лет: " + user.age);
	delete user.age;
	console.log("Лет: " + user.age + " Вывод после удаления"); // undefined

	const test = {
		name: "Jhon",
	}
	test.name = "Pete";
	console.log("Вывод обьекта const с изменением её содержимого: " + test.name);

	let fruit = prompt("Какой фрукт купить?", "apple");
	// let bag = {
	// 	[fruit] : 5,
	// };

	// let bag = {};

	// bag[fruit] = 5;
	// console.log(bag.apple)
	let bag = {
		[fruit + 'Computers']: 5,
		['a' + 'b']: 3,
	};
	console.log(bag.appleComputers)
	console.log(bag.ab)
}

// objects();

function makeUser(name, age) {
	return {
		name: name,
		age: age
	};
}

let users = makeUser("John", 30);
// alert("age" in user)
// alert("blfblfkblfblfhgbk" in user);
console.log(users.name)

let user = {
	name: "John",
	age: 30,
	isAdmin: true
};

for (let key in user) {
	console.log(key);
	console.log(user[key]);
}

console.log("Ссылки на обьект");

let objectsLink = () => {
	let user = { name: "John" };

	let admin = user;

	admin.name = "Pete";

	console.log(user.name);

	let trueOrFalse = () => {
		let a = {};
		let b = a;

		console.log(a == b); // true
		console.log(a === b); // true
	}
	let trueOrFalseS = () => {
		let a = {};
		let b = {};

		console.log(a == b); // false
		console.log(a === b); // false
	}

	trueOrFalse();
	trueOrFalseS();
}
objectsLink();

let cloneObjWithCicle = () => {
	let user = {
		name: "John",	// ключ name
		age: 30,		// ключ age
	}

	let clone = {};
	for (let i in user) {
		clone[i] = user[i];
	}

	clone.name = 'Pete';
	console.log(user.name);
	console.log(clone.name);
}

cloneObjWithCicle();

let cloneObjWithAssign = () => {
	let user = {
		name: "John",
		age: 30,
	}

	let permissions1 = { canView: true };
	let permissions2 = { canEdit: true };

	Object.assign(user, [permissions1, permissions2]);

	console.log(user);
}

cloneObjWithAssign();

let objectMethodThis = () => {
	let user = {
		name: "John",
		age: 30,
	}
	let admin = {
		name: "Admin",
		age: 30,
	}
	function sayHi() {
		// console.log(this.name);
		// this.name = prompt()
	}
	user.func = sayHi;
	admin.ojdgf = sayHi;
	admin.ojdgf();
	user.func();
}

// objectMethodThis();

function calcu() {
	let calculator = {
		a: 0,
		b: 0
	}

	function read() {
		this.a = +prompt('a');
		this.b = +prompt('b');
	}

	function sum() {
		return this.a + this.b;
	}

	function mul() {
		return this.a * this.b;
	}

	calculator.read = read;
	calculator.sum = sum;
	calculator.mul = mul;

	calculator.read();
	alert(calculator.sum());
	alert(calculator.mul());
}

// calcu();

function ladder() {
	let ladder = {
		step: 0,
		up() {
			this.step++;
			return this;
		},
		down() {
			this.step--;
			return this;
		},
		showStep: function () { // показывает текущую ступеньку
			alert(this.step);
			return this;
		}
	};

	ladder.up().up().down().showStep().down().showStep();
}

// ladder();

// new

console.log("new");

function learnNew() {
	function User(name, trueOrFalse) {
		this.name = name;
		this.isAdmin = trueOrFalse;
	}
	let user = new User('Jack', 1);
	console.log(user.name);
	console.log(user.isAdmin);
	function newUser(name) {
		if (!new.target) {
			return new User(name);
		}
		this.name = name;
	}
	let jhon = newUser('Jhon');
	console.log(jhon.name);
	function BigUser() {
		this.name = 'Jhon';
		return { name: 'Adolf Hitler' }
	}
	console.log(new BigUser().name);
	function smallUser() {
		this.name = 'Jhon';
		return;
	}
	console.log(new smallUser().name);
	function UserSayHi(name) {
		this.name = this.name;
		this.sayHi = function () {
			console.log('Say Hi ');
		}
	}
	let jo = new UserSayHi('Jho');
	jo.sayHi();
}

// learnNew();


function opcionalChaining() {
	let user = {};
	alert(user?.address?.street);
}

// opcionalChaining();

let optionalChaining2 = () => {
	let user = undefined;
	let x = 0;

	user?.sayHi(x++);

	alert(x);
}

// optionalChaining2();

let optionalChaining3 = () => {
	let userAdmin = {
		admin() {
			alert('admin');
		}
	};

	let userGuest = {};

	userAdmin.admin?.();
	userGuest.admin?.();
}

// optionalChaining3();

let optionalChaining4 = () => {
	let key = 'firstName';

	let user1 = {
		firstName: 'Jhon',
	}

	let user2 = null;

	alert(user1?.[key]);
	alert(user2?.[key]);
}

// optionalChaining4();

let Symbols = () => {
	let user = {
		name: "Вася",
	}

	let id = Symbol('id');

	user[id] = 1;

	alert(user[id]);
}

function primitive() {
	let user = {
		name: 'Jhon',
		money: 1000,

		[Symbol.toPrimitive](hint) {
			alert(`hint: ${hint}`);
			return hint == 'string' ? `{name: "${this.name}"}` : this.money;
		}
	};
	alert(user);
	alert(Number(user));
	alert(user + 555);
}

// primitive();

function methodsOfprimitives() {
	let str = 'Привет';
	let num = 1.23424;

	alert(str.toUpperCase());
	alert(str.toLowerCase());
	alert(num.toFixed(2)); // округление до n знаков после запятой
}

// methodsOfprimitives();

function numbers() {
	let billion = 1e9;
	console.log(billion);

	let num10 = 1e-6;
	console.log(num10);

	let num2 = 0b1111011;
	console.log(num2);

	let num8 = 0o116;
	console.log(num8);

	let num1 = 12323323;
	console.log(num1.toString(16));
	console.log(num1.toString(36));

	let num = 12.13;
	console.log(Math.floor(num)); // округление в меньшую сторону
	console.log(Math.ceil(num)); // округление в большую сторону
	console.log(Math.round(num)); // округление по правилам
	console.log(Math.trunc(num)); // удаление дробной части, не поддерживается в IE
	console.log(num.toFixed(1)); // округление до n знаков после запятой

	console.log(isNaN(NaN));
	console.log(isNaN('str'));

	// alert(NaN === NaN); false

	console.log(Number.isFinite('15'));
	console.log(isFinite('15'));
	alert(isFinite('str'));
	alert(isFinite(Infinity));

	let numPrompt = +prompt('Введите число', '');

	alert(isFinite(numPrompt));

	let trueOrfalse = Object.is(NaN, NaN); // true
	console.log(trueOrfalse);
}

// numbers();

function parseIntAndParseFloat() {
	alert(parseInt('100px'));
	alert(parseFloat('12.5em'));
	alert(parseInt('12.3'));
	alert(parseFloat('12.3.4'));

	alert(parseInt('ff', 16));
}

// parseIntAndParseFloat();

function mathMethods() {
	alert(Math.random());

	alert(Math.max(3, 5, 1, 7));
	alert(Math.min(3, 5, 1, 7));

	alert(Math.pow(2, 3));
}

// mathMethods();

function strings() {
	let single = 'single-quoted';
	let double = "double-quoted";

	let backticks = `backticks`;

	alert("I\"m the best");
	alert("The backslash: \\");
	alert(`My\n`.length);

	let guestList = `Guests:
	*	John
	*	Pete
	*	Mary
	`;

	let guestList2 = "Guests:\n * John\n * Pete\n * Mary";

	alert(guestList2);
	alert(guestList);
}

// strings();

function sum(a, b) {
	return a + b;
}

// alert(`1 + 2 = ${sum(1, 2)}`);

let stringsMethods = () => {
	let str = 'Hello';

	alert(str[0]);
	alert(str.at(0));
	alert(str[str.length - 1]);
	alert(str.at(-1));
}

// stringsMethods();

function stringItaration() {
	for (let char of 'Hello') {
		alert(char);
	}
}

// stringItaration();

function findString() {
	let str = 'Widget with id';

	alert(str.indexOf('Widget'));
	alert(str.indexOf('widget'));
	alert(str.indexOf('id'));
	alert(str.indexOf('id', 2));
}

// findString();

function findString2() {
	let str = 'Ослик Иа-Иа посмотрел на виадук';

	let target = 'Иа';

	let pos = 0;

	while (true) {
		let foundPos = str.indexOf(target, pos);
		if (foundPos == -1) break;

		alert(`Найдено тут: ${foundPos}`);
		pos = foundPos + 1;
	}
}

// findString2();

function findString3() {
	let str = 'Widget with id';

	if (str.indexOf('Widget') != -1) {
		alert('Содержит');
	}
}

// findString3();

function findString4() {
	alert('Widget with id'.includes('Widget'));

	alert('hello'.includes('bye'));

	alert('Midget'.includes('id', 3));

	alert('Widget'.startsWith('Wid'));
	alert('Widget'.endsWith('get'));
}

// findString4();

let piceOfString = () => {
	let str = 'stringify';

	alert(str.slice(0, 5)); // НЕ ВКЛЮЧАЯ 5
	alert(str.slice(0, 1)); // не влючая 1

	alert(str.slice(2)); // с 2 до конца

	alert(str.slice(-4, -1)); // с 4 с конца до 1 с конца

	alert(str.substring(2, 6)); // 2 - 6
	alert(str.substring(6, 2)); // 2 - 6

	alert(str.substr(2, 4)); // 2 - 4

}

// piceOfString();

function simbolsCode() {
	// alert('z'.codePointAt(0));

	// alert(String.fromCodePoint(90));

	let str = '';

	for (let i = 65; i <= 220; i++) {
		str += String.fromCodePoint(i);
	}
	alert(str);
}

// simbolsCode();

function ucFirst(str) {
	let allSimb = str.slice(1);
	console.log(allSimb);
	let firstSimb = str[0].toUpperCase();
	str = firstSimb + allSimb;
	console.log(str);
	return str;
}

// ucFirst('вася')

function checkSpam(str) {
	let lowerStr = str.toLowerCase();

	if (lowerStr.includes('viagra') || lowerStr.includes('xxx')) {
		return true;
	}
}

// alert( checkSpam('buy ViAgRA now') );
// alert( checkSpam('free xxxxx') );
// alert( checkSpam("innocent rabbit") );

function trun(str, maxlength) {
	if (str.length > maxlength) {
		return str.slice(0, maxlength - 1) + "...";
	} else {
		return str;
	}
}

// console.log(trun('dfkd', 3));

function extractCurrencyValue(str) {
	return str.slice(1);
}

// console.log(extractCurrencyValue('$120'));

function arrays() {
	let fruits = ["Яблоко", "Апельсин", "Слива"];

	alert(fruits[0]);
	alert(fruits[1]);
	alert(fruits[2]);

	fruits[2] = 'Груша';

	fruits[3] = 'Лимон';

	alert(fruits[0]);
	alert(fruits[1]);
	alert(fruits[2]);
	alert(fruits[3]);

	alert(fruits);

	alert(fruits.length);

	let arr = ['Яблоко', { name: 'Джон' }, true, function (jk) { alert(jk); }];

	alert(arr[1].name);
	arr[3](23); // вызов функии массива

	alert(fruits.at(2));
}

// arrays();

function arraysMethods() {
	let arr = ["Яблоко", "Апельсин", "Слива"];

	alert(arr.pop());

	alert(arr);

	alert(arr.push("Груша"));

	alert(arr);

	alert(arr.shift());

	alert(arr);

	alert(arr.unshift('Слива'))

	alert(arr);
}

// arraysMethods();

function arraysMethods2() {
	let fruits = ['Banan'];

	let arr = fruits;

	alert(arr == fruits);

	arr.push('Груша');

	alert(fruits);

	for (let fruit of fruits) {
		alert(fruit);
	}
}

// arraysMethods2();

function multidimensionalArrays() {
	let matrix = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9]
	];

	alert(matrix[1][1]);

	let arr = [1, 2, 3];

	alert(arr);
	alert(String(arr) === '1,2,3')
}

// multidimensionalArrays();

function arraysMethods3() {
	let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];

	// arr.splice(1, 1); // начная с первого элемента удалить 1 элемент
	// arr.splice(0, 3, "Davay", "Tanzevatb") // начиная с 0 элемента удалоить 3 и добавить 2 элемента
	// arr.splice(2, 0, "slozhni", "yazik"); // начиная со 2 элемента удалить 0, и добавить 2 

	alert(arr.slice(1, 3)) // с первого по третий не считая 3, тоесть промежу но считая 1


	alert(arr);
}

// arraysMethods3();

function arraysMethods4() {
	let arr = [1, 2];

	alert(arr.concat([3, 4], [5, 5])); // обьеденение массивов или создание новых с добавлением аргументов
}

// arraysMethods4();

function arraysMethod5() {
	["Бильбо", "Гэндальф", "Назгул"].forEach((item, index, array) => {
		alert(`У ${item} индекс ${index} в ${array}`);
	});

	["Бильбо", "Гэндальф", "Назгул"].forEach(alert);
}

// arraysMethod5()

function searchInArray() {
	let arr = [1, 0, false];

	alert(arr.indexOf(0));
	alert(arr.indexOf(false));
	alert(arr.indexOf(null));

	alert(arr.includes(1));
}

// searchInArray();

function searchInArray2() {
	let fruits = ["Яблоко", "Апельсин", "Яблоко"];

	alert(fruits.indexOf("Яблоко"));
	alert(fruits.lastIndexOf("Яблоко"));

	const arr = [NaN];

	alert(arr.indexOf(NaN)); // -1 index: 0
	alert(arr.includes(NaN)); // true
}

// searchInArray2();

function searchInArray3() {
	let users = [
		{ id: 1, name: "Вася" },
		{ id: 2, name: "Петя" },
		{ id: 3, name: "Маша" }
	];


	let user = users.find(item => item.id == 1);
	alert(user.name);
}

// searchInArray3();

function searchInArray4() {
	let users = [
		{ id: 1, name: "Вася" },
		{ id: 2, name: "Петя" },
		{ id: 3, name: "Маша" }
	];

	let someUsers = users.filter(item => item.id < 3);

	alert(someUsers.length);
}

// searchInArray4();

function arrayTrans() {
	let length = ["Бильбо", "Гэндальф", "Назгул"].map(item => item.length);
	alert(length); // преобразование каждого элемента в длину

	let arr = [1, 2, 15];

	function compare(a, b) {
		if (a > b) return 1;
		if (a == b) return 0;
		if (a < b) return -1;
	}

	arr.sort(compare);

	alert(arr);

	console.log(arr.reverse());

	let names = 'Вася, Петя, Маша';

	let nameArr = names.split(', ', 2);

	for (let name of nameArr) {
		alert(`Сообщение получат ${name}`);
	}

	let str = 'test'.split('').forEach(alert);
}

// arrayTrans();

function arrayTrans2() {
	let arr = ["Вася", "Петя", "Маша"];

	let str = arr.join(" Гей ");
	alert(str)
}

// arrayTrans2();

function arrayTrans3() {
	let arr = [1, 2, 3, 4, 5];

	let result = arr.reduce((sum, current) => sum + current, 0);

	alert(result);
	alert(Array.isArray(arr));
}

// arrayTrans3();

function camelize(str) {
	return str.split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
}

console.log(camelize("background-color"));

function iterableObjects() {
	let range = {
		from: 1,
		to: 10
	};

	range[Symbol.iterator] = function () {
		return {
			current: this.from,
			last: this.to,

			next() {

				if (this.current <= this.last) {
					return { done: false, value: this.current++ }
				} else {
					return { done: true };
				}
			}
		};
	};

	for (let num of range) {
		alert(num);
	}
}

// iterableObjects();

function iterableStrings() {
	for (let char of 'test') {
		alert(char);
	}
}

// iterableStrings();

function iterableStrings2() {
	let str = 'Hello';

	let iterator = str[Symbol.iterator]();

	while (true) {
		let result = iterator.next();
		if (result.done) break;
		alert(result.value)
	}
}

// iterableStrings2();

function createArray() {
	let arrayLike = {
		0: "Hello",
		1: "World",
		length: 2
	};

	let arr = Array.from(arrayLike);
	alert(arr.pop());
	alert(arr.length);
	alert(arr)
}

// createArray();

function iterableObjects2() {
	let range = {
		from: 1,
		to: 10
	};

	range[Symbol.iterator] = function () {
		return {
			current: this.from,
			last: this.to,

			next() {

				if (this.current <= this.last) {
					return { done: false, value: this.current++ }
				} else {
					return { done: true };
				}
			}
		};
	};

	let arr = Array.from(range);
	alert(arr);
}

// iterableObjects2();

function maps() {
	let map = new Map();

	map.set("1", "str1");
	map.set(1, "num1");
	map.set(true, "bool1");

	alert(map.get(1));
	alert(map.get("1"));
	alert(map.get(true));
	alert(map.has(1));
	alert(map.has(9));

	alert(map.size);

	let jhon = { name: "Jhon" };

	let visitsCountMap = new Map();

	visitsCountMap.set(jhon, 123);

	alert(visitsCountMap.get(jhon));
}

// maps();

function mapsIteration() {
	let recipeMap = new Map([
		["огурец", 500],
		["помидор", 350],
		["лук", 50]
	]);

	for (let vegetable of recipeMap.keys()) { // перебор по ключам
		alert(vegetable);
	}

	for (let amount of recipeMap.values()) { // перебор по значениям
		alert(amount);
	}

	for (let entry of recipeMap) { //перебор парами
		alert(entry);
	}

	recipeMap.forEach((value, key, map) => {
		alert(`${key}: ${value}`);
	})
}

// mapsIteration();

function ObjectsToMaps() {
	let obj = {
		name: "Jhon",
		age: 30
	};

	let map = new Map(Object.entries(obj));

	alert(map.get('name'));
}

// ObjectsToMaps();

function MapsToObjects() {
	let map = new Map();
	map.set('banana', 1);
	map.set('orange', 2);
	map.set('meat', 4);

	let obj = Object.fromEntries(map.entries());

	alert(obj.orange);
}

// MapsToObjects();

function sets() {
	let set = new Set();

	let john = { name: "John" };
	let pete = { name: "Pete" };
	let mary = { name: "Mary" };

	set.add(john);
	set.add(pete);
	set.add(mary);
	set.add(john);
	set.add(mary);

	alert(set.size);

	for (let user of set) {
		alert(user.name);
	}
}

// sets();

let perebor_set = () => {
	let set = new Set(["apelsin", "yabloko", "banan"]);

	for (let value of set) alert(value);

	set.forEach((value, valueAgain, set) => {
		alert(value);
	})
}

// perebor_set();

function unique(arr) {
	return Array.from(new Set(arr));
}

function WeakMaps() {
	let jhon = { name: "Jhon" };

	let weakMap = new WeakMap();
	weakMap.set(jhon, "...");

	jhon = null;
}

// WeakMaps();

function multiple(x) {
	if (x % 5 === 0 && x % 3 === 0) {
		return 'BangBoom';
	} else if (x % 5 === 0) {
		return "Boom";
	} else if (x % 3 === 0) {
		return "Bang";
	} else {
		return "Miss";
	}
}

// console.log(multiple(30));

function typeOfSum(a, b) {
	let sum = a + b;
	return typeof (sum);
}

console.log(typeOfSum(2, 2))

function colorOf(r, g, b) {
	//coding here
	r = r.toString(16).padStart(2, "0");
	g = g.toString(16).padStart(2, "0");
	b = b.toString(16).padStart(2, "0");

	return `#${r + g + b}`;
}

// console.log(colorOf(255, 0, 0));

function rainAmount(mm) {
	if (mm < 40) {
		return `You need to give your plant ${40 - mm} mm of water`
	}
	else if (mm >= 40) {
		return "Your plant has had more than enough water for today!"
	};
}

// console.log(rainAmount(39))

function isLucky(ticket) {
	let res;

	if (ticket.length === 6) {

		let firstP = +ticket.slice(0, 1);
		let SecondP = +ticket.slice(1, 2);
		let ThirtP = +ticket.slice(2, 3);
		let FourP = +ticket.slice(3, 4);
		let FiveP = +ticket.slice(4, 5);
		let SixP = +ticket.slice(5, 6);

		(firstP + SecondP + ThirtP === FourP + FiveP + SixP) ? (res = true) : (res = false);

		// console.log(firstP);
		// console.log(SecondP);
		// console.log(ThirtP);
		// console.log(FourP);
		// console.log(FiveP);
		// console.log(SixP);
	} else {
		return false;
	}

	return res;
}

// console.log(isLucky('123321'))

function power(x, y) {
	//SHOW ME WHAT YOU GOT!
	let result = 1;

	for (let i = 0; i < y; i++) {
		result *= x;
	}

	return result;
}

// console.log(power(5, 2));

// jquery

let visitsCountMap = new WeakMap();

function countUser(user) {
	let count = visitsCountMap.get(user) || 0;
	visitsCountMap.set(user, count + 1)
}

let cache = new WeakMap();

function process(obj) {
	if (!cache.has(obj)) {
		let result = obj;

		cache.set(obj, result);
	}

	return cache.get(obj);
}

let obj = {};

let result1 = process(obj);
let result2 = process(obj);

obj = null;

$(document).ready(function () {

	$('#closeAd').click(function () {
		$('.ad').hide();

	});

});


function smallEnough(a, limit) {
	let result = a.every(x => x <= limit);
	return result;
} // проерка на соответствие в массиве

function typing(param) {
	if (typeof (param) == 'boolean') {
		return `boolean=${param}`
	} else if (typeof (param) == 'number') {
		return `number=${param}`
	} else if (typeof (param) == 'string') {
		return `string="${param}"`;
	} else if (Array.isArray(param)) {
		return `object=[${param}]`
	} else if (typeof (param) == 'object') {
		return `object=${JSON.stringify(param)}`
	} else if (typeof (param) == 'function') {
		return `function=${param}`
	} else if (typeof (param) == 'undefined') {
		return "undefined";
	}
}

let objdfdf = {
	hello: 'world',
}

console.log(objdfdf)

console.log(typing(new Object({ hello: 'world', })));

function solution(number) {
	let mult = [];
	for (let i = 3; i < number; i++) {
		if (i % 3 === 0 || i % 5 === 0) mult.push(i);
	}
	return mult.reduce((acc, c) => acc + c, 0)
}

function calculate(a, o, b) {
	var result = 0;

	if (b == 0 && o == '/') {
		return null;
	}

	if (o == "+") {
		result = a + b;
	} else if (o == "-") {
		result = a - b;
	} else if (o == "/") {
		result = a / b;
	} else if (o == "*") {
		result = a * b;
	} else {
		return null;
	}

	return result;
}

console.log(calculate(1, '/', 0));

function sumSalaries(salaries) {
	let sumArr = Object.values(salaries);
	let sum = 0;

	for (let obj of sumArr) {
		sum += obj;
	}

	return sum;
}

console.log(sumSalaries({
	"John": 100,
	"Pete": 300,
	"Mary": 250
}));

// function sumSalaries(salaries) {
// 	return Object.values(salaries).reduce((a, b) => a + b, 0) // 650
// }

function count(obj) {
	let sv = Object.keys(obj);

	return sv.length;
}

console.log(count({
	name: 'John',
	age: 30,
	jh: 223
}))

function arrDestructuring() {
	let arr = ["Ilya", "Kantor"];

	let [firstName, surname] = arr;

	alert(firstName);
	alert(surname);

	firstName = 0;

	alert(firstName);

	let user = {};
	[user.name, user.surname] = 'Ilya Kantor'.split(' ');

	alert(user.name);
	alert(user.surname);
}

// arrDestructuring(); // пропускать элементы можно используя , , \

function loopDestraction() {
	// let user = {
	// 	name: 'John',
	// 	age: 30,
	// 	num: 380661365089
	// };

	// for (let [key, value] of Object.entries(user)) {
	// 	alert(`${key}:${value}`);
	// }

	let userM = new Map();
	userM.set("name", "John");
	userM.set("age", "30");

	for (let [key, value] of userM) {
		alert(`${key}:${value}`);
	}
}

// loopDestraction();

function changeVars() {
	let guest = "Jane";
	let admin = "Pete";

	[guest, admin] = [admin, guest];

	alert(`${guest} ${admin}`)
}

// changeVars();

function arrDestructuring2() {
	let [name1, name2, ...rest] = ["Julies", "Caesar", "dfdf", 34, function () { alert(234) }];

	alert(rest[0]);
	alert(rest[1]);
	alert(rest.length);
}

// arrDestructuring2();

function objDestructing() {
	let options = {
		title: "Menu",
		width: 100,
		height: 200
	};

	let { title, width, height } = options;

	alert(title);
	alert(width);
	alert(height);

	let { title: t, width: w, height: h } = options;

	alert(t);
	alert(w);
	alert(h);
}

// objDestructing();

function NestedDestructuring() {
	let options = {
		size: {
			width: 100,
			height: 200
		},
		items: ["Cake", "Donut"],
		extra: true
	};

	let { size: {
		width,
		height
	},

		items: [item1, item2],
		title = "Menu"
	} = options;

	alert(title);
	alert(width);
	alert(height);
	alert(item1);
	alert(item2);
}

// NestedDestructuring();

let options = {
	title: "My menu",
	items: ["Item1", "Item2"]
};

// ...и она немедленно извлекает свойства в переменные
function showMenu({ title = "Untitled", width = 200, height = 100, items = [] }) {
	// title, items – взято из options,
	// width, height – используются значения по умолчанию
	alert(`${title} ${width} ${height}`); // My Menu 200 100
	alert(items); // Item1, Item2
}

function dates() {
	let now = new Date();
	alert(now);

	let Jan01_1970 = new Date(0);
	alert(Jan01_1970);

	let Jan02_1970 = new Date(24 * 3600 * 1000);
	alert(Jan02_1970);

	let date = new Date("2017-01-26");
	alert(date);

	alert(now.getFullYear()); // получить полні год
	alert(now.getMonth()); // получить месяц 0 - 11
	alert(now.getDate()); // получить день месяца от 0 до 31
	alert(now.getHours()); // получить часы
	alert(now.getMinutes()); // получить минуты
	alert(now.getSeconds()); // получить секунеды
	alert(now.getMilliseconds()); // получить миллисекунды
	alert(now.getDay()); // получить день от 0 (воскресенье) до 6 (субота)
	alert(now.getTime()); // Для заданной даты возвращает таймстамп – количество миллисекунд, прошедших с 1 января 1970 года UTC+0.

	alert(new Date().getTimezoneOffset()); // разница между поясом utc и местным
}

// dates();

function installDates() {
	let today = new Date();

	today.setHours(0);
	alert(today);

	today.setHours(0, 0, 0, 0)
	alert(today);
}

// installDates();

let autoCorrectDates = () => {
	let date = new Date(2013, 0, 33); // тк в январе не 33 дня, а 31, то перенроситься все на месяц вперед и +2 дня
	alert(date);
}

// autoCorrectDates();

let autoCorrectDates2 = () => {
	let date = new Date(2016, 1, 28);
	date.setDate(date.getDate() + 2);

	alert(date);
}

// autoCorrectDates2();

function datesToNum() {
	let start = new Date();

	for (let i = 0; i < 100000; i++) {
		let doSomething = i * i * i;
	}

	let end = new Date();

	alert(`Цикл оработал за ${end - start} миллисекунд`);
}

// datesToNum();

function datesToNum1() {
	let start = Date.now(); // количество миллисекунд с 1 января 1970 года

	// выполняем некоторые действия
	for (let i = 0; i < 100000; i++) {
		let doSomething = i * i * i;
	}

	let end = Date.now(); // заканчиваем отсчёт времени

	alert(`Цикл отработал за ${end - start} миллисекунд`);
}

// datesToNum1();

function diffSubtract(date1, date2) {
	return date2 - date1;
}

function diffGetTime(date1, date2) {
	return date2.getTime() - date1.getTime();
}

function bench(f) {
	let date1 = new Date(0);
	let date2 = new Date();

	let start = Date.now();
	for (let i = 0; i < 100000; i++) f(date1, date2);
	// return Date.now() - start;
}

let time1 = 0;
let time2 = 0;

// bench(diffSubtract) и bench(diffGetTime) поочерёдно запускаются 10 раз
for (let i = 0; i < 10; i++) {
	time1 += bench(diffSubtract);
	time2 += bench(diffGetTime);
}

// alert('Итоговое время diffSubtract: ' + time1);
// alert('Итоговое время diffGetTime: ' + time2);

function dateToString() {
	let ms = Date.parse('2012-01-26T13:51:50.417-07:00');

	alert(ms);
}

// dateToString();

let date = new Date(2012, 1, 20, 3, 12);

// console.log(date);

function jsonType() {
	let student = {
		name: 'John',
		age: 30,
		isAdmin: false,
		courses: ['html', 'css', 'js'],
		wife: null
	}

	let json = JSON.stringify(student);

	alert(typeof json);
	alert(json);

	// число остаеться числом

	alert(JSON.stringify(1));

	// строка остаеться строкой, но уже в двойных кавычках

	alert(JSON.stringify('test'));

	alert(JSON.stringify(true));

	alert(JSON.stringify([1, 2, 3]));

	let user = {
		sayHi() {
			alert('hello');
		},
		[Symbol("id")]: 123,
		something: undefined,
	};

	alert(JSON.stringify(user)); // пустой обьект
}

// jsonType();

function jsonType2() {
	let room = {
		number: 23
	};

	let meetup = {
		title: "Conference",
		participants: [{ name: "John" }, { name: "Alice" }],
		place: room // meetup ссылается на room
	};

	room.occupiedBy = meetup; // room ссылается на meetup

	alert(JSON.stringify(meetup, ['title', 'participants']));
	// {"title":"Conference","participants":[{},{}]}
}

// jsonType2();

function jsonType3() {
	let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

	let meetup = JSON.parse(str, function (key, value) {
		if (key == 'date') return new Date(value);
		return value;
	});

	alert(meetup.date.getDate());
}

// jsonType3();

function jsonType4() {
	let user = {
		name: "Василий Иванович",
		age: 35
	};

	let json = JSON.stringify(user);
	alert(json);

	alert(JSON.parse(json));
}

// jsonType4();

function pow(x, n) {
	return (n === 1) ? x : (x * pow(x, n - 1));
}

let company = { // тот же самый объект, сжатый для краткости
	sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
	development: {
		sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
		internals: [{ name: 'Jack', salary: 1300 }]
	}
};

function sumSalaries(department) {
	if (Array.isArray(department)) { // случай (1)
		return department.reduce((prev, current) => prev + current.salary, 0); // сумма элементов массива
	} else { // случай (2)
		let sum = 0;
		for (let subdep of Object.values(department)) {
			sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
		}
		return sum;
	}
}

// alert(sumSalaries(company));

function sumAll(...args) {
	let sum = 0;

	for (let arg of args) sum += arg;

	return sum;
}


function showName(firstName, lastName, ...titles) {
	alert(firstName + ' ' + lastName);

	alert(titles);
}

// showName('Юлий', "Цезарь", "Консул", "Император");

function funcArg() {
	return arguments;
}

// alert(funcArg('fgfgfg', 3, 4, 5, 76, 3456));

function MathMaxForArr(n) {
	return (Math.max(...n)); // оператор расширения переделывает массив на список аргументов
}

// alert(MathMaxForArr([1, 2, 3]));

let chars = Math.random();

// console.log(chars)

// {
// 	let message = 'Hello World';

// 	alert(message);
// }

function sayHiBye(firstName, lastName) {

	// функция-помощник, которую мы используем ниже
	function getFullName() {
		return firstName + " " + lastName;
	}

	alert("Hello, " + getFullName());
	alert("Bye, " + getFullName());

}

function yaPiDoor() {
	alert('hi');
}

// alert(yaPiDoor.name);

let pidoras = function () {
	alert('hi');
}

// alert(pidoras.name);

function f(sayHi = function () { }) {
	alert(sayHi.name);
}

// f();

let gay = {
	sayHi() {

	},

	sayBye: function () {

	}
}

// alert(gay.sayHi.name);
// alert(gay.sayBye.name);

function godzila(g, o, y, d, a) {

}

// alert(godzila.length);

let suka = new Function('a', 'b', 'return a + b');

// alert( suka(1, 2) );

function sayGay() {
	alert('gay');
}

// setTimeout(sayGay, 1000);

function sayPrase(phrase, who) {
	alert(phrase + ', ' + who);
}

// setTimeout(sayPrase, 1000, "Hi", "Jhon");

// let timerId = setInterval(() => alert('tick'), 2000);

// остановить вывод через 5 секунд
// setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);

hello = () => {
	let user = {
		firstName: "Вася"
	};

	function func() {
		alert(this.firstName);
	}

	let funcUser = func.bind(user);
	funcUser();

	function func1(phrase) {
		alert(phrase + ',' + this.firstName);
	}

	let funcUser1 = func.bind(user);
	funcUser("Привет");
}

// hello();

hello1 = () => {
	let user = {
		firstName: "Вася",

		sayHi() {
			alert(`Привет, ${this.firstName}!`);
		}
	};

	let sayHi = user.sayHi.bind(user);

	sayHi();

	setTimeout(sayHi, 1000);
}

// hello1();

function flagsAndDescriptors() {
	let user = {
		name: 'motto',
	}

	let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

	alert(JSON.stringify(descriptor, null, 2));
}

// flagsAndDescriptors();

function flagsAndDescriptors2() {
	let user = {};

	Object.defineProperty(user, "name", {
		value: "John"
	});

	let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

	alert(JSON.stringify(descriptor, null, 2));
}

// flagsAndDescriptors2();

function flagsAndDescriptors3() {
	let user = {
		name: "Jhon"
	}

	Object.defineProperty(user, "name", {
		writable: false
	});

	user.name = "Pete"; // не измениться тк утсновлено только для чтения

	alert(user.name)
}

// flagsAndDescriptors3();

function flagsAndDescriptors4() {
	let user = {};

	Object.defineProperty(user, "name", {
		value: "John",
		// если создаем новое свойство то нужно указывать флаги явно, или везде false
		enumerable: true,
		configurable: true
	});

	alert(user.name);
	user.name = "Pete"; // ошибка в строгом, невыполнено в обычном
}

// flagsAndDescriptors4();

function flagsAndDescriptors5() {
	let user = {
		name: "John",
		toString() {
			return this.name;
		}
	};

	Object.defineProperty(user, "toString", {
		enumerable: false,
	});

	for (let key in user) alert(key);
	alert(Object.keys(user));
}

// flagsAndDescriptors5();

function flagsAndDescriptors6() {
	let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');

	alert(JSON.stringify(descriptor, null, 2));
}

// flagsAndDescriptors6(); ошибка тк ошибка конфигурации

function flagsAndDescriptors7() {
	let user = {};

	Object.defineProperties(user, {
		name: { value: "John", writable: false },
		surname: { value: "Smith", writable: false },
	});
}

// flagsAndDescriptors7();

function getterAndSetter() {
	let user = {
		name: "John",
		surname: "Smith",

		get fullName() {
			return `${this.name} ${this.surname}`;
		},

		set fullName(value) {
			[this.name, this.surname] = value.split(" ");
		}
	};

	user.fullName = "Alice Cooper";
	alert(user.fullName);
}

// getterAndSetter();

function getterAndSetter2() {
	let user = {
		name: "John",
		surname: "Smith"
	};

	Object.defineProperty(user, 'fullName', {
		get() {
			return `${this.name} ${this.surname}`;
		},

		set(value) {
			[this.name, this.surname] = value.split(" ");
		}
	});

	alert(user.fullName);

	for (let key in user) alert(key);
}

// getterAndSetter2();

function getterAndSetter3() {
	let user = {
		get name() {
			return this._name;
		},

		set name(value) {
			if (value.length < 4) {
				alert("Имя слишком короткое, должно быть более 4 символов");
				return;
			}
			this._name = value;
		}
	};

	user.name = "Pete";
	alert(user.name);

	user.name = "";
}

// getterAndSetter3();

function getterAndSetter4() {
	function User(name, birthday) {
		this.name = name;
		this.birthday = birthday;

		Object.defineProperty(this, "age", {
			get() {
				let todayYear = new Date().getFullYear();
				return todayYear - this.birthday.getFullYear();
			}
		});
	}

	let john = new User("John", new Date(1992, 6, 1));

	alert(john.birthday);
	alert(john.age);
}

// getterAndSetter4();

function prototypes() {
	let animal = {
		eats: true
	};

	let rabbit = {
		jumps: true
	};

	rabbit.__proto__ = animal;

	alert(rabbit.eats);
	alert(rabbit.jumps);
}

// prototypes();

function prototypes1() {
	let animal = {
		eats: true,
		walk() {
			alert("Animal walk");
		}
	};

	let rabbit = {
		jumps: true,
		__proto__: animal
	}

	rabbit.walk();
}

// prototypes1();

function prototypes2() {
	let animal = {
		eats: true,
		walk() {
			alert("Animal walk");
		}
	};

	let rabbit = {
		jumps: true,
		__proto__: animal
	};

	let longEar = {
		earLength: 10,
		__proto__: rabbit
	};

	longEar.walk();
}

function prototypes3() {
	let animal = {
		eats: true,
		walk() {

		}
	};

	let rabbit = {
		__proto__: animal
	};

	rabbit.walk = function () {
		alert("Rabbit");
	}

	rabbit.walk();
}

// prototypes3();

function prototypes4() {
	let user = {
		name: "John",
		surname: "Smith",

		set fullName(value) {
			[this.name, this.surname] = value.split(" ");
		},

		get fullName() {
			return `${this.name} ${this.surname}`;
		}
	};

	let admin = {
		__proto__: user,
		isAdmin: true
	};

	alert(admin.fullName);

	admin.fullName = "Alice Cooper";
	alert(admin.name);
	alert(admin.surname);
}

// prototypes4();

function prototypes5() {
	let animal = {
		walk() {
			if (!this.isSleeping) { alert('I walk') };
		},
		sleep() {
			this.isSleeping = true;
		}
	};

	let rabbit = {
		name: "White Rabbit",
		__proto__: animal
	};

	rabbit.sleep();

	alert(rabbit.isSleeping);
	alert(animal.isSleeping);
}

// prototypes5();

function prototypes6() {
	let animal = {
		eats: true
	};

	let rabbit = {
		jumps: true,
		__proto__: animal
	};

	alert(Object.keys(rabbit)); // только по собственным ключам

	for (let prop in rabbit) alert(prop); // по всем ключам
}

// prototypes6();

// фильтрация унаследованых и своих

function prototypes7() {
	let animal = {
		eats: true
	};

	let rabbit = {
		jumps: true,
		__proto__: animal
	};

	for (let prop in rabbit) {
		let isOwn = rabbit.hasOwnProperty(prop);

		if (isOwn) alert(`Our: ${prop}`);
		else alert(`Inherited: ${prop}`);
	}
}

// prototypes7();

function prototypes8() {
	let animal = {
		eats: true
	};

	function Rabbit(name) {
		this.name = name;
	}

	Rabbit.prototype = animal;

	let rabbit = new Rabbit("White Rabbit");

	alert(rabbit.eats);
}

// prototypes8();

function prototypes9() {
	function Rabbit(name) {
		this.name = name;
		alert(name);
	}

	let rabbit = new Rabbit("White Rabbit");

	let rabbit2 = new rabbit.constructor("Black Rabbit");
}


function f() {
	alert("Hello!");
}

// f.defer(1000)(1, 2);

function prototypes10() {
	let animal = {
		eats: true
	};

	let rabbit = Object.create(animal);

	alert(rabbit.eats);

	alert(Object.getPrototypeOf(rabbit) === animal);

	Object.setPrototypeOf(rabbit, {});
}

// prototypes10();

function prototypes11() {
	let animal = {
		eats: true
	};

	let rabbit = Object.create(animal, {
		jumps: {
			value: true,
		}
	});

	alert(rabbit.jumps);
}

// prototypes11();

function prototypes12() {
	let animal = {
		eats: true
	};

	let animal2 = {
		eats: false
	};

	let rabbit = Object.create(animal);

	alert(rabbit.eats);

	Object.setPrototypeOf(rabbit, animal2);

	alert(rabbit.eats);
}

// prototypes12();

function classes() {
	class User {
		constructor(name) {
			this.name = name;
		}

		sayHi() {
			alert("Привет " + this.name);
		}
	}

	let user = new User("Иван");
	user.sayHi();
	alert(typeof User);
}

// classes();

function classes1() {
	class User {
		constructor(name) { this.name = name; }
		sayHi() { alert(this.name); }
	}

	alert(typeof User);

	alert(User === User.prototype.constructor);

	alert(User.prototype.sayHi);

	alert(Object.getOwnPropertyNames(User.prototype));
}

// classes1();

function classes2() {
	let User = class MyClass {
		sayHi() {
			alert(MyClass);
		}
	};

	new User().sayHi();

	alert(MyClass); // class isnt defined coz an engine cant see this
}

// classes2();

function classes3() {

	function makeClass(phrase) {
		return class {
			sayHi() {
				alert(phrase);
			};
		};
	}

	let User = makeClass("Привет");

	new User().sayHi();
}

// classes3();


function classes4() {
	class User {
		constructor(name) {
			this.name = name;
		}

		get name() {
			return this._name;
		}

		set name(value) {
			if (value.length < 4) {
				alert("Имя слишком короткое");
				return;
			}
			this._name = value;
		}
	}

	let user = new User("Иван");
	alert(user.name);

	user = new User("");
}

// classes4();

function classes5() {
	class User {
		name = "Аноним";

		sayHi() {
			alert(`Привет, ${this.name}`);
		}
	}

	new User().sayHi();
}

// classes5();

function classes6() {
	class Animal {
		constructor(name) {
			this.speed = 0;
			this.name = name;
		}

		run(speed) {
			this.speed = speed;
			alert(`${this.name} бежит со скоростью ${this.speed}.`);
		}

		stop() {
			this.speed = 0;
			alert(`${this.name} стоит неподвижно.`);
		}
	}

	let animal = new Animal("Мой питомец");

	class Rabbit extends Animal {
		hide() {
			alert(`${this.name} прячется!`);
		}
	}

	let rabbit = new Rabbit("Белый кролик");

	rabbit.run(5);
	rabbit.hide();
}

// classes6();

function classes7() {
	function f(phrase) {
		return class {
			sayHi() { alert(phrase); }
		};
	}

	class User extends f("Привет") { }

	new User().sayHi();
}

// classes7();

function classes8() {
	class Animal {

		constructor(name) {
			this.speed = 0;
			this.name = name;
		}

		run(speed) {
			this.speed = speed;
			alert(`${this.name} бежит со скоростью ${this.speed}.`)
		}

		stop() {
			this.speed = 0;
			alert(`${this.name} стоит.`);
		}
	}

	class Rabbit extends Animal {
		hide() {
			alert(`${this.name} прячется!`);
		}

		stop() {
			super.stop();
			this.hide();
		}
	}

	let rabbit = new Rabbit("Белый кролик");

	rabbit.run(5);
	rabbit.stop();
}

// classes8();

function classes9() { // преопредление конструктора
	class Animal {
		constructor(name) {
			this.speed = 0;
			this.name = name;
		}
	}

	class Rabbit extends Animal {
		constructor(name, earLength) {
			super(name);
			this.earLength = earLength;
		}
	}

	let rabbit = new Rabbit("Белый кролик", 10);
	alert(rabbit.name);
	alert(rabbit.earLength);
}

// classes9();

function classes10() {
	class CoffeMachine {
		waterAmount = 0;

		constructor(power) {
			this.power = power;
			alert(`Создана кофеварка, мощность: ${power}`);
		}
	}

	let coffeMachine = new CoffeMachine(100);
	coffeMachine.waterAmount = 200;
}

// classes10();

function classes11() {
	class CoffeeMachine {
		_waterAmount = 0;

		set waterAmount(value) {
			if (value < 0) throw new Error("Отрицательное количество воды.");
			this._waterAmount = value;
		}

		get waterAmount() {
			return this._waterAmount;
		}

		constructor(power) {
			this._power = power;
		}

		get power() {
			return this._power;
		}
	}

	let coffeeMachine = new CoffeeMachine(100);

	coffeeMachine.waterAmount = 1;

	alert(`Мощность: ${coffeeMachine.power}W`);
}

// classes11();

function classes12() {
	class CoffeeMachine {
		#waterLimit = 200;

		#checkWater(value) {
			if (value < 0) throw new Error("Отрицательный уровен воды");
			if (value > this.#waterLimit) throw new Error("Слишком много воды");
		}

		check(value) {
			this.#checkWater(value);
		}
	}

	let coffeeMachine = new CoffeeMachine();

	coffeeMachine.check(200);
}

// classes12()

function classes13() {
	class PowerArray extends Array {
		isEmpty() {
			return this.length === 0;
		}
	}

	let arr = new PowerArray(1, 2, 5, 10, 50);
	alert(arr.isEmpty());

	let filteredArr = arr.filter(item => item >= 10);
	alert(filteredArr);
	alert(filteredArr.isEmpty());
}

// classes13();

function classes14() {
	class Rabbit { };
	let rabbit = new Rabbit();

	alert(rabbit instanceof Rabbit);
}

function primesi() {
	let sayHiMixin = {
		sayHi() {
			alert(`Привет, ${this.name}`);
		},
		sayBye() {
			alert(`Пока, ${this.name}`);
		}
	};

	class User {
		constructor(name) {
			this.name = name;
		}
	}

	Object.assign(User.prototype, sayHiMixin);

	new User("Вася").sayHi();
}

// primesi();

function primesi1() {
	let sayMixin = {
		say(phrase) {
			alert(phrase);
		}
	};

	let sayHiMixin = {
		__proto__: sayMixin,

		sayHi() {
			super.say(`Привет, ${this.name}`);
		},

		sayBye() {
			super.say(`Пока, ${this.name}`);
		}
	};

	class User {
		constructor(name) {
			this.name = name;
		}
	}

	Object.assign(User.prototype, sayHiMixin);
	new User("Вася").sayHi();
}

// primesi1();
