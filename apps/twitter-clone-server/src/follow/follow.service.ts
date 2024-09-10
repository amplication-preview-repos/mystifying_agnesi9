import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FollowServiceBase } from "./base/follow.service.base";

@Injectable()
export class FollowService extends FollowServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
