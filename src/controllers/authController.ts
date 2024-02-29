import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { User } from "../models/User";
import  Jwt  from "jsonwebtoken";

export const register = async (req: Request, res: Response) => {

    try {

        console.log(req.body);
        const name = req.body.name; //esto guarda los valores que metamos en body para registrar el usuario
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

        const passwordEncypted = bcrypt.hashSync(password, 8);
        //comprobando que se genera la contraseña encriptada
        console.log(passwordEncypted);

        const newUser = await User.create({
            name: name,
            email: email,
            password: passwordEncypted,
            role: {
                id: 1
            },

        }).save()

        //to do enviar email de confirmación de registro

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

export const login = async (req: Request, res: Response) => {
    try {

        //recuperar la info

        const email = req.body.email;
        const password = req.body.password;

        //validacion del email y password

        if (!email || !password) {
            res.status(400).json({
                success: false,
                message: "email and password are nedded"
            })
        }

        //to do validar el formato de email está arriba tambien el trozo de codigo.
        //find one by no deja hacer select ni relaciones el by. 

        const user = await User.findOne(
            {
                where: {
                    email: email //req.body.email es lo mismo pero lo guarde arriba en variable
                },
                relations: {
                    role: true  //esta es la propiedad en users que esta relacionada
                },
                select: {
                    id: true,
                    password: true,
                    email: true,
                    role: {
                        id: true,
                        name: true
                    }
                }
            }
        )
        console.log(user);

        if (!user) {
            return res.status(400).json({

                success: false,
                message: "dd"
            })
        }

        const isValidPassword = bcrypt.compareSync(password, user.password);

        console.log(isValidPassword);

        if (!isValidPassword) {
            return res.status(400).json({

                success: false,
                message: "email o password invalid"
            })
        }

        //crear token
        const token = Jwt.sign(
            {
                userId: user.id,
                roleName: user.role.name
            },
            process.env.JWT_SECRET as string, //esto está en env, es la palabra secreto
            {
                expiresIn:"5h" //para q salga la sesión expire
            }

        )

        return res.status(200).json({
            success: true,
            message: "user logged",
            token: token

        })



    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "user can't be logged",
            error: error
        })

    }
}