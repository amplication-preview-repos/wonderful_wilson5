import { Module } from "@nestjs/common";
import { LibrarianModuleBase } from "./base/librarian.module.base";
import { LibrarianService } from "./librarian.service";
import { LibrarianController } from "./librarian.controller";
import { LibrarianResolver } from "./librarian.resolver";

@Module({
  imports: [LibrarianModuleBase],
  controllers: [LibrarianController],
  providers: [LibrarianService, LibrarianResolver],
  exports: [LibrarianService],
})
export class LibrarianModule {}
