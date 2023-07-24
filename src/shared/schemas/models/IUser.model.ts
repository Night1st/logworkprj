import { IBaseModel } from './../typedef/IBaseModel';

export interface IUser extends IBaseModel {
    name: string
    password: string,
    description: string
}