/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Library as PrismaLibrary,
  Librarian as PrismaLibrarian,
  Book as PrismaBook,
} from "@prisma/client";

export class LibraryServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.LibraryCountArgs, "select">): Promise<number> {
    return this.prisma.library.count(args);
  }

  async libraries(args: Prisma.LibraryFindManyArgs): Promise<PrismaLibrary[]> {
    return this.prisma.library.findMany(args);
  }
  async library(
    args: Prisma.LibraryFindUniqueArgs
  ): Promise<PrismaLibrary | null> {
    return this.prisma.library.findUnique(args);
  }
  async createLibrary(args: Prisma.LibraryCreateArgs): Promise<PrismaLibrary> {
    return this.prisma.library.create(args);
  }
  async updateLibrary(args: Prisma.LibraryUpdateArgs): Promise<PrismaLibrary> {
    return this.prisma.library.update(args);
  }
  async deleteLibrary(args: Prisma.LibraryDeleteArgs): Promise<PrismaLibrary> {
    return this.prisma.library.delete(args);
  }

  async findLibrarians(
    parentId: string,
    args: Prisma.LibrarianFindManyArgs
  ): Promise<PrismaLibrarian[]> {
    return this.prisma.library
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .librarians(args);
  }

  async findBooks(
    parentId: string,
    args: Prisma.BookFindManyArgs
  ): Promise<PrismaBook[]> {
    return this.prisma.library
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .books(args);
  }
}
