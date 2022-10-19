import React from "react";

function PopupWithForm({name, title, children, isOpen, btnText, isClose}) {
    return(
        <div className={`popup popup-${name} ${isOpen ? 'popup_opened' : ''}`} id="popup">
        <div className={`popup__container popup-${name}__container`}>
          <h2 className="popup__title">{title}</h2>
          <form className={`popup__form popup__${name}-form`} name="input__block" noValidate>
          {children}
          <button type="submit" className={`popup__save-button popup-${name}__save-button popup__save-button_disabled`}>{btnText}</button>
          </form>
        <button className={`popup__close-button popup-${name}__close-button`} type="button" onClick={isClose}></button>
        </div>
      </div>
    )
}

export default PopupWithForm;
