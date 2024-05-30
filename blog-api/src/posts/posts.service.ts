import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Post from './entities/post.entity';
import UpdatePostDto from './dtos/update-post.dto';
import CreatePostDto from './dtos/creater-post.dto';

@Injectable()
export class PostsService {
  private records = [];

  constructor(
    @InjectRepository(Post)
    private readonly postsRepository: Repository<Post>,
  ) { }

  findAll() {
    return this.postsRepository.find();
  }

  async findOne(id: number) {
    const record = await this.postsRepository.findOne({
      where: { id },
    });

    if (record === null) {
      throw new NotFoundException('Post #${id} not found');
    }

    return record;
  }

  create(new_post: CreatePostDto) {
    const post = this.postsRepository.create(new_post);
    return this.postsRepository.save(post);
  }

  async update(id: number, update_post: UpdatePostDto) {
    const post = await this.findOne(id);

    this.postsRepository.merge(post, update_post);

    return this.postsRepository.save(post);
  }

  async remove(id: number) {
    const post = await this.findOne(id);

    return this.postsRepository.remove(post);
  }

}
