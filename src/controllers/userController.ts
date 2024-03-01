import { Request, Response } from "express";
import { User } from "../models/User";

export const getUsers = async (req: Request, res: Response) => {

    try {

        const users = await User.find(
            {
                select: {  //aqui no pones el password porque sino se ve, el resto si se ve
                    id: true,
                    name: true,
                    email: true,
                    createdAt: true,
                    updatedAt: true
                }
            }
        );

        return res.status(200).json({
            success: true,
            message: "users retrieved successfully",
            data: users
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "user can't be retrieved",
            error: error
        })

    }
}

export const getUserById = async (req: Request, res: Response) => {

    try {
        const userId = req.params.id;

        const user = await User.findOneBy( //promesa que busca el id del user
            {
                id: parseInt(userId)
            }
        )

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "user not found",
            })
        }

        res.status(200).json({

            success: true,
            message: "user retrieved",
            data: user
        })

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: "user can't be retrieved",
            error: error
        })
    }
}

export const updateUserById = async (req: Request, res: Response) => {


    try {

        const userId = req.params.id;
        const name = req.body.name;


        //validar datos
        const user = await User.findOneBy( //promesa que busca el id del user, busca si existe el resgistro 
            {
                id: parseInt(userId)
            }
        )

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "user not found",
            })
        }

    
        //tratar datos

        //actualizar en BD
        const userUpdated = await User.update(
            {
                id: parseInt(userId)

            },
            {
                name: name
            }
        );

        //responder

        res.status(200).json({
            success: true,
            message: "user is updated",
            data: userUpdated
        })


    } catch (error) {
        res.status(500).json({
            success: false,
            message: "user cant be Updated",
            error: error
        })

    }}



export const deleteUserById = async (req: Request, res: Response) => {
    try {
      const userId = req.params.id;
  
      const userToRemove: any = await User.findOneBy({
        id: parseInt(userId),
      })
  
      if(!userToRemove) {
        res.status(404).json({
          success: false,
          message: "user cant be deleted",
        })
      }    
      
      const userDeleted = await User.delete(userToRemove)
  
      res.status(200).json({
        success: false,
        message: "user deleted",
        data: userDeleted
      })
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "user cant be deleted",
        error: error
      })
    }

}

export const updateProfile = async (req: Request , res: Response) =>{

    
    try {
        //recuperar data

        const name = req.body.name   //solo modificar el nombre por ejemplo
        const userId = req.tokenData.userId

        //validar datos
        if(!name){
            return res.status(400).json({
                success: false,
                message:"name is nedded"
            })
        }

        //tratar datos  ( no hace falta)

        //actualizar en BD

       const userUpdated = User.update({
        
            id: userId

       },
       {
            name: name
        })

        //responder

        res.status(200).json({
            success: true,
            message: "user is updated",
            data: userUpdated
        })


    } catch (error) {
        res.status(500).json({
            success: false,
            message: "user cant be Updated",
            error: error
        })

    }
}