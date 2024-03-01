import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { TokenData } from "../types";

export const auth = (req:Request, res: Response , next: NextFunction) => {

    // console.log("soy el auth middleware");
    const token = req.headers.authorization?.split(" ")[1]; //poner espacio o no lo tiene en cuenta 


    if(!token){

        return res.status(401).json(
            {
                success: false,
                message: "unauthorized"
            }
        )
    }
    try{ // comprobar que el token es de formato secreto

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET as string)

        console.log(decoded);

        req.tokenData = decoded as TokenData;

        next(); //aqui se termina el control del token

    }catch(error){

        return res.status(500).json(
            {
                success: false,
                message: "invalid or malformed",
                error: error
            }
        )
    }

}