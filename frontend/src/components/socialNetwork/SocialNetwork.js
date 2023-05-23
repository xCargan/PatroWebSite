import React from 'react'
import './SocialNetwork.css'
import InstagramLogo from '../../img/instagram-logo.png'
import FacebookLogo from '../../img/facebook-logo.png'
import GallerieLogo from '../../img/gallerie-logo.png'

export default function SocialNetwork() {
  return (
    <div id="social_network">
        <ul>
            <li><img src={InstagramLogo} alt="InstagramLogo" id="InstagramLogo"></img></li>
            <li><img src={FacebookLogo} alt="FacebookLogo" id="FacebookLogo"></img></li>
            <li><img src={GallerieLogo} alt="GallerieLogo" id="GallerieLogo"></img></li>
        </ul>
    </div>
  )
}
