import React from 'react'
import {Link} from 'react-router-dom'
import { ReactComponent as Logo } from '../Images/logo.svg'
import {motion} from 'framer-motion'

export const Header = () => {
    return (
        <div className="header">
            <motion.div whileHover={{scale: 1.1}}>
            <Link to='/'>
                <Logo className="logo-image" />
                <p className="logo-text">Plant Lady</p>
            </Link>
            </motion.div>
        </div>
    )
}