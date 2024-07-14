import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LibrarianService } from "./librarian.service";
import { LibrarianControllerBase } from "./base/librarian.controller.base";

@swagger.ApiTags("librarians")
@common.Controller("librarians")
export class LibrarianController extends LibrarianControllerBase {
  constructor(protected readonly service: LibrarianService) {
    super(service);
  }
}
