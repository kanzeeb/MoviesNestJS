import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('Movies')
export class MovieEntity {
    @ApiProperty({
        description: 'Id of the movie',
        example: 1
    })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({
        description: 'Title of the movie',
        example: 'Mad Max 2'
    })
    @Column()
    title: string;


    @ApiProperty({
        description: 'Year the movie was released',
        example: 1987
    })
    @Column()
    year: number;
}

