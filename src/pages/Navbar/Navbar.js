import React from 'react';
import './Navbar.css';

function Navbar (){
    return (
        <nav className='navbar'>
            <img className='nav-logo' src='https://i.ibb.co/4tmZ7qw/packo-logo-1.png' alt='logo'/>
            <form>
                <input className='search' type='text' placeholder='Deliver to...'/>
            </form>
        </nav>
    )
}

export default Navbar;