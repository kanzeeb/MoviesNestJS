import { Module } from '@nestjs/common';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieEntity } from './movie.entity/movie.entity';

@Module({
    imports: [TypeOrmModule.forFeature([MovieEntity])],
    controllers: [MovieController],
    providers: [MovieService],
    exports: []
})
export class MovieModule {}
