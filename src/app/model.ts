export interface datamodel{
    id:number;
    firstname:string;
    lastname:string;
    dob:number;
    email:string;
    phonenumber:number;
    username:string;
    password:'pattern.any';
    role:string;
}