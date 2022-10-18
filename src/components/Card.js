import React from "react";

function Card({handleClick, title, url, id, likes}) {

  
 function openPopupImage() {
  handleClick(title, url)
 }

    return (
        <div className="element" key={id}>
        <button className="element__delete-icon"></button>
        <div className="element__img-block">
          <img className="element__image" src={url} onClick={openPopupImage}/>
        </div>
        <div className="element__text-block">
          <h2 className="element__title">{title}</h2>
          <div className="element__like-block">
            <button className="element__like"></button>
            <p className="element__like-counter">{likes}</p>
          </div>
        </div>
      </div>
    )
}

export default Card