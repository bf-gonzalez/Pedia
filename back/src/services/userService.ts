import { AppDataSource, CredentialModels, UserModels } from "../config/data-source";
import { Credential } from "../entities/Credential";
import { User } from "../entities/User";
import ICreateUserDto from "../interfaces/ICreateUserDto";
import ICredential from "../interfaces/ICredential";
import IUser from "../interfaces/IUser";
import { createCredential } from "./CredentialsService";

const users: IUser[] = [
    {
        id:1,
        name: "Marge Bubbie",
        email: "marge@gmal.com",
        birthdate: "1980-01-01",
        nDni: "12345678",
        credentialsId: 1,
    },
];

let id: number = 10;

export const getAllUsersService = async ():Promise<User[]> =>{
   
    const allUsers: User[] = await UserModels.find({
        relations: {appointments: true}
    });
    console.log('Usuarios obtenidos:', users);
    return allUsers;
};

export const getUserByIdService = async (id: number): Promise<User | null>=>{
    const user: User | null = await UserModels.findOne({
        where: { id },
        relations: ["appointments"]
        
    })
    if (!user) throw new Error("Usuario no encontrado");
    return user;
};

export const creteUserService = async(createUserDto: ICreateUserDto) => {
    //Credando registro
    const newUser = await UserModels.create(createUserDto);
    const newCredential: Credential = await createCredential({
        username: createUserDto.username,
        password: createUserDto.password,
    })
    newUser.credential = newCredential;
    await UserModels.save(newUser);
    return newUser;
    
    
    
}

export const findUserByCredentialId = async (credentialId: number): Promise<User> =>{
    

    const user: User | null = await UserModels.findOneBy({
        credential: { id: credentialId }
    })

    if(!user) throw new Error("Usuario no encontrado")
    return user;
}