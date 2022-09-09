import React from 'react';
import './Navbar.css';

function Navbar (){
    return (
        <nav className='navbar'>
            <img className='nav-logo' src='https://i.ibb.co/4tmZ7qw/packo-logo-1.png' alt='logo'/>
            <form>
                <input className='search' type='text' placeholder='Deliver to...'/>
            </form>
            <div className='btn-wrap'>
                <button className='btn-cart'><img src='https://i.ibb.co/87f1xhy/Vector-1.png' alt='cart-btn'/></button>
                <button className='btn-log'>Login or Signin</button>
            </div>
        </nav>
    )
}

export default Navbar;