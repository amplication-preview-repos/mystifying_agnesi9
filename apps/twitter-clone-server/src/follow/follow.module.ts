import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FollowModuleBase } from "./base/follow.module.base";
import { FollowService } from "./follow.service";
import { FollowController } from "./follow.controller";
import { FollowResolver } from "./follow.resolver";

@Module({
  imports: [FollowModuleBase, forwardRef(() => AuthModule)],
  controllers: [FollowController],
  providers: [FollowService, FollowResolver],
  exports: [FollowService],
})
export class FollowModule {}
