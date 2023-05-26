import React from 'react'
import './SocialNetwork.css'
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';

export default function SocialNetwork() {
  return (
    <div>
      <div id='div_network'>
        <FaFacebookF id="FacebookLogo"/>
        <FaInstagram id="InstagramLogo" />
        <PhotoSizeSelectActualIcon id="GallerieLogo"/>
      </div>
    </div>
  )
}
