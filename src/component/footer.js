import React from 'react'
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faDiscord, faInstagram } from "@fortawesome/free-brands-svg-icons"
import ContactModal from './modal-contact'


const Footer = () =>{

    return(
        <>
        <footer>   
            <div className='top-footer'>
                <div>
                  <p>Nous sommes à votre disposition au cas où vous désirez nous <span className='contact'><ContactModal /></span></p>
                </div>
                <hr />
                <div className='div-icon'>
                    <a className='font-icone' href="http://www.facebook.com" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a className='font-icone middle' href="http://www.discord.com" target="_blank"><FontAwesomeIcon icon={faDiscord} /></a>
                    <a className='font-icone' href="http://www.instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
            </div>
            <div className='bottom-footer'>
                <p className='copyright-zone'><span className='copyright-sigle'>©</span> 2022 <spans className='copyright-text'>copyright</spans> RetroTendo</p>
            </div>
        </footer> 
        </> 
    )
}

export default Footer 