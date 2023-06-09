import { CConfirm, CDialog, CNotification } from 'components';
import ACard from 'components/ACard';
import CDynamicButton from 'components/CDynamicButton';
import CDynamicTable from 'components/CDynamicTable';
import { Message } from 'common/Enums';
import React, { useEffect, useMemo, useReducer, useRef, useState } from 'react'
import { connect } from "react-redux";
import { InitState } from './InitState';
import { Actions } from './Action';
import { Reducer } from './Reducer';
import categoryListViewJson from './ListView.json';
import CategoryForm from './Form'
import { IResponseMessage } from 'common/Models';

interface Props {

}

const CategoryList = (props: Props) => {  
    const [state, dispatch] = useReducer(Reducer, InitState)
    const [categoryId, setCategoryId] = useState('');
    const categoryListView:any = categoryListViewJson;    
    const refNotification = useRef<any>();
    const refConfirm_DeleteItem = useRef<any>();
    const refDynamicTable = useRef<any>();
    const [dialogVisible, setDialogVisible] = useState(false);
    useEffect(() => {        
        Actions.GetItems(0,dispatch);     
    }, [])
    const ActionEvents = {
        onClickCreate: () => {
            setCategoryId('');
            setDialogVisible(true);    
        },
        onClickUpdate: () => {
            if(!getRowId()) { refNotification.current.showNotification("warning", Message.Require_Row_Selection); return; }            
            setCategoryId(getRowId());
            setDialogVisible(true);            
        },
        onClickDelete: async () => {
            if(!getRowId()) { refNotification.current.showNotification("warning", Message.Require_Row_Selection); return; }
            refConfirm_DeleteItem.current.showConfirm();            
        },
    }
    const DeleteById = async () => {
        let res:IResponseMessage = await Actions.DeleteById(getRowId(),dispatch);             
        if(res.Success) {            
            refNotification.current.showNotification("success", res.Message);          
            ReloadTableItems();
        }  
    }
    const ReloadTableItems = () => {
        Actions.GetItems(0,dispatch);  
    }
    const getRowId = () => {        
        return refDynamicTable.current.getRowId();
    }
    let ButtonGroupsRender = () => {
        return <CDynamicButton actionDefs={categoryListView.DataGrid.ActionDefs} actions={ActionEvents} />;
    }    
    const DialogMemo = useMemo(() => {
        return <>
        {dialogVisible == true ?
            <CDialog title={categoryId ? "Sửa danh mục 0": "Tạo mới danh mục 0"} dialogVisible={dialogVisible} onCancel={() => setDialogVisible(false)}>
                <CategoryForm Id={categoryId} ReloadTableItems = {ReloadTableItems} />
            </CDialog>
            :<div></div>
        }
        </>
    }, [dialogVisible])
    return(
        <>
            <CConfirm ref={refConfirm_DeleteItem} Title="Thao tác này sẽ xóa danh mục 0" Ok={async () => {await DeleteById()}} Canel={()=>{}} />
            <CNotification ref={refNotification} />   
            {DialogMemo}
            <ACard title={categoryListView.DataGrid.Title} buttonGroups={ButtonGroupsRender()}>
                <CDynamicTable 
                    ref={refDynamicTable}
                    id={categoryListView.DataGrid.Key} 
                    key={categoryListView.DataGrid.Key} 
                    columnDefs={categoryListView.DataGrid.ColumnDefs} 
                    dataItems={state.DataItems}            
                />
            </ACard>
        </>
    )
}
const mapState = ({ ...state }) => ({

});
const mapDispatchToProps = {
  
};

export default connect(mapState, mapDispatchToProps)(CategoryList);