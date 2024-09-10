import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TweetService } from "./tweet.service";
import { TweetControllerBase } from "./base/tweet.controller.base";

@swagger.ApiTags("tweets")
@common.Controller("tweets")
export class TweetController extends TweetControllerBase {
  constructor(
    protected readonly service: TweetService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
