import React from 'react';
import './Footer.css'

function Footer () {
    return (
        <footer className='footer'>
            <div className='footer-wrap-left'>
            <img className='footer-logo' src='https://i.ibb.co/Tq1KQJc/packo-logo-white.png' alt='logo'/>
            <p className='footer-title'>Pemadam kelaparan ketika kamu mager rumah</p>
            <p className='footer-desc'> Scelerisque platea pulvinar neque egestas et vivamus praesent porttitor libero.</p>
            <ul className='footer-link'>
            <li>© 2022 Packo</li>
            <li>Privacy policy</li>
            <li>Terms of service</li>
            </ul>
            </div>
            <div className='footer-wrap-right'>
                <img className='google' src='https://i.ibb.co/3S06Rc1/google-play-white.png' alt='google'/>
                <img className='apple' src='https://i.ibb.co/Kr5M8Hy/app-store-white.png' alt='apple'/>
            </div>
        </footer>
    )
}

export default Footer;