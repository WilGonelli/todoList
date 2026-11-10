import { Injectable } from '@nestjs/common';
import type { TaskModel } from './TaskModel.js';
import type { ResponseData } from '../app.model.js';
import { TaskEntity } from './TaskEntity.js';

const tasks: TaskModel[] = [];

@Injectable()
export class TaskService {
  async createTask(
    data: Omit<TaskModel, 'id'>,
  ): Promise<ResponseData<TaskModel>> {
    try {
      const newTask = new TaskEntity(
        data.title,
        data.description,
        data.status,
        data.dueDate,
      );
      tasks.push(newTask);
      return {
        status: 'success',
        msg: 'task criada com sucesso',
        data: newTask,
      };
    } catch (err: any) {
      return {
        status: 'fail',
        msg: 'falha ao criar a task',
        data: null as any,
      };
    }
  }

  async editTask(
    id: string,
    data: Omit<TaskModel, 'id'>,
  ): Promise<ResponseData<TaskModel>> {
    try {
      tasks.map((task) => {
        if (task.id !== id) return;
        else {
          ((task.description = data.description),
            (task.title = data.title),
            (task.status = data.status),
            (task.dueDate = data.dueDate));
          return;
        }
      });
      return {
        status: 'success',
        msg: 'task alterada com sucesso',
        data: { id, ...data },
      };
    } catch (err) {
      return {
        status: 'fail',
        msg: 'falha ao editar task',
        data: null as any,
      };
    }
  }

  async getTask(): Promise<ResponseData<TaskModel[]>> {
    try {
      return {
        status: 'success',
        msg: 'lista de tarefas',
        data: tasks,
      };
    } catch (err) {
      return {
        status: 'fail',
        msg: 'erro ao buscar a lista',
        data: null as any,
      };
    }
  }
}
