import React from 'react'
import {useEffect} from 'react'
import {useParams} from 'react-router-dom';
import {motion, useViewportScroll, useTransform} from 'framer-motion'
import '../App.css'

export const PlantPage = ({plantsData}) => {
    const {id} = useParams();
    const plantInfo = plantsData[id-1];
    const transition= {
        type: 'tween',
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96]
    }
    const {scrollYProgress} = useViewportScroll()
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
    useEffect(()=> {
        window.scrollTo(0, 0)
    }, [])
    return(
        <motion.div>
            {
                plantInfo && 
                <div>
                    {/* <h1>{plantInfo.Name}</h1>
                    <div>
                        <h3>Water</h3>
                        <p>{plantInfo.Water}</p>
                        <h3>Sunlight</h3>
                        <p>{plantInfo.Sunlight}</p>
                        <h3>Soil</h3>
                        <p>{plantInfo.Soil}</p>
                        <h3>Date Bought</h3>
                        <p>{plantInfo.DateBought}</p>
                    </div> */}
                    <motion.div className="heroImage" initial={{y: 10, opacity: 0}} animate={{y:0, opacity: 1}} transition={transition}>
                        <motion.img src={require(`../Images/${plantInfo.Image}.jpg`)} style={{scale:scale}}/>
                    </motion.div>
                </div>
            }
            
        </motion.div>
    )
}