import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth.constants';
import { AuthController } from './auth.controller';

@Module({
  imports: [UsersModule, PassportModule, JwtModule.register({
    global: true,
    secret: jwtConstants.secret,
    signOptions: { expiresIn: "60s" },
  })],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
})

export class AuthModule {}
