import React from 'react';
import { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function ContactModal() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <a variant="primary" onClick={handleShow}>contacter</a>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                className="modal-css"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Contactez-nous</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className='d-flex flex-row'>
                        <div className='col align-start'>
                            <label>Nom : </label>
                            <input for="name" type="text" placeholder='indiquez votre nom' className='w-100 d-flex justify-content-end' /><br />
                            <label>Prenom : </label>
                            <input for="firstname" type="text" placeholder='indiquez votre prenom' className='w-100 d-flex justify-content-end' /><br />
                            <label>E-mail <span className='text-danger'>*</span> : </label>
                            <input for="email" type="text" placeholder='indiquez votre email' className='w-100 d-flex justify-content-end' /><br />
                            <label>Telephone : </label>
                            <input for="phone" type="number" placeholder='indiquez votre numero de telephone' className='w-100 d-flex justify-content-end' /><br />
                            <label>Votre message <span className='text-danger'>*</span> : </label>
                            <textarea placeholder='quelle-est votre question?' className='w-100 d-flex d-flex justify-content-end' />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Annuler
                    </Button>
                    <Button variant="dark">Valider</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ContactModal;