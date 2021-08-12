// Boolean
const isFetching: boolean = false;
const isLoading: boolean = true;
// Number
const ini: number = 42;
const float: number = 42;
const num: number = 3e10;
// Array
const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13];
const numberArra2: Array<number> = [1, 1, 2, 3, 5, 8, 13];
const worlds: string[] = ['Hello', 'world'];
const worlds2: Array<string> = ['Hello', 'world'];

//Tuple - явное указание типа по индексу
const contact: [string, number] = ['Alexander', 89389728533];

//Any
let variable: any = 42;
variable = 'new string';
variable = [];

//=====
// Для инструкций используется тип - void - вернет пустоту
function sayMyName(name: string): void {
  console.log(name);
}
sayMyName('Александр');

//Never – указывается в 2х случаях
// 1 – функция возвращает ошибку и никогда не заканчивает свое выполнение
function throwNewError(message: string): never {
  throw new Error(message);
}
// 2 - функция постоянно что-либо делает
function infinite(): never {
  while (true) {
    console.log('Бесконечность');
  }
}

//=====
// Type
type Login = string;
const login: Login = 'admin';
// const login2: Login = 1; // TypeError

type ID = string | number;
const id1: ID = 1234;
const id2: ID = '1234';
// const id3: ID = true; // TypeError

type SomeType = string | null | undefined;
type SomeObj = {
  str: string;
  num: number;
  bool?: boolean; // необязательный параметр
};
