import { createConnection } from 'typeorm';
import { User } from '../entites/user.entity';
import { Story } from '../entites/stories.entyty';
import { Address } from '../entites/addresses.entity';
import { ImgSlider } from '../entites/imgSliders.entyty';
import { Product } from '../entites/productes.entyty';
import { Cart } from '../entites/carts.entyty';
import { CartItem } from '../entites/cartItems.entyty';
import { Order } from '../entites/orders.entyty';

export const db = createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: 'root',
    password: '',
    database: 'db-test',
    entities: [User, Address , Story, ImgSlider, Product, Cart, CartItem, Order], 
    // entities: [User, Address, ImgSlider,  Story],
    synchronize: false,  
})