import config from './config.js';
import {Client, Account, ID} from 'appwrite';


export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.projectId);
        this.account = new Account(this.client);
    }

    // Create a new account
    async createAccount(ID, email, password, name){
        try{
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount){
                // Call the login function
                return this.login(email, password);
            }
            else{
                return userAccount;
            }
        }
        catch(error){
            throw (error);
            // console.log(error);
        }
    }

    // Login to an account
    async login(email, password){
        try{
            const session = await this.account.createEmailPasswordSession(email, password);
            console.log("Login Successfull");
            return session;
        }
        catch(error){
            console.log( 'Login Faild Appwrite Function Error:', error);
        }
    }

    // Currentuser
    async currentUser(){
        try{
            return await this.account.get();
        }
        catch(error){
            throw (error);
        }
        return null;
    }

    // Logout
    async logout(){
        try{
            return await this.account.deleteSessions('current');
        }
        catch(error){
            throw (error);
        }
    }
}

const authServices = new AuthService();

export default authServices;