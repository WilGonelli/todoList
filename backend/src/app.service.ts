import { Injectable } from '@nestjs/common';

export interface Health {
  status: 'ok' | 'off';
}

@Injectable()
export class AppService {
  getHealth(): Health {
    return { status: 'ok' };
  }
}
