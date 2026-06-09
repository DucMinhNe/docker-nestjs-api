import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getRoot(): { name: string; version: string; endpoints: string[] } {
    return {
      name: 'docker-nestjs-api',
      version: '1.0.0',
      endpoints: ['/', '/health', '/api/hello'],
    };
  }

  getHealth(): { status: string; uptime: number } {
    return {
      status: 'ok',
      uptime: process.uptime(),
    };
  }

  getHello(name?: string): { message: string } {
    return {
      message: `Hello, ${name && name.length > 0 ? name : 'world'}!`,
    };
  }
}
