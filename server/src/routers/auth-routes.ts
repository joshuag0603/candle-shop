import {Router, Request, Response} from 'express';
import {User} from '../models/Users2.js';
import jwt  from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import dotenv from 'dotenv'
dotenv.config();


export const login = async (req:Request, res:Response) => {
    const { email, password } = req.body;

    const userLogin = await User.findOne({
        where: { email },
    });

    if (!userLogin) {
        return res.status(401).json({message:'User Not Found'});
    }

    const passwordIsValid =await bcrypt.compare(password,userLogin.password);

    if (!passwordIsValid) {
        return res.status(401).json({message: 'Password Failed'})
    };

    const secretKey = process.env.JWT_SECRET_KEY|| '';

    const token = jwt.sign({ email },secretKey, {expiresIn:'1h'});

    return res.json({token});

}

const router = Router();

router.post('/login', login);

export default router;