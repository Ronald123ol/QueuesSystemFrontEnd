import { BaseModel } from "../base/base.model";


export interface Person extends BaseModel {
    DocumentFile: Blob;
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