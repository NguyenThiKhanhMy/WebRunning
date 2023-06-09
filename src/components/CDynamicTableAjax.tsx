import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import 'datatables.net-select/js/dataTables.select'
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
import { IAjax, IColumnDefs, QuerySearch } from 'common/Models';
import request from "common/Request"
import { Cookie } from 'common/Cookie';
interface Props {
    id: any
    onRowClick?: any
    totalItems?: any
    columnDefs: any
    ajax: IAjax
    onChangeData: any
}

const CDynamicTableAjax = forwardRef((props: Props, ref) => {    
    const refTable = useRef<any>();
    useEffect(() => {        
        InitDataTable()
    }, []);
    useImperativeHandle(ref, () => ({
        ReloadDataTable: () => { ReloadDataTable(); },
    }));
    const ajaxConfig = () => {

    }
    const option_orders = () => {
        let columnDefs:IColumnDefs[] = props.columnDefs;
        let orders = [];
        for(let i = 0;i < columnDefs.length;i++)
        {
            if(columnDefs[i].hasOwnProperty("OrderBy"))
            {
                let order = [i, columnDefs[i].OrderBy];
                orders.push(order);
            }
        }
        return orders;
    }
    const options_columns = () => {
        let columnDefs:IColumnDefs[] = props.columnDefs;
        let columns = [];
        for(let i = 0;i < columnDefs.length;i++)
        {
            let obj = { data: columnDefs[i].Key }
            columns.push(obj);
        }
        return columns;
    }
    const options_columnDefs = () => {
        let columnDefs:IColumnDefs[] = props.columnDefs;
        let optionsColumnDefs:any = [];
        for(let i = 0;i < columnDefs.length;i++)
        {
            let obj:any = { target: i };
            let flag = false;
            if(columnDefs[i].hasOwnProperty("Hidden"))
            {
                obj.visible = !columnDefs[i].Hidden;
                flag = true;
            }
            if(columnDefs[i].hasOwnProperty("Width"))
            {                
                obj.width = columnDefs[i].Width;
                flag = true;
            }
            if(flag)
            {                
                optionsColumnDefs.push(obj);
            }
        }
        return optionsColumnDefs;
    }
    const options_group_index = () => {
        let columnDefs:IColumnDefs[] = props.columnDefs;
        for(let i = 0;i < columnDefs.length;i++)
        {
            if(columnDefs[i].hasOwnProperty("Group"))
            {
                if(columnDefs[i].Group)
                {
                    return [i, columnDefs[i].Title];
                }
            }
        }
        return [-1, ""];
    }
    const BuildQuerySearchBy = (columnsTable:any, search:any) => {
        let querySearch:QuerySearch = {
            Query: "",
            Values: []
        }
        if(search)
        {
            for(let i = 0;i < columnsTable.length;i++)
            {
                querySearch.Query += columnsTable[i].data + ".Contains(@" + i + ")"
                querySearch.Values.push(search);
                if(i != columnsTable.length - 1)
                {
                    querySearch.Query += " and "
                }
            }
        }
        return querySearch;
    }
    const BuildQueryOrderBy = (order:any) => {
        let queryOrder = "";
        let columnDefs:IColumnDefs[] = props.columnDefs;

        for(let i = 0;i < order.length;i++)
        {
            let orderColumn = "", orderType = order[i].dir;
            for(let j = 0;j < columnDefs.length;j++)
            {
                if(order[i].column == j)
                {
                    orderColumn = columnDefs[j].Key;
                    break;
                }
            }
            queryOrder += orderColumn + " " + orderType;
            if(i != order.length - 1)
            {
                queryOrder += " , "
            }
        }
        return queryOrder;
    }
    const InitDataTable = () => {               
        let $dt: JQuery &  {DataTable?: any} = $('#' + props.id);      
        let group_index:any = options_group_index();
        let table = $dt.DataTable({       
            processing: true,
            serverSide: true,
            ajax: {
                url: "http://localhost:5050/api/Sys_Role/Search",
                type: "Post",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                beforeSend: function (request:any) {
                    request.setRequestHeader("Authorization", 'Bearer ' + Cookie.getCookie("Token"))
                },
                data: (d:any) => {
                    d.page = d.start / d.length + 1;
                    d.pageSize = d.length;
                    let querySearchBy:QuerySearch = BuildQuerySearchBy(d.columns, d.search.value);
                    let queryOrderBy = BuildQueryOrderBy(d.order);;
                    d.searchBy =  querySearchBy;
                    d.orderBy = queryOrderBy;
                    return JSON.stringify(d)
                },
                dataSrc: (res:any) => {
                    var myData:any = {};
                    myData.data = res.Data.Items;
                    res.recordsTotal = res.Data.TotalItems;
                    res.recordsFiltered = res.Data.TotalItems;

                    return myData.data;
                }
            },
            select: {
                style: 'single',
            },           
            order: option_orders(),     
            responsive: true,
            lengthMenu: [10, 25, 50, 100, 200, 500],
            pagingType: 'full_numbers',
            language: {
                decimal:        "",
                emptyTable:     "Không có dữ liệu trong bảng",
                info:           "Hiển thị từ _START_ đến _END_ của _TOTAL_ bản ghi",
                infoEmpty:      "Hiển thị từ 0 đến 0 của 0 bản ghi",
                infoFiltered:   "(Đã lọc từ tổng _MAX_ bản ghi)",
                infoPostFix:    "",
                thousands:      ",",
                lengthMenu:     "Hiển thị _MENU_ bản ghi",                
                processing:     "",
                search:         "Tìm kiếm:",
                zeroRecords:    "Không tìm thấy kết quả",
                paginate: {
                    first:      "<span class=\"bi bi-chevron-double-left\"></span>",
                    last:       "<span class=\"bi bi-chevron-double-right\"></span>",
                    next:       "<span class=\"bi bi-chevron-right\"></span>",
                    previous:   "<span class=\"bi bi-chevron-left\"></span>"
                },
                select: {
                    rows: "Đã chọn %d bản ghi"
                },
                aria: {
                    sortAscending:  ": Kích hoạt để sắp xếp cột tăng dần",
                    sortDescending: ": Kích hoạt để sắp xếp cột giảm dần"
                }
            },
            columns: options_columns(),
            columnDefs: options_columnDefs(),
            drawCallback: function (settings:any) {
                if(group_index[0] !== -1)
                {
                    var api = this.api();      
                    var rows = api.rows({ page: 'current' }).nodes();  
                    var group_last:any = null;          
                    api.rows( {page:'current'} ).data().each(function (row:any, rowindex:any) {  
                        let group = row[group_index[0]];
                        if (group_last !== group) {                            
                            $(rows).eq(rowindex).before('<tr class="group"><td colspan="'+ row.length +'"><b>' + group_index[1] + ': ' + group + '</b></td></tr>');
                            group_last = group;
                        }                        
                    });
                }
                $('.paginate_button', this.api().table().container())          
                .on('click', function(){
                    props.onChangeData(table.page.info())
                }); 
            }
        });
        $dt.on('length.dt', function ( e, settings, len ) {
            props.onChangeData(table.page.info())
        } );
        refTable.current = table;
    }
    const ReloadDataTable = () => {
        refTable.current.ajax.url().reload();
    }
    const THeadContentRender = () => {
        let tHs = [], columnDefs:IColumnDefs[] = props.columnDefs;
        for(let i = 0;i < columnDefs.length;i++)
        {            
            tHs.push(<th style={{ width: "300px" }} className={'text-center'} key={i}>{columnDefs[i].Title}</th>);
        }                
        return <tr>{tHs}</tr>;
    }
    return (
        <>
            <button onClick={() => { ReloadDataTable() }}>Click</button>
            <table id={props.id} className="dataTableCustom" style={{"width":"100%"}}>
                <thead>
                    {THeadContentRender()}
                </thead>        
            </table>
        </>
    )
})

export default CDynamicTableAjax;