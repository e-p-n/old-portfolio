import React from "react";


function Modal({onClose, currentPhoto}) {
    const {name, description, tools, website_1, index} = currentPhoto;
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
                    <img src={require(`../../assets/images/large/design/${index}.jpg`).default} alt="current category" />
                </div>
                <div className="row ml-3 mr-3 mt-2">
                    <p>{description} {tools}</p>
                </div>
                {}
                <div className="row justify-content-center">
                    <a href={website_1} target="_blank" rel="noreferrer" className="btn btn-primary rounded-pill">
                        See More
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Modal;