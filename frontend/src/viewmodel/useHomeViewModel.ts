import { useState } from "react";
import type { TaskModel, StatusType } from "../model/TaskModel";

export default function useHomeViewModel() {
  const [name, setName] = useState<string | null>(null);
  const [description, setDescription] = useState<string | null>(null);
  const [status, setStatus] = useState<StatusType | "select">("select");
  const [dueDate, setDueDate] = useState<string | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const tasks: TaskModel[] = [];

  const addTask = () => {
    if (!name || !description || !dueDate || status === "select") return;

    const test = tasks.find((task) => task.name === name);
    if (test) return;

    tasks.push({
      name,
      description,
      status,
      dueDate,
    });
  };

  return {
    name,
    setName,
    description,
    setDescription,
    status,
    setStatus,
    dueDate,
    setDueDate,
    open,
    setOpen,
    tasks,
    addTask,
  };
}
