import React from 'react';
import { AuthFormUp } from '../auth-formup/auth-formup';
import './auth-pageup.css';
import chair from './img/pasteImageup.jpg';

export const AuthPage: React.FC = () => {
    
    return (
        <div className="auth-page">
            <div className="left-side-of-site{">
               <div className="image-of-left-side">
                  <div className="pasteImage">
                  <img src={chair} alt="photo" />
                  </div>
                </div>
                <div className="logo-of-left-side">
                   <div className="legant-of-left-side">
                       <p>3legant.</p>
                    </div>
                </div> 
            </div>
            <div className="right-side-of-site">
              <AuthFormUp />
            </div>
        </div>
    )
}

