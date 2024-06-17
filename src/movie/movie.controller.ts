import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { InputMovie } from './movie/movie.interface';
import { MovieService } from './movie.service';
import { MovieEntity } from './movie.entity/movie.entity';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('movies')
@Controller('movie')
export class MovieController {
    constructor(private readonly movieService: MovieService) {}

    @ApiOkResponse({ description: 'All available movies' })
    @Get()
    getAllMovies(): Promise<MovieEntity[]> {
        return this.movieService.getAllMovies();
    }

    //@ApiOkResponse({ description: 'Returns movie matching the given id' })
    // @Get(':id')
    // getOneMovie(@Param('id') id: string): Promise<MovieEntity> {
    //     return this.movieService.getOneMovie(parseInt(id, 10));
    // }

    @ApiOkResponse({ description: 'Creates new movie entry' })
    @Post()
    createNewMovie(@Body() movie: InputMovie): Promise<MovieEntity> {
        return this.movieService.createNewMovie(movie);
    }

    @ApiOkResponse({ description: 'Updates movie matching the given id' })
    @Put(':id')
    updateMovie(@Param('id') id: string, @Body() movie: MovieEntity): Promise<MovieEntity> {
        return this.movieService.updateMovie(parseInt(id, 10), movie);
    }

    @ApiOkResponse({ description: 'Deletes movie matching the given id' })
    @Delete(':id')
    @HttpCode(204)
    removeMovie(@Param('id') id: string): void {
        this.movieService.removeMovie(parseInt(id, 10));
    }
}
