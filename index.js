const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());  //enable cors
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let todos = [{id: 0, description: 'Cohen Interview Assignment', dueDate:"10/10/2012", priority: 0, done: false}];

const PORT = process.env.PORT || 3000

app.get('/todos', (req, res) => {
  return res.status(200).send(todos);
});


// add a todo item
app.post('/todos', (req, res) => {
  const { description, priority, dueDate } = req.body;
  const id = todos.length;
  todos.push({id, description, dueDate, priority, done: false});
  return res.status(200).send(todos);
});

// delete a todo item
app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  todos = todos.filter(todo => todo.id != id);
  console.log("todos", id, todos);
  return res.status(200).send(todos);
});

// update a todo item
app.put('/todos/:id', (req, res) => {
  const { id } = req.params;
  const status = req.body.done;
  console.log("req.body.done", status);
  todos.forEach(todo => {

  	if(todo.id == id){
  		todo.done = status;
  	}
  });
  return res.status(200).send(todos);
});

app.listen(PORT, () =>
  console.log(`Example app listening on port ${PORT}!`),
);