"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (response) {
    var todo = response.data;
    var id = todo.id;
    var title = todo.title;
    var finished = todo.completed;
    logTodo(id, title, finished);
});
var logTodo = function (id, title, finished) {
    console.log("\n  \u0422\u0423\u0414\u0423 \u0412\u0418\u0417 " + id + "\n  \u0445\u0430\u0437 \u0430 \u0442\u0430\u0439\u0442\u043B: " + title + "\n  \u042D\u0442\u043E \u043A\u043E\u043D\u0435\u0446? " + finished + "\n   ");
};
