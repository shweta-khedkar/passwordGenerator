import React,{useState,useEffect} from 'react'
import './Header.css'

export const Header = () => {
    
 return (
    <div className='header-container'>
        <h1> PASSWORD GENERATOR </h1>
        <div className="featurestitle">
        <h3>Password With</h3>

            <ul>
                <li> Adjust Length</li>
                <li> Uppercase Characters</li>
                <li>  Small Characters</li>
                <li> Special Characers</li>
            </ul>
        </div>
    </div>
  )
}
