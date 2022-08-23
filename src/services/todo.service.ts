import { ITodo } from "../interfaces/model-interfaces/todo.interface";
import { Todo } from "../models/Todo.model";

export const addTodoHandler = async (todo: ITodo): Promise<ITodo> => {
  return await Todo.create(todo);
};

export const updateTodoHandler = async (todo: ITodo): Promise<ITodo| null> => {
  const updatedTodo = await Todo.findOneAndUpdate({ _id: todo._id }, todo, { new: true })
  console.log('updated Todo', updatedTodo);
  return updatedTodo;
};

export const getAllTodosHandler = async (): Promise<ITodo[]> => {
  return await Todo.find();
}

export const getTodoHandler = async (todoId: String): Promise<ITodo | null> => {
  const todo = await Todo.findById(todoId);
  return todo;
};

export const removeTodoHandler = async (todoId: String): Promise<void> => {
  return await Todo.remove({ _id: todoId});
}

export const removeTodosHandler = async (): Promise<void> => {
  return await Todo.remove();
}


