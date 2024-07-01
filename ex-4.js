const todos = [
  { topic: "Doing pre-work", completed: true },
  { topic: "Workout", completed: false },
  { topic: "Playing computer games", completed: true },
  { topic: "Relax", completed: false },
  { topic: "Clean the room", completed: true },
];

function getCompletedTodo(todos){
  const completedTodo = todos.filter((todo) => {
    return todo.completed === true;
  });
  return completedTodo;
}

console.log(getCompletedTodo(todos))
