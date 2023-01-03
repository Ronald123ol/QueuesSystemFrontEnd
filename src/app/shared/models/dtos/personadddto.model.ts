import { BaseModel } from "../base/base.model";

export interface PersonAddDto extends BaseModel {
    DocumentFile: any;
    name: string;
    lastName: string;
    identificationNumber: string;
    birthdate: string;
    gender: string;
    pregnant: boolean;
    healthIssues: boolean;
    height: number;
    weight: number;
}