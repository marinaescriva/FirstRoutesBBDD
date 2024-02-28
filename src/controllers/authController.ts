import { Request, Response } from "express";

export const register = (req: Request, res: Response) => {

    try {

        console.log(req.body);
        const email = req.body.email;
        const password = req.body.password;

        //validacion password
        if ((password.length > 10) || (password.length < 6)) {
            return res.status(400).json({
                success: false,
                message: "Eres tooooooooooonto.... La contraseña tiene que estar entre 6 y 10 caracteres",
            })
        }
        //validacion email
        //devuelve true o false porque con`rueba si el email tiene la estructura de la expresion regular
        const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if (!validEmail.test(email)) {
            return res.status(400).json(
                {
                    success: false,
                    message: "format email invalid"
                }
            )
        }
        return res.status(201).json(
            {
                success: true,
                message: "user registered successfully"
            }
        )

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "user can't be registered",
            error: error
        })

    }

};