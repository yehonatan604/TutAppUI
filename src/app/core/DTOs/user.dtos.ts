export interface UserMainDto {
    email: string,
}

export interface NameDob extends UserMainDto{
    userName: string,
    dob: Date
}

export interface UserLoginDto extends UserMainDto {
    password: string
}

export interface UserUpdateDto extends UserMainDto, NameDob {
    newEmail: string,
    favCategoriesList: string,
    hobbiesList: string,
    aboutMe: string;
}

export interface UserRegisterDto extends UserLoginDto, NameDob {
}