import { Request, Response } from "express";

export const getRoles= (req: Request,res: Response)=>{

    res.status(200).json (
        {
         succes: true,
         message: "roles retrieved seccesfully",
        }
    );
};

export const postRoles=(req:Request, res:Response)=>{

    res.status(201).json (
        {
         succes: true,
         message: "roles created sucessfully",
        }
    );

};