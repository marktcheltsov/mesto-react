import React from "react";

function PopupWithForm(props) {
    return(
        <div className={`popup popup-${props.name}`} id="popup">
        <div className={`popup__container popup-${props.name}__container`}>
          <h2 className="popup__title">{props.title}</h2>
          {props.children}
        <button className={`popup__close-button popup-${props.name}__close-button`} type="button" onClick={props.isOpen}></button>
        </div>
      </div>
    )
}

export default PopupWithForm;
