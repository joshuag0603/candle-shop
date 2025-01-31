import {Router, Request, Response} from 'express';
import {user} from '../models/user';
import jwt  from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import dotenv from 'dotenv'
dotenv.config();


export const login =async (req:Request, res:Response) => {
    const { username, password } =req.body;

    const user =await username.findOne({
        where: {username},
    });

    if (!user) {
        return res.status(401).json({message:'User Not Found'});
    }

    const passwordIsValid =await bcrypt.compare(password,user.password);

    if (!passwordIsValid) {
        return res.status(401).json({message: 'Password Failed'})
    };

    const secretKey = process.env.JWT_SECRET_KEY|| '';

    const token = jwt.sign({username},secretKey, {expiresIn:'1h'});

    return res.json({token});

}

const router = Router();

router.post('/login', login);

export default router;