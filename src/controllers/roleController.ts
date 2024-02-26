import { Request, Response } from "express";

export const getRoles= (req: Request,res: Response)=>{


    res.status(200).json (
        {
         succes: true,
         message: "roles retrieved seccesfully",
        }
    );
};

export const createRoles=(req:Request, res:Response)=>{

    //recuperar la info a traves de req.body, si editas el json añade lo escrito por terminal

    const {name , email} = req.body;
    console.log(name);



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

    req.params.id  
    console.log(req.params.id); //encuentra el param id 

    res.status(200).json (
        {
         succes: true,
         message: "roles deleted sucessfully",
        }
    );

};