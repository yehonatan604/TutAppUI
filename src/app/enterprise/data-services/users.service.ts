import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { UserLoginDto, UserRegisterDto, UserUpdateDto } from "src/app/core/DTOs/user.dtos";
import { PasswordService } from "src/app/core/services/password.service";
import { User } from "../models/user.model";

@Injectable({ providedIn: 'root' })
export class UsersService {
    constructor(
        private http: HttpClient,
        private passwordService: PasswordService) {
    }

    loggedInUserChanged = new Subject();
    usersUrl: string = 'https://localhost:7012/api/auth'
    loggedInUser!: User;

    //GET methods 
    checkEmail(email: string) {
        return this.http.get<boolean>(`${this.usersUrl}/checkEmailExist/${email}`);
    }

    
    //POST methods
    registerUser(user: UserRegisterDto) {
        this.http.post(`${this.usersUrl}/register`, user).subscribe();
    }

    loginUser(user:UserLoginDto) {
        return this.http.post<User>(`${this.usersUrl}/login`, user);
    }

    updateUser(user:UserUpdateDto){
        return this.http.put<Response>(`${this.usersUrl}/updateUser`, user);
    }
}