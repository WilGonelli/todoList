export type StatusType = 'pending' | 'in_progress' | 'completed';

export interface TaskModel {
  id: string;
  title: string;
  description: string;
  status: StatusType;
  dueDate: string;
}
