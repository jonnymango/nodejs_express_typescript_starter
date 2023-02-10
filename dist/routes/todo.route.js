"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoRoute = void 0;
const express_1 = require("express");
const todo_controller_1 = require("../controllers/todo.controller");
const todoRoute = () => {
    const router = (0, express_1.Router)();
    router.post('/todo', todo_controller_1.createTodo);
    router.get('/todo', todo_controller_1.getAllTodos);
    router.get('/todo/:id', todo_controller_1.getTodo);
    router.put('/todo/:id', todo_controller_1.updateTodo);
    router.delete('/todo/:id', todo_controller_1.deleteTodo);
    return router;
};
exports.todoRoute = todoRoute;
