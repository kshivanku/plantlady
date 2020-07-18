import React from 'react';
import {PlantCard} from '../Components/PlantCard'
import {motion} from 'framer-motion'
import '../App.css'

export const PlantsGrid = ({plantsData}) => {
    const gridvariant = {
        "hidden": {},
        "visible": {
            transition: {
                staggerChildren: 0.1,
                staggerDirection: 1,
              }
        }
    }
    return (
        <motion.div 
            className="plantsGrid"
            variants={gridvariant}
            initial="hidden"
            animate="visible"
        >
            {plantsData.map((plantInfo) => (<PlantCard key={plantInfo.id} plantInfo={plantInfo}></PlantCard>))}
        </motion.div>
    )
}