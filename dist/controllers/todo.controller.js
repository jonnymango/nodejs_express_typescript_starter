"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodo = exports.getAllTodos = exports.createTodo = void 0;
const todo_model_1 = require("../models/todo.model");
const createTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //const { text, dueDate } = req.body;
    const text = req.body.text;
    const timeStamp = Date.parse(`${req.body.dueDate}`);
    const dueDate = new Date(timeStamp);
    if (!text || !dueDate) {
        return res.status(422).json({
            message: 'The fields text and dueDate are required',
        });
    }
    const todoInput = {
        text,
        dueDate,
    };
    const todoCreated = todo_model_1.Todo.create(todoInput);
    return res.status(201).json({ data: todoCreated });
});
exports.createTodo = createTodo;
const getAllTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todos = yield todo_model_1.Todo.find().sort('-createdAt').exec();
    return res.status(200).json({ data: todos });
});
exports.getAllTodos = getAllTodos;
const getTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const todo = yield todo_model_1.Todo.findOne({ _id: id });
    if (!todo) {
        return res.status(404).json({ message: `Todo with id "${id}" not found.` });
    }
    return res.status(200).json({ data: todo });
});
exports.getTodo = getTodo;
const updateTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { text, dueDate, dateCompleted } = req.body;
    const todo = yield todo_model_1.Todo.findOne({ _id: id });
    if (!todo) {
        return res.status(404).json({ message: `Todo with id "${id}" not found.` });
    }
    if (!text || !dueDate) {
        return res.status(422).json({ message: 'The fields text and dueDate are required' });
    }
    yield todo_model_1.Todo.updateOne({ _id: id }, { text, dueDate, dateCompleted });
    const todoUpdated = yield todo_model_1.Todo.findById(id, { text, dueDate, dateCompleted });
    return res.status(200).json({ data: todoUpdated });
});
exports.updateTodo = updateTodo;
const deleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield todo_model_1.Todo.findByIdAndDelete(id);
    return res.status(200).json({ message: 'Todo deleted successfully.' });
});
exports.deleteTodo = deleteTodo;
