import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo: ITodo = response.data;
  const id = todo.id;
  const title = todo.title;
  const finished = todo.completed;

  logTodo(id, title, finished);
});

const logTodo = (id: number, title: string, finished: boolean) => {
  console.log(`
  ТУДУ ВИЗ ${id}
  хаз а тайтл: ${title}
  Это конец? ${finished}
   `);
};
