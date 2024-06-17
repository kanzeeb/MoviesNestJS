import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({ 
    imports:[
        TypeOrmModule.forFeature([UserEntity]),
        PassportModule,
        JwtModule.register({
            secret: 'secret',
            signOptions: { expiresIn: '1h' },
        }),    
    ], 
    providers: [AuthService],
    controllers: [AuthController],
})
export class AuthModule {}
