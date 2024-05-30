"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const post_entity_1 = require("./entities/post.entity");
let PostsService = class PostsService {
    constructor(postsRepository) {
        this.postsRepository = postsRepository;
        this.records = [];
    }
    findAll() {
        return this.postsRepository.find();
    }
    async findOne(id) {
        const record = await this.postsRepository.findOne({
            where: { id },
        });
        if (record === null) {
            throw new common_1.NotFoundException('Post #${id} not found');
        }
        return record;
    }
    create(new_post) {
        const post = this.postsRepository.create(new_post);
        return this.postsRepository.save(post);
    }
    async update(id, update_post) {
        const post = await this.findOne(id);
        this.postsRepository.merge(post, update_post);
        return this.postsRepository.save(post);
    }
    async remove(id) {
        const post = await this.findOne(id);
        return this.postsRepository.remove(post);
    }
};
exports.PostsService = PostsService;
exports.PostsService = PostsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(post_entity_1.default)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PostsService);
//# sourceMappingURL=posts.service.js.map