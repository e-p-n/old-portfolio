import React from "react";


function Modal({onClose, currentPhoto}) {
    const {name, description, tools, website_1, website_2, index} = currentPhoto;
    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <div className="row">
                    <div class="ml-4">
                    <h3>{name}</h3>
                    </div>
                    <div className="ml-auto mr-4">
                    <i onClick={onClose} className="fas fa-window-close close-btn"></i>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <img src={require(`../../assets/images/large/${index}.jpg`).default} alt="current category" />
                </div>
                <div className="row ml-3 mr-3 mt-2">
                    <p>{description} {tools}</p>
                </div>
                <div className="row justify-content-center">
                    <a href={website_1} target="_blank" rel="noreferrer" className="btn btn-primary rounded-pill">
                        Visit site
                    </a>
                    <a href={website_2} target="_blank" rel="noreferrer" className="btn btn-primary rounded-pill">
                        Visit <i className="fab fa-github"></i> Repository
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Modal;