import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, imageSrc }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close" onClick={onClose}>&times;</span>
                <img src={"http://bafybeifjxg3xkvpfkgkofisaxlm7zjecdl5wxl6t3qrkqkljg3hncj2nvq.ipfs.localhost:8080/?filename="+imageSrc} height={"400px"} width={"900px"} alt="modal" />
            </div>
        </div>
    );
};

export default Modal;
