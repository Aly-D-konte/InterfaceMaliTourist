export class User{
    "id": number;
    "username": string;
    "password": string;
    "useremail": string;
    constructor(init : Partial<User>){
        Object.assign(this, init)
    }
}