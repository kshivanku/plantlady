import React from 'react'
import {useParams} from 'react-router-dom';
import '../App.css'

export const PlantPage = ({plantsData}) => {
    const {id} = useParams();
    const plantInfo = plantsData[id-1];
    return(
        <div>
            {
                plantInfo && 
                <div>
                    <h1>{plantInfo.Name}</h1>
                    <div className="heroImage">
                        <img src={require(`../Images/${plantInfo.Image}.jpg`)}/>
                    </div>
                    <div>
                        <h3>Water</h3>
                        <p>{plantInfo.Water}</p>
                        <h3>Sunlight</h3>
                        <p>{plantInfo.Sunlight}</p>
                        <h3>Soil</h3>
                        <p>{plantInfo.Soil}</p>
                    </div>
                </div>
            }
            
        </div>
    )
}