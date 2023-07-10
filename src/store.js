import { create } from "zustand";
import {persist} from "zustand/middleware";
const store = (set) => ({
  draggedTask: null,
  tasks: [{ title: "Test Task", state: "PLANNED" }],
  addTask: (title, state) =>
    set((store) => ({ tasks: [...store.tasks, { title, state }] })),
  deleteTask: (title) =>
    set((store) => ({
      tasks: store.tasks.filter((task) => task.title !== title),
    })),
  setDraggedTask: (title) => set((store) => ({ draggedTask: title })),
  moveTask: (title, state) =>
    set((store) => ({
      tasks: store.tasks.map((task) =>
        task.title === title ? { title, state } : task
      ),
    })),
});

export const useStore = create(persist(store ,{name:"store"}));
