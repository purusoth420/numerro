import React from 'react'
import './header.scss'
import logo from '../../assets/images/logo.png'

export const Header = () => {
    return (
        <div className='header'>
            <div>
                <img src={logo} className='logo' />
            </div>
            <div></div>
        </div>
    )
}
