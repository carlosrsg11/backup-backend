import { PostsService } from './posts.service';
import CreatePostDto from './dtos/creater-post.dto';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    findAll(): Promise<import("./entities/post.entity").default[]>;
    findOne(id: number): Promise<import("./entities/post.entity").default>;
    create(body: CreatePostDto): Promise<import("./entities/post.entity").default>;
    update(id: number, body: any): Promise<import("./entities/post.entity").default>;
    destoy(id: number): Promise<import("./entities/post.entity").default>;
}
