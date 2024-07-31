import express from 'express';
import './database/db'
import { user_route } from './routes/user.route';
import dotenv from 'dotenv';
import { IsAuthenticated } from './middlewares/isAuthenticated';

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/users', user_route);

app.listen(process.env.PORT, ()=>{
    console.log('app running');
});