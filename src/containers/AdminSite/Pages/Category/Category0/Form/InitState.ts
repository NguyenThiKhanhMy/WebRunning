import { Guid } from "common/Enums";

export interface IModelItem {
    Id: String;
    Code: String;
    Name: String;
    Type: Number;
}
export interface IState {
    DataItem: IModelItem
}
export const InitState: IState = {
    DataItem: {
        Id: Guid.Empty,
        Code: "",
        Name: "",
        Type: 0
    }
};  
