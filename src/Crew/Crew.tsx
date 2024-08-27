import { useState } from 'react';
import data from '../data.json'
import './Crew.css'

interface CrewProps{
    name: string;
    images: {
        png: string;
        webp: string;
    };
    role: string;
    bio: string;

}

export default function Crew(){
    const initialCrew = data.crew[0]
    const [selectedCrew, setSelecteCrew] = useState<CrewProps>(initialCrew)
    function handleCrew(name: string){
        const crewSelected = data.crew.find(crew => crew.name.toLowerCase() === name.toLowerCase());
        setSelecteCrew(crewSelected || initialCrew);
    }


    return(
        <div className='crew-cover'>
        <div className='crew-container'>
            <div className='crew-left-side'>
                <h2>02 MEET YOUR CREW</h2>
                <h3> {selectedCrew.role} </h3>
                <h1> {selectedCrew.name} </h1>
                <span> {selectedCrew.bio} </span>
                <div className='crew-buttons'>
                    {
                        data.crew.map((crew)=>(
                            <button className= {`crew-button ${selectedCrew.name === crew.name ? 'active' : '' }`} key={crew.name} onClick={()=>handleCrew(crew.name)}></button>
                        ))
                    }
                </div>
            </div>
            <div className='crew-right-side'>
               <img className='crew-image' src= {selectedCrew.images.png} alt= {selectedCrew.name} />
            </div>
        </div>
        </div>
    )
}