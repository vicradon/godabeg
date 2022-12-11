// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { v4: uuid } = require("uuid");

const sampleTodo = (task = "Some task to be done") => ({
  id: uuid(),
  task,
  is_done: false,
  created_at: Date.now(),
  updated_at: Date.now(),
});

// makeshift database
let todos = [sampleTodo(), sampleTodo("Another task to be done")];

export default function handler(req, res) {
  res.status(200).send({
    data: todos,
    message: "Todos fetched successfully",
  });
}
