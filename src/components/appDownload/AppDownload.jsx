import React from 'react'
import { assets } from '../assets/assets'
import './appDownload.css'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>enjoy the best of experince<br/> download the app</p>
        <div className="app-download-platform">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
        </div>

    </div>
  )
}

export default AppDownload
