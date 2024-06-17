import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
        private jwtService: JwtService
    ) {}

    async validateUser(
        username: string,
        password: string,
      ): Promise<Omit<UserEntity, 'password'>> {
        const user = await this.userRepository.findOne({ username, password });
        if (user) {
          const validatedUser = { ...user };
          delete validatedUser.password;
          return validatedUser;
        }
        return null;
      }

    async login(user: UserEntity) {
        const payload = { username: user.username, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
