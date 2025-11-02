import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUserByEmail(email: string) {
    //logic db, business
    return { email };
  }
}
