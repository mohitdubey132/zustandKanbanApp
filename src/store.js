import { create } from "zustand";
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
        task.title === title ? { title, state } : {}
      ),
    })),
});

export const useStore = create(store);
