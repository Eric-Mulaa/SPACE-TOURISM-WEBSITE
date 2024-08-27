import { useState } from 'react';
import './Destination.css';
import data from '../data.json'; 

interface Destination {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
}

export default function Destination() {
  const initialDestination = data.destinations.find(dest => dest.name.toLowerCase() === 'moon') || data.destinations[0];

  const [selectedDestination, setSelectedDestination] = useState<Destination>(initialDestination);

  const handleDestinationClick = (destinationName: string) => {
    const destination = data.destinations.find(dest => dest.name.toLowerCase() === destinationName.toLowerCase());
    setSelectedDestination(destination || initialDestination);
  };

  return (
    <div className='destination-cover'>
    <div className="destination-container">
        <div className='left-section'>
            <h3>01 PICK YOUR DESTINATION</h3>
            <div className='destination-image-div'>
            <img className='destination-image' src={selectedDestination.images.png} alt={selectedDestination.name} />
            </div>
        </div>
        <div className='right-section'>
          <div className='buttons'>
          {
                data.destinations.map((dest)=>(
                    <button 
                    key={dest.name} 
                    onClick={()=>handleDestinationClick(dest.name)} 
                    className={`button ${selectedDestination.name === dest.name ? 'active' : ''}`}
                    > {dest.name.toUpperCase()} </button>
                ))
            }
          </div>
            
            <h1> {selectedDestination.name} </h1>
            <span> {selectedDestination.description} </span>
            <div className='right-section-bottom'>
              <div>
                <h5>AVG. DISTANCE</h5>
                <p> {selectedDestination.distance} </p>
              </div>
              <div>
                <h5>EST. TRAVEL TIME</h5>
                <p> {selectedDestination.travel} </p>
              </div>
            </div>
        </div>
    </div>
    </div>

    
  );
}
