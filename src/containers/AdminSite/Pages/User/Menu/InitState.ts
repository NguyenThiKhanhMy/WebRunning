import { AppName, Guid } from "common/Enums";

export interface IModelItem {
  Id: String;
  Code: String;
  Name: String;
  Type: Number;
}
export interface IModelTree {
  Id: String;
  Code: String;
  Name: String;
  Children: Array<IModelTree>;
}
export interface IState {
  DataItems: IModelItem[];
  DataTree: IModelTree[];
}
export const InitState: IState = {
  DataItems: [],
  DataTree: [],
};
