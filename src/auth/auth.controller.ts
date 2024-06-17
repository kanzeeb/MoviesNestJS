import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserEntity } from './user.entity';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    async login(@Body() user: UserEntity) {
        const validUser = await this.authService.validateUser(
            user.username,
            user.password
        );
        if (validUser) {
            return this.authService.login(user);
        } else {
            throw new UnauthorizedException();
        }
    }
}
