import { useContext } from 'react'
import './Home.css'
import { HomeContext } from '../Context'

export default function Home(){

    const context = useContext(HomeContext)
    if(!context){
        throw new Error('Home must be used within a HomeContext.Provider')
    }
    const { handleHomeClick } = context;

    return(
        <div className="home-container">
            <div className='description'>
                <h4>So, you want to travel to</h4>
                <h1>SPACE</h1>
                <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
                    outer space and not hover kind of on the edge of it. Well sit back, and relax 
                    because we’ll give you a truly out of this world experience!
                </p>
            </div>
               <button className='explore-button' onClick={handleHomeClick}>EXPLORE</button>
        </div>
    )
}