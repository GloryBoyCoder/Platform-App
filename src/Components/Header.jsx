import React from 'react';
import { ReactComponent as UploadIcon} from '../images/icons/upload.svg'
import { ReactComponent as IdeasIcon } from '../images/icons/ideas.svg'
import { ReactComponent as BellIcon } from '../images/icons/bell.svg'
import { ReactComponent as MessageIcon } from '../images/icons/messages.svg'
import { useNavigate, useLocation } from 'react-router-dom';




// import Icon from '.image/upload.svg
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';




function Header() {
  return (
    <nav className='py-3 px-3 text-lg h-15 w-100% bg-white font-medium flex justify-between shawdow-xl overflow-hidden'>
      <Link to='/' className='flex items-center'>
        <h1>Platform</h1>
      </Link>
      <div className='font-normal text-xs hidden md:flex' >
        <div className='flex gap-5 '>
            <Link to='/Upload' className='flex gap-2 items-center' >
              <UploadIcon width={20} height={20} fill='#000' />
              <h2>Upload</h2>
            </Link>
            <Link to='/Ideas' className='flex gap-2 items-center'>
              <IdeasIcon width={20} height={20} fill='#000' />
              <h2>Ideas</h2>
            </Link>
            <Link to='/Notifications' className='flex gap-2 items-center'>
              <BellIcon width={20} height={20} fill='#000' />
              <h2>Notifications</h2>
            </Link>
            <Link to='/Messages' className='flex gap-2 items-center'>
              <MessageIcon width={20} height={20} fill='#000' />
              <h2>Messages</h2>
            </Link>
            <Link to='/Profile' className='flex items-center gap-2'> 
              <img src={require('../images/pfp.jpeg')} className='h-8 w-8 rounded-full '  />
              <h2>Profile</h2>
            </Link>
          </div>
        </div>
    </nav>
  )
}

export default Header