import { get_all_users_service, login_user_service, register_user_service } from './../services/user.service';
import { Request, Response } from "express"



/**
 *  @desc Get All Users
 *  @route /api/users
 *  @method GET
 *  @access public
 */
export const get_all = async (req:Request, res:Response) => {
    const result = await get_all_users_service(req, res);
    if(result){
        return res.status(200).json(
            {
                "success": true,
                "data": result,
                "message": "تم جلب جميع المستخدمين بنجاح"
            }
        );
    }
}


/**
 *  @desc Register New User
 *  @route /api/users/auth/register
 *  @method POST
 *  @access public
 */
export const register = async (req:Request, res:Response) => {
    const result = await register_user_service(req, res);
    if(result){
        return res.status(201).json(
            {
                "success": true,
                "data": result,
                "message": "تمت إضافة مستخدم جديد بنجاح"
            }
        );
    }else{
        return res.status(400).json(
            {
                "success": false,
                "message": "هذا الحساب مسجل لدينا بالفعل"
            }
        );    
    }
}


/**
 *  @desc User Login
 *  @route /api/users/auth/login
 *  @method POST
 *  @access public
 */
export const login = async (req:Request, res:Response) => {
    const result = await login_user_service(req, res);
    if(result){
        return res.status(200).json(
            {
                "success": true,
                "data": result,
                "message": "تم تسجيل الدخول بنجاح"
            }
        );
    }else{
        return res.status(400).json({
            "success": false,
            "message": "المعلومات التي أدخلتها غير صحيحة"
        });
    }
}