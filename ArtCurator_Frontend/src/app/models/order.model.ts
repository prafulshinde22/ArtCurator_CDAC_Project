import {} from './product-dto.model';
import { Product } from './product.model';

export class Order { 
    order_id:number=0;
    product:Product=new Product;
    amount:number=0;
    timestamp:string="";
	Order(){}
}