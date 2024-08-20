import { CredentialModels } from "../config/data-source";
import { Credential } from "../entities/Credential";
import ICreateCredentialDto from "../interfaces/ICreateCredentialDto";
import ICredential from "../interfaces/ICredential";

/*const credentials: ICredential[] = [
    {
        id: 1,
        username: "marge",
        password: "1234"
    }
];
let credentialId: number = 10;
*/
export const createCredential = async (createCredentialDto: ICreateCredentialDto): Promise<Credential> =>{
    const newCredential: Credential = await  CredentialModels.create(createCredentialDto);

     await CredentialModels.save(newCredential)

    return newCredential;
};

export const validateCredential = async (validateCredentialDto: ICreateCredentialDto): Promise<Credential> => {
    const {username, password} = validateCredentialDto;

    const foundCredential: Credential | null = await CredentialModels.findOneBy({
        username: username
    })
    if(!foundCredential){
        throw new Error("Credenciales incorrectas");
    }  
    if(password !== foundCredential.password){
        throw new Error("Credenciales incorrectas");
    }
    return foundCredential;
};

