import { Controller, Get } from '@nestjs/common';

@Controller("app")
export class AppController {

  @Get("healthcheck")
  getHealtcheck() {
    return {
      "success": true
    }
  }
}
