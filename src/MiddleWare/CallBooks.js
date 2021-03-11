
import config from '../config.json';
import {GetAsync} from "../Infrastucture/CallApi";



export async function CheckISBN(ISBN)  {
    const booksUri = config.BooksAPI.url + ISBN + ".json";


    const res = await GetAsync(booksUri);
   // console.log(" response from " + res.title);
    return res;

}
