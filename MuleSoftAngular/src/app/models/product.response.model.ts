import {Product} from '../models/product.model';

export class ProductResponse{
    isSucceeded:boolean;
    result:Product[];
}