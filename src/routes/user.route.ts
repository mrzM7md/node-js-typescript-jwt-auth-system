import express from 'express';
import { get_all, login, register } from '../controllers/user.controller';
import  {IsAuthenticated} from '../middlewares/isAuthenticated';
export const user_route = express.Router();

/// /api/users
user_route.get("/", IsAuthenticated, get_all);
user_route.post("/auth/register", register); 
user_route.post("/auth/login", login);
