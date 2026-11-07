import { Controller, Get } from '@nestjs/common';
import { TaskService } from './TaskService.js';
import type { TaskModel } from './TaskModel.js';
import type { ResponseData } from '../app.model.js';

@Controller('/task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getHealth(): Promise<ResponseData<TaskModel[]>> {
    const response = await this.taskService.getTask();
    return response;
  }
}
