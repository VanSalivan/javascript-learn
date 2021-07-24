// написать функцию, которая принимает на вход строку вида 'a.b.d.e'
// А возвращает объект вида "{ a: { b: { d: { e: {} } } } }"
// А возвращает объект вида "{ a: { b: { d: { e: {} } } } }"

function foo(str) {

  const arr = str.split('.').reverse();
  const arr2 = arr.concat(str.split('.'));
  const exapmle = arr2.reduce((total, item, index) => {
    return {
      [item]: total,
      deps: arr2.length - index
    }
  }, { deps: arr2.length + 1})

  return exapmle
};

console.log(foo('a.b.d.e'))