import React from 'react'
import "./sidebar.scss"

import { Dashboard } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import {Link} from "react-router-dom"

export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='top'>
            <Link to="/" style={{textDecoration:"none"}}>
             <span className="logo">lamaadmin</span>
            </Link>
              </div>
        <hr />
        <div className='center'>
            <ul>
                <p className='title'>Main</p>
                <li>
                    <Dashboard className='icon'/>
                    <span>Dashboard</span>
                </li>
                <p className='title'>LISTS</p>
                <Link to="/users" style={{textDecoration:"none"}}>
                <li>
                    <PersonIcon className='icon'/>
                    <span>Users</span>
                </li>
                </Link>
                <Link to="/products" style={{textDecoration:"none"}}>
                <li>
                    <LocalMallIcon className='icon'/>
                    <span>Products</span>
                </li>
                    </Link>
                <li>
                    <CreditCardIcon className='icon'/>
                    <span>Orders</span>
                    </li>

                    <li>
                    <CreditCardIcon className='icon'/>
                    <span>Delivery</span>
                    </li>
                    <p className='title'>USEFUL</p>
                <li>
                <InsertChartIcon className='icon'/>
                    <span>Stats</span>
                </li>
                <li>
                <InsertChartIcon className='icon'/>
                    <span>Notifications</span>
                </li>
                <p className='title'>SERVICE</p>
                <li>
                <InsertChartIcon className='icon'/>
                    <span>System Health</span>
                </li>
                <li>
                <InsertChartIcon className='icon'/>
                    <span>Logs</span>
                </li>
                <li>
                <InsertChartIcon className='icon'/>
                <span>Settings</span>
                </li>
                <p className='title'>USER</p>
                <li>
                <InsertChartIcon className='icon'/>
                <span>Profile</span>
                </li>
                <li>
                <InsertChartIcon className='icon'/>
                <span>logout</span>
                
                </li>
            </ul>
        </div>
        <div className='bottom'>
            <div className="colorOption"></div>
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    </div>
  )
}
