import type { TaskModel, StatusType } from './TaskModel.js';

export class TaskEntity implements TaskModel {
  id = Date.now().toString();
  constructor(
    public title: string,
    public description: string,
    public status: StatusType,
    public dueDate: string,
  ) {}
}
