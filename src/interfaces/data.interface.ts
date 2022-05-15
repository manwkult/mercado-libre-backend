import { Price } from "./price.interface";

export interface Data {
  id: string;
  title: String;
  price: Price;
  picture: String;
  condition: String;
  free_shipping: boolean;
  sold_quantity: number;
  description: string;
}
