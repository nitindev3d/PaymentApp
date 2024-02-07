
import React from 'react'

function Signup() {
    return (
        <div className='signup-container'>
            <div className="signup-box">
                <div className="input-box">
                    <label htmlFor="username">Username: </label>
                    <input id="username" type="text" className="username" />
                    
                </div>
                <div className="input-box">
                    <label htmlFor="password">Password: </label>
                    <input id="password" type="password" className="password" />
                </div>
            </div>
        </div>
    )
}

export default Signup