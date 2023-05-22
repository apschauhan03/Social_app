import React from 'react'
import './Topbar.css'
import { Search,Chat,Person,Notifications } from '@mui/icons-material'

export default function Topbar() {
  return (
    <div className='topbarContainer'>
        <div className='topbarLeft'>
            <span className='topbarLogo'>LightLook</span>
        </div>
        <div className='topbarCenter'>
            <div className='searchBar'>
                <input placeholder='Search'></input>
                <Search/>
            </div>
        </div>
        <div className='topbarRight'>
            {/* <div className='topbarLinks'>
                <span className='topbarLink'>Homepage</span>
                <span className='topbarLink'>Timeline</span>
            </div> */}
            <div className='topbarIcons'>
                <div className='topbarIconsItems'>
                    <Chat className='topbarIconsBadge'/>
                    <span className='topbarIcon'>1</span>
                </div>
                <div className='topbarIconsItems'>
                    <Notifications className='topbarIconsBadge'/>
                    <span className='topbarIcon'>1</span>
                </div>
                <div className='topbarIconsItems'>
                    <Person className='topbarIconsBadge'/>
                    <span className='topbarIcon'>1</span>
                </div>
               <img className='topbarProfilepic' src='/Assets/Peoples/1.jpg' alt='profile'></img>
               
            </div>
        </div>

    </div>
  )
}
