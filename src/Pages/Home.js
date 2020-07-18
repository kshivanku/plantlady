import React from 'react'
import {PlantsGrid} from '../Components/PlantsGrid'

export const Home = ({plantsData}) => {
    
    return(
        <div>
            {plantsData.length > 0 && <PlantsGrid plantsData={plantsData}/>}
        </div>
    )
}