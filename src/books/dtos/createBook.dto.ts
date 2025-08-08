import { IsString } from 'class-validator';

export class CreateBookDto {
  @IsString()
  name: string
}
