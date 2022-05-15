import { Author } from "./author.interface";
import { Data } from "./data.interface";

export interface Item {
  author: Author;
  item?: Data;
}
