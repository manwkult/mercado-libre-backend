import { Item } from "@/interfaces/item.interface";
import { Items } from "@/interfaces/items.interface";
import axios from "@/config/axios";
import * as Constants from "@/constants";
import { Data } from "@/interfaces/data.interface";
import { Author } from "@/interfaces/author.interface";
import { Price } from "@/interfaces/price.interface";
import { isEmpty } from "@/utils/util";
import { HttpException } from "@/exceptions/HttpException";

class ItemsService {

  author: Author = {
    name: Constants.NAME,
    lastname: Constants.LASTNAME
  };

  public async getItems(query: string): Promise<Items> {
    if (isEmpty(query)) throw new HttpException(400, "Query is empty");
    
    return await axios.get(`/sites/MLA/search?q=${query}`, {})
      .then(response => {
        if (response.status === 200) {
          const results = response.data.results;

          const items: Data[] = results.slice(0, 4).map(item => (
            {
              id: item.id,
              title: item.title,
              price: {
                currency: item.currency_id,
                amount: item.price,
                decimals: this.countDecimals(item.price)
              } as Price,
              picture: item.thumbnail,
              condition: item.condition,
              free_shipping: item.shipping.free_shipping
            } as Data
          ));

          return {
            author: this.author,
            items
          } as Items;
        }
      }).catch(error => {
        throw new HttpException(500, error);
      });
  }

  public async getItemById(id: string): Promise<Item> {
    if (isEmpty(id)) throw new HttpException(400, "Id is empty");

    return await axios.get(`/items/${id}`, {})
      .then(async response => {
        if (response.status === 200) {
          const data = response.data;

          const item: Data = {
            id: data.id,
            title: data.title,
            price: {
              currency: data.currency_id,
              amount: data.price,
              decimals: this.countDecimals(data.price)
            } as Price,
            picture: data.pictures[0].url,
            condition: data.condition,
            free_shipping: data.shipping.free_shipping,
            sold_quantity: data.sold_quantity,
            description: await this.getDescription(data.id),
          };

          return {
            author: this.author,
            item
          } as Item;
        }
      }).catch(error => {
        throw new HttpException(500, error);
      })
  }

  private async getDescription(id: string): Promise<string> {
    return await axios.get(`/items/${id}/description`, {})
      .then(response => {
        if (response.status === 200) {
          return response.data.plain_text;
        }
      }).catch(error => {
        console.error(error)
        return undefined
      });
  }

  private countDecimals = function (value) {
    if (Math.floor(value) === value) return 0;
    return value.toString().split(".")[1].length || 0;
  }
}

export default ItemsService;
