import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getRoot(): { name: string; version: string; endpoints: string[] } {
    return this.appService.getRoot();
  }

  @Get('health')
  getHealth(): { status: string; uptime: number } {
    return this.appService.getHealth();
  }

  @Get('api/hello')
  getHello(@Query('name') name?: string): { message: string } {
    return this.appService.getHello(name);
  }
}
