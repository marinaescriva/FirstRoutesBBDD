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

export const updateRoles=(req:Request, res:Response)=>{

    // recuperar datos desde la ruta

    req.params.id
    console.log(req.params.id);

    res.status(200).json (
        {
         succes: true,
         message: "roles updated sucessfully",
        }
    );

};

export const deleteRoles=(req:Request, res:Response)=>{

    res.status(200).json (
        {
         succes: true,
         message: "roles deleted sucessfully",
        }
    );

};