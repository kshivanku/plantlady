import React from 'react';
import {PlantCard} from '../Components/PlantCard'
import '../App.css'

export const PlantsGrid = ({plantsData}) => {
    console.log(plantsData)
    return (
        // <div>Grid</div>
        <div className="plantsGrid">
            {plantsData.map((plantInfo) => (<PlantCard key={plantInfo.id} plantInfo={plantInfo}></PlantCard>))}
        </div>
    )
}