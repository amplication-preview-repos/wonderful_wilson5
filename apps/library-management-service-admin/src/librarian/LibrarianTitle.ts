import { Librarian as TLibrarian } from "../api/librarian/Librarian";

export const LIBRARIAN_TITLE_FIELD = "name";

export const LibrarianTitle = (record: TLibrarian): string => {
  return record.name?.toString() || String(record.id);
};
