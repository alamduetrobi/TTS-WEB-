import React from 'react'
import "./navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ListIcon from '@mui/icons-material/List';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='wrapper'>
            <div className="search">
                <input type="text" placeholder='Search....' />
                <SearchOutlinedIcon/>
            </div>
            <div className="items">
                <div className="item">
                    <LanguageOutlinedIcon className="icon"/>
                    English
                </div>
                <div className="item">
                    <DarkModeIcon className="icon"/>
               
                </div>
                <div className="item">
                    <SportsBasketballIcon className="icon"/>
                   
                </div>
                <div className="item">
                    <NotificationsNoneIcon className="icon"/>
                    <div className="counter">1</div>
                    
                </div>
                <div className="item">
                    <MessageIcon className="icon"/>
                    <div className="counter">2</div>
                    
                </div>
                <div className="item">
                    <ListIcon className="icon"/>
                   
                </div>
                <div className="item">

<img src="https://picsum.photos/seed/picsum/200/300" alt="" className='avatar' />
                   
                </div>
            </div>
        </div>
    </div>
  )
}
