import { Request, Response } from "express";
import IUser from "../interfaces/IUser";
import { creteUserService, findUserByCredentialId, getAllUsersService, getUserByIdService } from "../services/userService";
import ICreateUserDto from "../interfaces/ICreateUserDto";
import ICreateCredentialDto from "../interfaces/ICreateCredentialDto";
import { Credential } from "../entities/Credential";
import { validateCredential } from "../services/CredentialsService";
import { User } from "../entities/User";

export const getAllUsers = async (req: Request, res: Response):Promise <void> =>{
    try{
        
        const users: User[] = await getAllUsersService();
        res.status(200).json(users);
    }catch(error: any){
        
        res.status(400).json({message: error.message,});
    }
    
};

export const getUserById= async (req: Request <{id: string}, {}, {}>, res: Response) =>{
    try {
        const { id } = req.params;
        const user: User | null = await getUserByIdService(Number(id)); 
        res.status(200).json(user);

    } catch (error: any) {
        res.status(404).json({
            mesasage: error.message,
        });        
    }
    
   
};

export const register = async (req: Request<{}, {}, ICreateUserDto>, res: Response) =>{
    
    try {
        const { name, email, birthdate, nDni, username, password } = req.body;
        const newUser: User = await creteUserService ({
            name,
            email,
            birthdate,
            nDni,
            username,
            password
            
        });
        res.status(201).json({message: "Usuario creado con exito"})
    } catch (error: any) {
        res.status(400).json({
            message: error.message,
        })
    }
    
}

export const login = async (req: Request <{}, {}, ICreateCredentialDto>, res: Response) =>{
    try {
        const { username, password } = req.body;
        const credentiald: Credential = await validateCredential({
            username, password
        });
        const user: User | null = await findUserByCredentialId(credentiald.id);
        res.status(200).json({
            loggin : true, 
            user,
        })
    } catch (error: any) {
        res.status(400).json({
            message: error.mesasage,
        })
    }
    
    
}