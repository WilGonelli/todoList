import { Controller, Get, Post, Body, Put, Param, Query } from '@nestjs/common';
import { TaskService } from './TaskService.js';
import type { TaskModel } from './TaskModel.js';
import type { ResponseData } from '../app.model.js';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getTasks(): Promise<ResponseData<TaskModel[]>> {
    return this.taskService.getTask();
  }

  @Post()
  async postTask(
    @Body() data: Omit<TaskModel, 'id'>,
  ): Promise<ResponseData<TaskModel>> {
    return this.taskService.createTask(data);
  }

  @Put()
  async editTask(
    @Query('id') id: string,
    @Body() data: Omit<TaskModel, 'id'>,
  ): Promise<ResponseData<TaskModel>> {
    return this.taskService.editTask(id, data);
  }
}
