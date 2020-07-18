import React from 'react'
import {useNavigate} from 'react-router-dom'
import '../App.css'

export const PlantCard = ({plantInfo}) => {
    const navigate = useNavigate();
    console.log(navigate)
    return (
        <div className="plantCard" onClick={()=> navigate(`plantpage/${plantInfo.id}`)}>
            <div className="plantCardImageContainer">
                <img src={require(`../Images/${plantInfo.Image}.jpg`)}/>
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
        </div>
    )
}