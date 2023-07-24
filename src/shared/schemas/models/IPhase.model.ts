import { IBaseModel } from './../typedef/IBaseModel';

export interface IPhase extends IBaseModel {
    name: string
    description: string
    projectCode: string
}