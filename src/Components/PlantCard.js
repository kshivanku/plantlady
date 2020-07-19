import React from 'react'
import {useNavigate} from 'react-router-dom'
import '../App.css'
import {motion, useViewportScroll, useTransform} from 'framer-motion'
import watericon from '../Images/watering-icon.svg'
import sunicon from '../Images/sun.svg'
import soilicon from '../Images/soil.svg'
import calendaricon from '../Images/calendar.svg'

export const PlantCard = ({plantInfo}) => {
    const navigate = useNavigate();
    const {scrollYProgress} = useViewportScroll();
    const y_inside = useTransform(scrollYProgress, [0, 1], [0, 400])
    const y_container = useTransform(scrollYProgress, [0, 1], [0, 100])
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
            <motion.div 
                className="plantCardImageContainer"
                style = {{y: y_container}}
            >
                <motion.img 
                    whileHover={{
                        scale: 1.1
                    }}
                    style = {{y: y_inside}}
                    transition={{
                        type: 'tween',
                        duration: 0.6,
                        ease: [0.43, 0.13, 0.23, 0.96]
                    }}
                    src={require(`../Images/${plantInfo.Image}.jpg`)}
                />
            </motion.div>
            <div className="plantDetails">
                <div className="plantDetailHeader">
                    <h1>{plantInfo.Name}</h1>
                    <div className="plantDateBought">
                        <img className="plantDateBought_icon" src={calendaricon} />
                        <p className="plantDateBought_text">{plantInfo.DateBought}</p>
                    </div>
                </div>
                <div className="platDetailList">
                    <div className="plantDetailItem">
                        <img className="plantDetailItem_icon" src={watericon} />
                        <p className="plantDetailItem_text">{plantInfo.Water}</p>
                    </div>
                    <div className="plantDetailItem">
                        <img className="plantDetailItem_icon" src={sunicon} />
                        <p className="plantDetailItem_text">{plantInfo.Sunlight}</p>
                    </div>
                    <div className="plantDetailItem">
                        <img className="plantDetailItem_icon" src={soilicon} />
                        <p className="plantDetailItem_text">{plantInfo.Soil}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}