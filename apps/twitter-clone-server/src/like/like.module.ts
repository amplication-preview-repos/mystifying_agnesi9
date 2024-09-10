import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LikeModuleBase } from "./base/like.module.base";
import { LikeService } from "./like.service";
import { LikeController } from "./like.controller";
import { LikeResolver } from "./like.resolver";

@Module({
  imports: [LikeModuleBase, forwardRef(() => AuthModule)],
  controllers: [LikeController],
  providers: [LikeService, LikeResolver],
  exports: [LikeService],
})
export class LikeModule {}
