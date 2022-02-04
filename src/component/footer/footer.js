import './footer.css'
import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faDiscord, faInstagram, faTwitch, faTwitter, faYoutube, faReddit } from "@fortawesome/free-brands-svg-icons"
import ContactModal from './modal'
import visa from '../../images/visa.png'
import paypal from '../../images/paypal.png'
import bancontact from '../../images/bancontact.png'
import mastercard from '../../images/mastercard.png'

function Footer() {
    return (
        <div>
            <footer>
                <div className='top-footer footer'>
                    <div className='left-footer'>
                        <div>
                            <p>Nous sommes à votre disposition si vous désirez nous <span className='contact'><ContactModal /></span></p>
                        </div>
                        <hr />
                        <div className='div-icon'>
                            <a className='font-icone' href="http://www.facebook.com" target="_blank"><FontAwesomeIcon className='iconFooter' icon={faFacebook} /></a>
                            <a className='font-icone middle' href="http://www.discord.com" target="_blank"><FontAwesomeIcon className='iconFooter' icon={faDiscord} /></a>
                            <a className='font-icone right' href="http://www.instagram.com" target="_blank"><FontAwesomeIcon className='iconFooter' icon={faInstagram} /></a>
                            <a className='font-icone right' href="http://www.twitch.tv" target="_blank"><FontAwesomeIcon className='iconFooter' icon={faTwitch} /></a>
                            <a className='font-icone right' href="http://www.twitter.com" target="_blank"><FontAwesomeIcon className='iconFooter' icon={faTwitter} /></a>
                            <a className='font-icone right' href="http://www.youtube.com" target="_blank"><FontAwesomeIcon className='iconFooter' icon={faYoutube} /></a>
                            <a className='font-icone' href="http://www.reddit.com" target="_blank"><FontAwesomeIcon className='iconFooter' icon={faReddit} /></a>
                        </div>
                    </div>
                    <div className='right-footer'>
                        <div className='div-adresse mt-5'>
                            <p><span className='white-letter'>Adresse :</span><br /> Avenue du noyé 4545<br /> 25150 East Blue</p>
                        </div>
                        <div className='div-payement my-5'>
                            <p className='white-letter  fw-light textPayment'>Moyens de paiement :</p>&ensp;
                            <img src={visa} width="80" />&ensp;
                            <img src={mastercard} width="80" />&ensp;
                            <img src={paypal} width="80" />&ensp;
                            <img src={bancontact} width="80" />&ensp;
                        </div>
                    </div>
                </div>
            </footer>
                <div className='bottom-footer'>
                    <p className='copyright-zone my-4'><span className='copyright-sigle'>©</span> 2022 <span className='copyright-text'>copyright</span> RetroTendo</p>
                </div>
        </div>
    );
}

export default Footer;
