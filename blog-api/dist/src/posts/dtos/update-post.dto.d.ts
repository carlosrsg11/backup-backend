import CreatePostDto from "./creater-post.dto";
declare const UpdatePostDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreatePostDto>>;
declare class UpdatePostDto extends UpdatePostDto_base {
}
export default UpdatePostDto;
