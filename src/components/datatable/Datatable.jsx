import React from 'react'
import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import {Link} from "react-router-dom"

import { userColumns, userRows } from '../../datatablesource';

export const Datatable = () => {

    const actionColumn = [
        {
            field:'action',
            headerName:"Action",
            width:400,
            renderCell:()=>{
                return(
                    <div className="cellAction">
                      <Link to="/users/test" style={{textDecoration:"none"}}>
                        <div className="viewButton">View</div>
                        </Link>
                        <Link to="/users/test" style={{textDecoration:"none"}}>
                        <div className="deleteButton">Delete</div>
                        </Link>
                        
                    </div>
                )
            }
        }
    ]

  return (

    <div className='datatable'>
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className='link' style={{textDecoration:"none"}}>Add New</Link>
      </div>
      <DataGrid
      className='datagrid'
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>

  )
}
