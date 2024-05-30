import { BeforeInsert, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import * as bcrypt from 'bcrypt'

@Entity('posts')
class Post {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id:number;

    @Column({type: 'varchar'})
    @ApiProperty({
        description: 'El nombre del proyecto',
        example: 'Creación ed API',
    })
    name: string;

    @Column({type: 'varchar'})
    @ApiProperty({
        description: 'La descripción del proyecto',
        example: 'El proyecto trata de la creación de una API para un portafolio digital',
    })
    description: string;
}

export default Post;