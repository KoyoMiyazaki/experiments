const todos = [
    {
        id: 1,
        title: 'Go to school',
        completed: true
    },
    {
        id: 2,
        title: 'Go to museum',
        completed: true
    },
    {
        id: 1,
        title: 'Go shopping',
        completed: false
    }
]

for(let i = 0; i < todos.length; i++) {
    // console.log(todos[i]);
    let todo = todos[i];
    if(todo.completed === true) {
        console.log(todo.title);
    }
    // console.log(todos[i].completed);
}

for(let i in todos) {
    let todo = todos[i];
    if(todo.completed === true) {
        console.log(todo.title);
    }
}

for(let todo of todos) {
    if(todo.completed === true) {
        console.log(todo.title);
    }
}