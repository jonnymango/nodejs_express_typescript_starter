import { Request, Response } from 'express';
import { Todo, TodoInput } from '../models/todo.model';

const createTodo = async (req: Request, res: Response) => {
  //const { text, dueDate } = req.body;

  const text = req.body.text;
  const timeStamp = Date.parse(`${req.body.dueDate}`);
  const dueDate = new Date(timeStamp)

  if (!text || !dueDate) {
    return res.status(422).json({
      message: 'The fields text and dueDate are required',
    });
  }

  const todoInput: TodoInput = {
    text,
    dueDate,
  };

  const todoCreated = Todo.create(todoInput);

  return res.status(201).json({ data: todoCreated });
};

const getAllTodos = async (req: Request, res: Response) => {
  const todos = await Todo.find().sort('-createdAt').exec();

  return res.status(200).json({ data: todos });
};

const getTodo = async (req: Request, res: Response) => {
  const { id } = req.params;

  const todo = await Todo.findOne({ _id: id });

  if (!todo) {
    return res.status(404).json({ message: `Todo with id "${id}" not found.` });
  }

  return res.status(200).json({ data: todo });
};

const updateTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { text, dueDate, dateCompleted } = req.body;

  const todo = await Todo.findOne({ _id: id });

  if (!todo) {
    return res.status(404).json({ message: `Todo with id "${id}" not found.` });
  }

  if (!text || !dueDate) {
    return res.status(422).json({ message: 'The fields text and dueDate are required' });
  }

  await Todo.updateOne({ _id: id }, { text, dueDate, dateCompleted });

  const todoUpdated = await Todo.findById(id, { text, dueDate, dateCompleted });

  return res.status(200).json({ data: todoUpdated });
};

const deleteTodo = async (req: Request, res: Response) => {
  const { id } = req.params;

  await Todo.findByIdAndDelete(id);

  return res.status(200).json({ message: 'Todo deleted successfully.' });
};

export { createTodo, getAllTodos, getTodo, updateTodo, deleteTodo };