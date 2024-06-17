import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { MovieEntity } from './movie.entity/movie.entity';
import { InputMovie } from './movie/movie.interface';

@Injectable()
export class MovieService {
    constructor(
        @InjectRepository(MovieEntity)
        private movieRepository: Repository<MovieEntity>,
    ) {}

    
    async getAllMovies(): Promise<MovieEntity[]> {
        return this.movieRepository.find();
    }

    // async getOneMovie(id: number): Promise<MovieEntity> {
    //     return this.movieRepository.findOne(id);
    // }
    
    async createNewMovie(movie: InputMovie): Promise<MovieEntity> {
        return this.movieRepository.save(movie);
    }

    async updateMovie(id: number, movie: MovieEntity): Promise<MovieEntity> {
        return this.movieRepository.save(movie);
    }

    async removeMovie(id: number): Promise<DeleteResult> {
        return this.movieRepository.delete(id);
    }
}
