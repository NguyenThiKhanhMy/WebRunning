export interface IModelItem {
    Id: String;
    Code: String;
    Name: String;
    Type: Number;
}
export interface IState {
    DataItems: IModelItem[]
}
export const InitState: IState = {
    DataItems: []
};  
