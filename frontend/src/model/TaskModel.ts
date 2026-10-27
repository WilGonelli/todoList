export type StatusType = "pending" | "in_progress" | "completed";

export interface TaskModel {
  name: string;
  description: string;
  status: StatusType;
  dueDate: string;
}
