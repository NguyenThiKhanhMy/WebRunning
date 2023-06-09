import request from "common/Request"
const Sys_Role = "Sys_Role";
const RoleService = {    
    GetItems: async () => {        
        let res:any = await request({
            url: `/${Sys_Role}/List?page=1&pageSize=1000&totalLimitItems=0&searchBy=`,
            method: 'get'
        });
        return res
    },
    GetCategories: async () => {        
        let res:any = await request({
            url: `/${Sys_Role}/Categories`,
            method: 'get'
        });
        return res
    },
    GetItem: async (id:String) => {        
        let res:any = await request({
            url: `/${Sys_Role}/${id}`,
            method: 'get'
        });
        return res
    },
    CreateItem: async (data:any) => {        
        let res:any = await request({
            url: `/${Sys_Role}`,
            method: 'post',
            data
        });
        return res
    },
    UpdateItem: async (data:any) => {        
        let res:any = await request({
            url: `/${Sys_Role}`,
            method: 'put',
            data
        });
        return res
    },
    DeleteById: async (id:any) => {        
        let res:any = await request({
            url: `/${Sys_Role}/DeleteById/${id}`,
            method: 'delete'            
        });
        return res
    },
    CheckDuplicateAttributes: async (id:any, code:any) => {
        let res:any = await request({
          url: `/${Sys_Role}/CheckDuplicateAttributes?Id=${id}&Code=${code}`,
          method: 'get'
        })
        return res;
    }
}
export default RoleService
