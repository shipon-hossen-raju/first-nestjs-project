import { Injectable } from "@nestjs/common";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";
import { PassportStrategy } from '@nestjs/passport';



@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
   constructor(private authService: AuthService) {
      super();
   }

   async validate(username: string, passport: string): Promise<any> {
      const user = await this.authService.validateUser(username, passport);
      if (!user) {
         return null;
      }
      return user;
   }
}

