const todos = [
  { topic: "Doing pre-work", completed: true },
  { topic: "Workout", completed: false },
  { topic: "Playing computer games", completed: true },
  { topic: "Relax", completed: false },
  { topic: "Clean the room", completed: true },
];

  function getCompletedTodo(todos) {
  if (todos.completed==true){
    return todos;
  }
  }
  
  let toDoList = todos.filter(getCompletedTodo);

  console.log(toDoList);
