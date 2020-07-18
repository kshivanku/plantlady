import React from 'react'
import {Link} from 'react-router-dom'

export const Header = () => {
    return (
        <div className="header">
            <Link to='/'><p className="logo">Plant Lady</p></Link>
        </div>
    )
}