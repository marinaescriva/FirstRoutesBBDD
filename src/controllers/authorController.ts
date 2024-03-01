import { Request, Response } from "express";
import { Author } from "../models/Author";

export const createAuthor = async(req: Request , res: Response) => {

try{
    //recuperar la data nombre y nacionalidad

    const name = req.body.name;
    const nationality = req.body.nationality;

    //validar la data  no esta vacio algun campo

    if(!name || !nationality){
        return res.status(400).json({
            success:false,
            message: "name and nationality are nedded"
        })
    }

    //comprobar que no existe en la BD si name = name error o no 

    //guardar el autor nuevo

    const newAuthor = await Author.create({
        name: name,
        nationality: nationality
    }) .save()


    res.status(201).json(
        {
            success: true,
            message: "can create the author",
            data: newAuthor //importante para ver a la constante
        }
    )


}catch(error){

    res.status(500).json(
        {
            success: false,
            message: "cant",
            error: error
        }
    )

}

}