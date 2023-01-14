import { UserStatusTypes, UserTypes } from "./enums";

export interface User {
    id: number;
    userName: string;
    password: string;
    email: string;
    dob: Date;
    userType: UserTypes;
    status: UserStatusTypes,
    blocked: boolean;

    imageId?: string;
    hobbiesList?: string;
    favCategoriesList?: string;
}