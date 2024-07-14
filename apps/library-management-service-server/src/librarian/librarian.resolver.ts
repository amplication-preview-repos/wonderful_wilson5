import * as graphql from "@nestjs/graphql";
import { LibrarianResolverBase } from "./base/librarian.resolver.base";
import { Librarian } from "./base/Librarian";
import { LibrarianService } from "./librarian.service";

@graphql.Resolver(() => Librarian)
export class LibrarianResolver extends LibrarianResolverBase {
  constructor(protected readonly service: LibrarianService) {
    super(service);
  }
}
