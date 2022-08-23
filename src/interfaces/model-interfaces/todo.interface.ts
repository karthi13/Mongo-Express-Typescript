import { Document } from "mongoose";

export interface ITodo extends Document {
  date: string;
  title: string;
  description?: string;
  labels?: string;
}
