import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { PostsService } from './posts.service';
import { IsPublic } from 'src/common/is-public.decorator';
import CreatePostDto from './dtos/creater-post.dto';

@ApiTags('posts')
@Controller('posts')
export class PostsController {
    constructor(
        private readonly postsService: PostsService,
    ) { }

    @Get()
    @IsPublic()
    findAll() {
        const records = this.postsService.findAll();
        return records;
    }

    @Get(':id')
    @IsPublic()
    findOne(@Param('id') id: number) {
        return this.postsService.findOne(id);
    }

    @Post()
    @IsPublic()
    @ApiCreatedResponse({
        description: 'Este endpoint sirve para crear nuevos posts', 
        type: Post,
    })
    create(@Body() body: CreatePostDto) {
        return this.postsService.create(body);
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() body) {
        return this.postsService.update(id, body);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    destoy(@Param('id') id: number) {
        return this.postsService.remove(id);
    }
}