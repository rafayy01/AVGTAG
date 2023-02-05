import React from 'react'
import '../styles/background.css';
import logo from '../images/logo.png';

function Background() {
  return (
    <div>
        <div className='container'>
            <div className='logo'>
                <img src={logo} alt='one' height={100}/>
            </div>
        </div>

    </div>
  )
}

export default Background