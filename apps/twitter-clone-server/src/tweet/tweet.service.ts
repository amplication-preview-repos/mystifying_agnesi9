import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TweetServiceBase } from "./base/tweet.service.base";

@Injectable()
export class TweetService extends TweetServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
