import React from "react";
import './Navbar.css'
import {NavLink} from 'react-router-dom'


const category = ['All','iPhone','iPad','iPod','Sumsung Phone', 'Sumsung Pad', 'Sumsung Player']

function Navbar() {
    return(
        <div className='navbar-wrapper'>
            <NavLink to='/' style={{textDecoration: 'none', color:'white'}}>
                Home    
            </NavLink>
            
            <NavLink to='/category' style={{textDecoration: 'none', color:'white'}}>
             <div className='category-title'> Category </div>  
              <div className='category'> 
                {
                    category.map(elem => <div className='elems'>
                        <NavLink to={`/${elem}`} style={{textDecoration:'none'}}  >
                            <div className='elemts-category'>{elem}</div>
                        </NavLink>
                        </div>)
                }
                </div>
            </NavLink>

            <NavLink to='/cart'  style={{textDecoration: 'none', color:'white'}}>Cart</NavLink>
        </div>
    )

}


export default Navbar