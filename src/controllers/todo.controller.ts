import { getAllTodosHandler, addTodoHandler, updateTodoHandler, getTodoHandler, removeTodoHandler, removeTodosHandler } from './../services/todo.service';
import { RequestHandler } from "express";
import { ITodo } from 'src/interfaces/model-interfaces/todo.interface';

export const getAllTodos: RequestHandler = async (req, res): Promise<void> => {
    const todos = await getAllTodosHandler();
    res.status(201).send({ todos });
};

export const getTodo: RequestHandler = async (req, res) => {
    const todo = await getTodoHandler(req.params.todoId);
    res.status(201).send({ todo });
};

export const addTodo: RequestHandler = async (req, res): Promise<void> => {
    const addedTodo = await addTodoHandler((req.body as ITodo));
    res.status(201).send({ todo: addedTodo });
};

export const updateTodo: RequestHandler = async (req, res) => {
    const updatedTodo = await updateTodoHandler((req.body as ITodo));
    res.status(201).send({ todo: updatedTodo });
};

export const deleteTodo: RequestHandler = async (req, res) => {
    const deletedTodo = await removeTodoHandler(req.params.todoId);
    res.status(201).send({ message: `Deleted id: ${req.params.todoId}` });
};

export const deleteTodos: RequestHandler = async (req, res) => {
    await removeTodosHandler();
    res.status(201).send({ message: "All todos have been deleted" });
};