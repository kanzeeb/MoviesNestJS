import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieModule } from './movie/movie.module';
import { MovieEntity } from './movie/movie.entity/movie.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MovieModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'Pa2pArr1ucha#',
      database: 'movie-db',
      entities: [MovieEntity],
      synchronize: false,
      autoLoadEntities: true,
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
