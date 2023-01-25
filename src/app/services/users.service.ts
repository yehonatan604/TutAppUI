import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { UserStatusTypes, UserTypes } from "../models/enums";
import { User } from "../models/user.model.interface";
import { PasswordService } from "./password.service";

@Injectable({ providedIn: 'root' })
export class UsersService {
    constructor(
        private http: HttpClient,
        private passwordService: PasswordService) {
    }

    loggedInUserChanged = new Subject();
    usersUrl: string = 'https://localhost:44345/api/Users'
    loggedInUser!: User;

    //GET methods 
    checkEmail(email: string) {
        return this.http.get<boolean>(`${this.usersUrl}/CheckEmailExist/${email}`);
    }

    loginUser(email: string, password: string) {
        return this.http.get<User>(`${this.usersUrl}/${email}/${this.passwordService.md5(password)}`);
    }

    getUserName(id: number) {
        return this.http.get<{ name: string }>(`${this.usersUrl}/GetUserName/${id}`);
    }

    getKey(){
        return this.http.get<any>('https://localhost:44345/api/Users/GetKey/ok');
    }

    //POST methods
    registerUser(user: User) {
        this.http.post(this.usersUrl, {
            UserName: user.userName,
            Email: user.email,
            DOB: user.dob,
            Password: this.passwordService.md5(user.password),
            UserType: 1,
            UserStatus: 0,
            Freeze: false
        }).subscribe();
    }

    // generateUsers() {
    //     this.users.forEach(user => {
    //         this.registerUser(user);
    //     });
    // }

    // users: User[] = [
    //     {
    //         id: 1,
    //         userName: 'Erik Lemon',
    //         password: '1',
    //         email: 'erik@email.com',
    //         dob: new Date(1985, 12, 7),
    //         userType: UserTypes.Creator,
    //         status: UserStatusTypes.LoggedOff,
    //         blocked: false
    //     },
    //     {
    //         id: 2,
    //         userName: 'Donna Eyzer',
    //         password: '1',
    //         email: 'donna@email.com',
    //         dob: new Date(2000, 7, 1),
    //         userType: UserTypes.Reader,
    //         status: UserStatusTypes.LoggedOff,
    //         blocked: false
    //     },
    //     {
    //         id: 3,
    //         userName: 'Al Viss',
    //         password: '1',
    //         email: 'al@email.com',
    //         dob: new Date(1963, 4, 4),
    //         userType: UserTypes.Creator,
    //         status: UserStatusTypes.LoggedOff,
    //         blocked: false
    //     },
    //     {
    //         id: 4,
    //         userName: 'Admin',
    //         password: '1',
    //         email: 'admin@email.com',
    //         dob: new Date(1981, 8, 8),
    //         userType: UserTypes.Admin,
    //         status: UserStatusTypes.LoggedOff,
    //         blocked: false
    //     },
    //     {
    //         id: 5,
    //         userName: 'Rickey Melon',
    //         password: '1',
    //         email: 'rickey@email.com',
    //         dob: new Date(1995, 9, 25),
    //         userType: UserTypes.Reader,
    //         status: UserStatusTypes.LoggedOff,
    //         blocked: false
    //     },
    //     {
    //         id: 6,
    //         userName: 'Abed Zuhil',
    //         password: '1',
    //         email: 'abed@email.com',
    //         dob: new Date(1978, 5, 23),
    //         userType: UserTypes.Creator,
    //         status: UserStatusTypes.LoggedOff,
    //         blocked: false
    //     },
    //     {
    //         id: 7,
    //         userName: 'Chan Don Ma',
    //         password: '1',
    //         email: 'chan@email.com',
    //         dob: new Date(1987, 10, 3),
    //         userType: UserTypes.Reader,
    //         status: UserStatusTypes.LoggedOff,
    //         blocked: false
    //     }
    // ]
}