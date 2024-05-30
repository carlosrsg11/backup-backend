import { Repository } from 'typeorm';
import Post from './entities/post.entity';
import UpdatePostDto from './dtos/update-post.dto';
import CreatePostDto from './dtos/creater-post.dto';
export declare class PostsService {
    private readonly postsRepository;
    private records;
    constructor(postsRepository: Repository<Post>);
    findAll(): Promise<Post[]>;
    findOne(id: number): Promise<Post>;
    create(new_post: CreatePostDto): Promise<Post>;
    update(id: number, update_post: UpdatePostDto): Promise<Post>;
    remove(id: number): Promise<Post>;
}
