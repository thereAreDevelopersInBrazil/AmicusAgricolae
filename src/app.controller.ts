import { Controller, Get } from '@nestjs/common';

@Controller("app")
export class AppController {

  @Get("healtcheck")
  getHealtcheck() {
    return {
      "success": true
    }
  }
}
