
import { InitState, IState }  from "./InitState"
export const Reducer = (state:IState = InitState, action:any) =>
{  
  switch (action.type) {       
    default:
      return state;
  }
}