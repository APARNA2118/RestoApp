import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import '../components/style.css'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='socialmd'> 
      <InstagramIcon/>
      <FacebookIcon/>
      <WhatsAppIcon/>
      </div>
        <p>&copy; 2024 teatalk.com</p>
    </div>
  )
}

export default Footer