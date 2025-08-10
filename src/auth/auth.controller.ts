import { Body, Controller, Post, Request } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { loginDto } from "./dtos/auth.dto";


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: loginDto): Promise<{ access_token: string }> {
    return this.authService.login(body.username, body.password);
  }
}

