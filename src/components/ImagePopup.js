import React from "react";

function ImagePopup(props) {

    function closePopup() {
        props.isClose(null, null)
    }

    return (
        <div className="popup popup-image">
        <div className="popup-image__container">
            <img className="popup-image__img"/>
            <h2 className="popup-image__title"></h2>
            <button className="popup__close-button popup-image__close-button" type="button" onClick={ closePopup }></button>
        </div>
    </div>
    )
}

export default ImagePopup