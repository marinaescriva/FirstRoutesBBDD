import { Request, Response } from "express";

export const getroles= (req: Request,res: Response)=>{

    res.status(200).json (
        {
         succes: true,
         message: "roles retrieved seccesfully",
        }
    );
};