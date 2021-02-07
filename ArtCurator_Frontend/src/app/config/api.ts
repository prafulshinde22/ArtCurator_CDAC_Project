import { environment } from '../../environments/environment';
export const baseUrl = environment.production ? 'https://api.artcurator.com' :'http://localhost:3000'
export const productUrl = baseUrl + '/products'
export const cartUrl = baseUrl + '/cart'
