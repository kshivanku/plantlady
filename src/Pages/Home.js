import React from 'react'
import {PlantsGrid} from '../Components/PlantsGrid'
import {motion} from 'framer-motion'

export const Home = ({plantsData}) => {
    return(
        <motion.div exit={{opacity: 0, y: 1000}}>
            {plantsData.length > 0 && <PlantsGrid plantsData={plantsData} />}
        </motion.div>
    )
}