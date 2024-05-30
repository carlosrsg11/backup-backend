import { PartialType } from "@nestjs/mapped-types";
import CreatePostDto from "./creater-post.dto";

class UpdatePostDto extends PartialType(CreatePostDto){}

export default UpdatePostDto;