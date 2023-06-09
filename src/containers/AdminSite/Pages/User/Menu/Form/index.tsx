import CDynamicForm from 'components/CDynamicForm';
import CNotification from 'components/CNotification';
import { IResponseMessage } from 'common/Models';
import { Message } from 'common/Enums';
import React, { useEffect, useReducer, useRef, useState } from 'react'
import { connect } from "react-redux";
import { InitState } from './InitState';
import { Actions } from './Action';
import { Reducer } from './Reducer';
import organFormInputJson from './FormInput.json';
import { Tree } from 'common/Tree';
interface Props {
  Id: string,
  TreeId?: string,
  TreeData?: any,
  ReloadTableItems?: any
}

const OrganForm = (props: Props) => {  
  const [state, dispatch] = useReducer(Reducer, InitState)
  useEffect(() => {
      Actions.GetItem(props.Id, props.TreeId, dispatch);
  }, [props.Id])
  let organFormInput:any = organFormInputJson;
  const refNotification = useRef<any>();
  const refDynamicForm = useRef<any>();
  const ActionEvents = {
    onClickSave: async () => {
      let isValid = refDynamicForm.current.onValidation();      
      if(isValid)
      {        
        let stateValues = refDynamicForm.current.getStateValues();      
        stateValues.ParentId = props.TreeId;   
        let organParent = Tree.getNodeFromTree(props.TreeData[0], stateValues.ParentId)
        if(organParent && organParent.Type == 1 && stateValues.Type == 0)
        {
          refNotification.current.showNotification("warning", Message.DeptNotInOrgan);  
          return;  
        }             
        let res:IResponseMessage = null;                
        res = await Actions.CheckDuplicateAttributes(stateValues.Id, stateValues.Code, stateValues.ParentId, dispatch);
        if(res.Data) 
        {
          refNotification.current.showNotification("warning", Message.DuplicateAttribute_Code);    
          return; 
        }                           
        if(props.Id) 
        {          
          res = await Actions.UpdateItem(stateValues);                      
        }          
        else
        {
          res = await Actions.CreateItem(stateValues);  
        }           
        if(res.Success) {            
          refNotification.current.showNotification("success", res.Message);          
          props.ReloadTableItems();
        }                    
      }
    },
  }
  return(
    <>
      <CNotification ref={refNotification} />   
      <CDynamicForm ref={refDynamicForm} initValues={state.DataItem} formDefs={organFormInput} actionEvents={ActionEvents} />
    </>
  )
}
const mapState = ({ ...state }) => ({
  
});
const mapDispatchToProps = {
  
};

export default connect(mapState, mapDispatchToProps)(OrganForm);