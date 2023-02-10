import { Router } from 'express';
import { createTodo, getAllTodos, getTodo, updateTodo, deleteTodo } from '../controllers/todo.controller';

const todoRoute = () => {
  const router = Router();

  router.post('/todo', createTodo);

  router.get('/todo', getAllTodos);

  router.get('/todo/:id', getTodo);

  router.put('/todo/:id', updateTodo);

  router.delete('/todo/:id', deleteTodo);

  return router;
};

export { todoRoute };