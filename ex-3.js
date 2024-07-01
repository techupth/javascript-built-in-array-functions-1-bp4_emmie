const todos = [
  { topic: "Doing pre-work", completed: true },
  { topic: "Workout", completed: false },
  { topic: "Playing computer games", completed: true },
  { topic: "Relax", completed: false },
  { topic: "Clean the room", completed: true },
];

function getTodoTopics(todos){
  const todoTopics = todos.map((todo) => {
    return todo.topic;
  });
  return todoTopics;
}
getTodoTopics(todos);
console.log(getTodoTopics(todos));

