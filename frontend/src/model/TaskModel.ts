export type StatusType = "pending" | "in_progress" | "completed";

export interface TaskModel {
  title: string;
  description: string;
  status: StatusType;
  dueDate: string;
  id?: number;
}
