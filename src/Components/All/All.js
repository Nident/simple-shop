import React from "react";
import './All.css'


const allDevices = ['iPhone 6','iPhone 7','iPhone 8','iPhone X',
'iPhone 11', 'iPhone 12', 'iPhone 13','Sumsung 1', 'Sumsung 2',
'Sumsung 3', 'Sumsung 4','Sumsung 5']

function All() {
    return(
        <div className='all-wrapper'>
            <div className='device-wrapper'>
                
                 {allDevices.map(e => {
                    return (
                    <div className='device'> {e} </div>
                        )
                })} 
            </div>
        </div>
    )
}

export  default All