import React from 'react'
import {useNavigate} from 'react-router-dom'
import '../App.css'
import {motion, useViewportScroll, useTransform} from 'framer-motion'

export const PlantCard = ({plantInfo}) => {
    const navigate = useNavigate();
    const {scrollYProgress} = useViewportScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, 200])
    const transition= {
        type: 'tween',
        duration: 0.5,
        ease: 'easeInOut'
    }
    const cardvariant = {
        "hidden": {
            opacity: 0,
            y: 10
        },
        "visible": {
            opacity: 1,
            y: 0,
            transition: {transition}
        }
    }
    return (
        <motion.div 
            className="plantCard" 
            onClick={()=> navigate(`plantpage/${plantInfo.id}`)}
            variants={cardvariant}
            >
            <div className="plantCardImageContainer">
                <motion.img 
                    whileHover={{
                        scale: 1.1
                    }}
                    style = {{y: y}}
                    transition={{
                        type: 'tween',
                        duration: 0.6,
                        ease: [0.43, 0.13, 0.23, 0.96]
                    }}
                    src={require(`../Images/${plantInfo.Image}.jpg`)}
                />
            </div>
            <h1>{plantInfo.Name}</h1>
            <div>
                <h3>Water</h3>
                <p>{plantInfo.Water}</p>
                <h3>Sunlight</h3>
                <p>{plantInfo.Sunlight}</p>
                <h3>Soil</h3>
                <p>{plantInfo.Soil}</p>
                <h3>Date Bought</h3>
                <p>{plantInfo.DateBought}</p>
            </div>
        </motion.div>
    )
}