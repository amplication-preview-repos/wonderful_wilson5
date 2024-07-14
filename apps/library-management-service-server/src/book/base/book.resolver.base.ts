/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Book } from "./Book";
import { BookCountArgs } from "./BookCountArgs";
import { BookFindManyArgs } from "./BookFindManyArgs";
import { BookFindUniqueArgs } from "./BookFindUniqueArgs";
import { CreateBookArgs } from "./CreateBookArgs";
import { UpdateBookArgs } from "./UpdateBookArgs";
import { DeleteBookArgs } from "./DeleteBookArgs";
import { LoanFindManyArgs } from "../../loan/base/LoanFindManyArgs";
import { Loan } from "../../loan/base/Loan";
import { Category } from "../../category/base/Category";
import { Library } from "../../library/base/Library";
import { BookService } from "../book.service";
@graphql.Resolver(() => Book)
export class BookResolverBase {
  constructor(protected readonly service: BookService) {}

  async _booksMeta(
    @graphql.Args() args: BookCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Book])
  async books(@graphql.Args() args: BookFindManyArgs): Promise<Book[]> {
    return this.service.books(args);
  }

  @graphql.Query(() => Book, { nullable: true })
  async book(@graphql.Args() args: BookFindUniqueArgs): Promise<Book | null> {
    const result = await this.service.book(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Book)
  async createBook(@graphql.Args() args: CreateBookArgs): Promise<Book> {
    return await this.service.createBook({
      ...args,
      data: {
        ...args.data,

        category: args.data.category
          ? {
              connect: args.data.category,
            }
          : undefined,

        library: args.data.library
          ? {
              connect: args.data.library,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Book)
  async updateBook(@graphql.Args() args: UpdateBookArgs): Promise<Book | null> {
    try {
      return await this.service.updateBook({
        ...args,
        data: {
          ...args.data,

          category: args.data.category
            ? {
                connect: args.data.category,
              }
            : undefined,

          library: args.data.library
            ? {
                connect: args.data.library,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Book)
  async deleteBook(@graphql.Args() args: DeleteBookArgs): Promise<Book | null> {
    try {
      return await this.service.deleteBook(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Loan], { name: "loans" })
  async findLoans(
    @graphql.Parent() parent: Book,
    @graphql.Args() args: LoanFindManyArgs
  ): Promise<Loan[]> {
    const results = await this.service.findLoans(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => Category, {
    nullable: true,
    name: "category",
  })
  async getCategory(@graphql.Parent() parent: Book): Promise<Category | null> {
    const result = await this.service.getCategory(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Library, {
    nullable: true,
    name: "library",
  })
  async getLibrary(@graphql.Parent() parent: Book): Promise<Library | null> {
    const result = await this.service.getLibrary(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
