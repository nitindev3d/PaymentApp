

import React from 'react'

function NavBar({setIsAuthenticated}) {

    const handleSignIn = () => {
        setIsAuthenticated(true)
    }
    return (
        <div className='navbar-container'>
            <button className='nav-content signup-button'
            onClick={handleSignIn}
            >Sign In</button>
            <button className='nav-content'>Pay to Customer</button>
            <button className='nav-content'>Pay to Business</button>
        </div>

    )
}

export default NavBar