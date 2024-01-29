import React from 'react';
import './right-side.css';
import chair from '../../../images/pasteImage.webp';

export const RightSide = () => {
    return (        
            <div className="left-side">
                <div className="pasteImage">
                  <img className='imgChair' src={chair} alt="photo chair" />
                </div>                
                <div className="logo-of-left-side">
                   <div className="legant-of-left-side">
                       <p>3legant.</p>
                    </div>
                </div> 
            </div>
            
        
    )
}
export * from './right-side';