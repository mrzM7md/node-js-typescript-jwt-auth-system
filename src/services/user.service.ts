import { User } from "../entites/user.entity";
import e, { Request, Response } from "express"
import * as bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

//####################### START MAIN METHODS ########################//

// get all users service
export const get_all_users_service = async (req:Request, res:Response) => {
    const users = await User.find();
    return users;
}


// register service
export const register_user_service = async (req:Request, res:Response) => {
    const {AName, EName, EMail, EncrpPass, esCodPass, createduser, tfstrdef} = req.body;
    if(await checkByEmailIsThisAccountAlreadyExsist(EMail) === true){
        return null;       
    }
    const  encryptedPassword = await hashPassword(EncrpPass);
    return await User.save({
        AName:AName, EName:EName, EMail:EMail, EncrpPass:encryptedPassword, esCodPass:esCodPass, createduser:createduser, tfstrdef:tfstrdef
    });
}


// login service
export const login_user_service = async (req:Request, res:Response) => {
        const {EMail, EncrpPass} = req.body;
        const user:any|null = await findUserByEmailAndPassThenMatchPasswords(EMail, EncrpPass);
        if(user){
            const secret_key:string = process.env.SECRET_KEY as string;
            const token = jwt.sign({name:user.AName, email: user.EMail}, secret_key);
            user.token = token;
        }
        return user;
}

//####################### END MAIN METHODS ########################//




//###################### START HELPERS METHODS #////////////////////////////
async function hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
}

async function checkPassword(password: string, hashedPassword: string): Promise<boolean> {
    const match = await bcrypt.compare(password, hashedPassword);
    return match;
}


async function findUserByEmailAndPassThenMatchPasswords(EMail: string, EncrpPass: string): Promise<User | null> {
    const user = await User.findOne({ where: { EMail } });
    if (!user) {
        return null;
    }
    const passwordMatch = await bcrypt.compare(EncrpPass, user.EncrpPass);
    if (!passwordMatch) {
        return null;
    }

    return user;
}



async function checkByEmailIsThisAccountAlreadyExsist(EMail:string): Promise<boolean> {
    const user = await User.findOne({ where: { EMail } });
    if (user) {
        return true;
    }
    return false;
}

//###################### END HELPERS METHODS #////////////////////////////
