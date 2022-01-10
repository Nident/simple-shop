import React, { useState, useEffect } from "react";
import './HomePage.css'

const pictures = [
    <img alt='pic' src='https://www.iphones.ru/wp-content/uploads/2021/09/1-3-1.jpg' height='100%' />,
    <img alt='pic' src='https://www.iphones.ru/wp-content/uploads/2021/09/1-7-1.jpg' height='100%' />,
    <img alt='pic' src='https://www.iphones.ru/wp-content/uploads/2021/09/20.51.16.jpg' height='100%' />
]



function HomePage() {



    function backSlide(){
        let elem = document.getElementById(newSlide)
        elem.removeAttribute('style')
        let change = document.getElementById('slide')
        change.classList.add('apearclassLeft')
        setNewSlide(newSlide-1)
        setTimeout(()=> {
            change.classList.remove('apearclassLeft')
        },600)
            
        if(newSlide+1 < pictures.length-1){
            setNewSlide(pictures.length -1)}
        }
    
    
    function nextSlide(){
        let elem = document.getElementById(newSlide)
        elem.removeAttribute('style')
        let change = document.getElementById('slide')
        change.classList.add('apearclassRight')
        setNewSlide(newSlide+1)
        setTimeout(()=> {
            change.classList.remove('apearclassRight')
        },600)
        if(newSlide+1 > pictures.length -1 ){
            setNewSlide(0)}
        }
    
    
        const [newSlide, setNewSlide] = useState(0)
   
    useEffect(() =>{
        let elem = document.getElementById(newSlide)
        elem.setAttribute('style', "opacity:1")
    })
    return(
        <div className="home-wrapper">
            <div className="slider">
                <div className='Arrow-left' onClick={() => backSlide()}>
                    <div className='this-arrow-left'></div>    
                </div>               
                <div className='slide-child' >
                    
                    <div className='paticular-slide'  id='slide'>{pictures[newSlide]}</div>
                    <div className='dots'>
                        {pictures.map((_,index) => <div className='dot' id={index}>&#9679;</div>)}
                    </div>
                </div>
                <div className='Arrow-right' onClick={() => nextSlide()}>
                    <div className='this-arrow-right'></div>  
                </div>               

            </div>
            
            <div className="novelty">
                    <div className='block'>
                        <div className='shot'>
                            <img alt='shot'
                            src='https://c.pxhere.com/photos/bd/76/iphone_fall_forest_cellphone_phone-21965.jpg!d'
                            width='100%'
                            />
                        </div>
                    </div>

                    <div className='block'>
                        <div className='shot'>
                        <img alt='shot'
                            src='https://iphoneroot.com/wp-content/uploads/2011/10/IMG_1295.JPG'
                            width='100%' 
                            />
                        </div>
                    </div>

                    <div className='block'>
                        <div className='shot'>
                        <img alt='shot'
                        src='https://yobte.ru/uploads/posts/2019-08/pobediteli-konkursa-mobilnoj-fotografii-iphone-photography-awards-2019-22.jpg'
                        width='100%'
                        />
                        </div>
                    </div>

                    <div className='block'>
                         <div className='shot'>
                         <img alt='shot'
                        src='https://get.pxhere.com/photo/iphone-smartphone-hand-apple-person-girl-woman-hair-camera-photography-leg-model-spring-fashion-clothing-lady-hairstyle-taking-photo-human-body-dress-glasses-selfie-picture-photograph-skin-beauty-blond-outfit-interaction-photo-shoot-956001.jpg'
                        width='100%'
                            />
                         </div>
                    </div>
            </div>
        </div>
    )
}


export default HomePage