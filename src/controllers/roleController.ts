import { Request, Response } from "express";
import { Role } from "../models/Role";
import { title } from "process";

export const getRoles= (req: Request,res: Response)=>{


    res.status(200).json (
        {
         succes: true,
         message: "roles retrieved seccesfully",
        }
    );
};

export const createRoles= async(req:Request, res:Response)=>{
    try {
        const name = req.body.name;
        console.log(name);
        if (name.length > 50) {
            return res.status(400).json({
                success: false,
                message: "Role name must be under 50 characters"
          }
            ) }
            const newRole = await Role.create({
                name: name
            }).save()
        res.status(201).json({
            success: true,
            message: "Role created",
            data: newRole
        })
    } catch (error) {
        res.status(500).json({
        success:false,
        message:"can't create rol",
        error:error
        })
    }
    };

    //recuperar la info a traves de req.body, si editas el json añade lo escrito por terminal

    // const {name , email} = req.body;
    // console.log(req.body); //usar re.boy sale {name:user} con name solo muestra user q es lo de dentro del body

   

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