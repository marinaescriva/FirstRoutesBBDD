import { Request, Response} from "express";
import { User } from "../models/User";

export const getUsers = async(req: Request, res: Response) => {

    try {

        const users = await User.find(
             {
                select:  {  //aqui no pones el password porque sino se ve, el resto si se ve
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

        if(!user){
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