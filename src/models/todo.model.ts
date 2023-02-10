import mongoose, { Schema, Model, Document } from 'mongoose';

type TodoDocument = Document & {
  text: string;
  dueDate: Date | null;
  dateCompleted?: Date | null;
};

type TodoInput = {
  text: TodoDocument['text'];
  dueDate: TodoDocument['dueDate'];
  dateCompleted?: TodoDocument['dateCompleted'];
};

const TodoSchema = new Schema(
  {
    text: {
      type: Schema.Types.String,
      required: true,
    },
    dueDate: {
      type: Schema.Types.Date,
      default: Date.now,
    },
    dateCompleted: {
      type: Schema.Types.Date,
      default: null,
    }
  },
  {
    collection: 'todos',
    timestamps: true,
  },
);

const Todo: Model<TodoDocument> = mongoose.model<TodoDocument>('Todo', TodoSchema);

export { Todo, TodoInput, TodoDocument };