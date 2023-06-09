import { IControlOptions } from "common/Models";
import { Guid, UserType } from "common/Enums";

export interface IModelItem {
    Id: String;
    FullName: String;
    UserName: String;
    PassWord: String;
    Email: String;
    Phone: String;
    Address: String;
    IsActive: boolean;
    OrgainId?: String;
    RoleId?: String;
    Type: Number;
}
export interface IState {
    DataItem: IModelItem,
    Options: IControlOptions[]
}
export const InitState: IState = {
    DataItem: {
        Id: Guid.Empty,
        FullName: "",
        UserName: "",
        PassWord: "",
        Email: "",
        Phone: "",
        Address: "",
        IsActive: true,
        OrgainId: "",
        RoleId: "",
        Type: UserType.Internal
    },
    Options: []
};  
