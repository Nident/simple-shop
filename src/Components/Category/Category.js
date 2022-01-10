import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Category.css'

function Category() {
    const [openApple, setOpenApple] = useState(false)
    function openerApple() {
        if(openApple) {setOpenApple(false)}
        else {setOpenApple(true)}
    }


    const [openSumsung, setOpenSumsung] = useState(false)
    function openerSumsung() {
        if(openSumsung) {setOpenSumsung(false)}
        else {setOpenSumsung(true)}
    }
    return(
        <div className='cat-wrapper'>
                
                <div className='All' >
                    <NavLink to='/all' className='all-txt'> 
                        All  
                    </NavLink>

                    </div>
                
                <div className='Apple' onClick={() => openerApple()}>Apple</div>
                {
                    openApple
                    &&
                    <div className='Apple-cat'>
                        <div className='Apple-elems' style={{borderTop: '2px solid black'}}>iPhone</div>
                        <div className='Apple-elems'>iPad</div>
                        <div className='Apple-elems'>iPod</div>
                        <div className='Apple-elems' style={{borderBottom: '1px solid black'}}>AirPods</div>
                    </div>
                }
                <div className='Sumsung'  onClick={() => openerSumsung()}>Sumsung</div>
                {
                    openSumsung
                    &&
                    <div className='Sumsung-cat'>
                        <div className='Sumsung-elems' style={{borderTop: '0px solid black'}}>Phones</div>
                        <div className='Sumsung-elems'>Pads</div>
                        <div className='Sumsung-elems'>Players</div>
                        <div className='Sumsung-elems' style={{borderBottom: '2px solid black'}}>HeadPhones</div>
                    </div>
                }
            
        </div>

    )
}


export default Category