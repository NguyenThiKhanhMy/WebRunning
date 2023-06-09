import { IResponseMessage } from "common/Models";
import OrganService from "services/OrganService";

export const Actions: any = { 
    GetItems: async (parentId:any, dispatch:any)  =>  {
        let res:IResponseMessage = await OrganService.GetByParentId(parentId);               
        if(res && res.Success)
        {           
            dispatch({
                type: "GetItems",
                items: res.Data
            })
        }                       
    },
    GetTree: async (dispatch:any) => {
        let res:IResponseMessage = await OrganService.GetTree();               
        if(res && res.Success)
        {           
            dispatch({
                type: "GetTree",
                tree: res.Data
            })
        }    
    },
    DeleteById: async (id:String, dispatch:any) => {                
        let res:IResponseMessage = await OrganService.DeleteById(id);               
        return res;
    }
}