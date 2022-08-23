import { Schema, model } from "mongoose";
import { ITodo } from "src/interfaces/model-interfaces/todo.interface";

const todoSchema = new Schema<ITodo>({
  date: { type: String, required: true },
  title: { type: String, required: true },
  description: String,
  labels: String,
});

export const Todo = model<ITodo>("Todo", todoSchema);
