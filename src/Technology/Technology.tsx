import { useState } from 'react'
import data from '../data.json'
import './Technology.css'

interface TechProps{
    name: string;
    images:{
        portrait: string;
        landscape: string;
    };
    description: string;
}


export default function Technology(){
    const initialTechData = data.technology[0]
    const[techData, setTechData] = useState<TechProps>(initialTechData)
    function handleTechClick(index: number){
        const selectedTech = data.technology[index]
        setTechData(selectedTech || initialTechData)
    }
    return(
        <div className='tech-cover'> 
        <div className='tech-container'>
            <div className='tech-left-section'>
                <h2>03 SPACE LAUNCH 101</h2>
                <div className='tech-left-bottom'>
                    <div className='tech-buttons'>
                        {
                            data.technology.map((tech, i)=>(
                                <button className= {`tech-button ${techData.name === tech.name? 'active' : '' }`}  key={tech.name} onClick={()=>handleTechClick(i)} >{i+1}</button>
                            ))
                        }
                    </div>
                    <div className='tech-center-section'>
                        <p>THE TERMINOLOGY...</p>
                        <h1> {techData.name} </h1>
                        <p> {techData.description} </p>
                    </div>
                </div>
            </div>
            <div className='tech-section-right'>
                <img className='tech-image' src= {techData.images.landscape} alt= {techData.name} />
            </div>
        </div>
        </div>
    )
}