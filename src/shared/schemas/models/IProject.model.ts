import { IBaseModel } from './../typedef/IBaseModel';

export interface IProject extends IBaseModel {
    code: string,
    name: string
    description: string
}