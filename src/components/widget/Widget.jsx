import React from 'react'
import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BrightnessLowIcon from '@mui/icons-material/BrightnessLow';
import { SportsRugbySharp } from '@mui/icons-material';


export const Widget = ({ type }) => {

    let data; 
    // temporary

    const amount = 100;
    const diff = 20;

    // eslint-disable-next-line default-case
    switch(type){
        case "user":
        data = {
            title:"USERS",
            isMoney: false,
            link:"See all users",
            icon:<PersonOutlineIcon className='icon' style={{color:"crimson", 
        backgroundColor:"rgba(255, 0, 0, 0.2)"
        
        }}/>,
            
        };
        break;
        // eslint-disable-next-line no-fallthrough
        case"order":
        data={
            title:"ORDERS",
            isMoney: false,
            link:"vIEW all ORDERS",
            icon:<AccountBalanceIcon className='icon'  style={{color:"goldenrod", 
            backgroundColor:"rgba(255, 0, 0, 0.2)"}}
            />
            
        };

        break;
        
        // eslint-disable-next-line no-fallthrough
        case"earning":
        data={
            title:"EARNINGS",
            isMoney: true,
            link:"View all earning",
            icon:<LocalShippingIcon className='icon'style={{color:"crimson", 
            backgroundColor:"rgba(255, 0, 0, 0.2)"
            
            }}/>,
        };  
        break;
        // eslint-disable-next-line no-fallthrough
        case"balance":
        data={
            title:"BALANCE",
            isMoney: true,
            link:"See Details",
            icon:<BrightnessLowIcon className='icon'style={{color:"purpole", 
            backgroundColor:"rgba(255, 0, 0, 0.2)"
            
            }}/>,
        };
    }

  return (
    <div className='widget'>
        <div className="left">

            <span className='title'> {data.title}</span>
            <span className='counter'> {data.isMoney && "$"} {amount}</span>

            <span className='link'> {data.link}</span>
        </div>
        <div className="right">
            <div className="parcentage positive">
                
                <KeyboardArrowUpIcon/>
                {diff}%
            </div>
               {data.icon}
        </div>
    </div>
  )
}
