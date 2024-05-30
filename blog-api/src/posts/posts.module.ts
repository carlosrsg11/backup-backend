import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsService } from './posts.service';
import Post from './entities/post.entity';
import { PostsController } from './posts.controller';
import { APP_GUARD } from '@nestjs/core';

@Module({
    imports: [TypeOrmModule.forFeature([Post])],
    controllers: [PostsController],
    providers: [PostsService],        
    exports: [PostsService]
})
export class PostsModule { }
