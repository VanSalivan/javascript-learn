console.log("start 1"); // первый в стеке
console.log("start 2"); // второй в стеке
setTimeout(function () { // третий в стеке => помещает в web api и после выполнения стека event loop его забирает из callback Queue
    console.log("Это setTimeOut")
}, 0)
setTimeout(function () { // чертвертый в стеке
    console.log("Это setTimeOut2")
}, 1000)
console.log("start 3"); // пятый в стеке


// STACK            WEB API          callback Queue                      STACK
//("start 1")
//("start 2")
//  setTimeout  =>   ждем 0    =>    (функция без имени(анонимная)) =>   ("Это setTimeOut")
//("start 3")
// заканчивается очередь стека("Это setTimeOut")
//
//