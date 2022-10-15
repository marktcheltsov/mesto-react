import React from "react";

function Card(props) {
    function cardClick() {
        props.handleClick(props.title, props.url)
    }

    return (
        <div className="element" key={props.id}>
        <button className="element__delete-icon"></button>
        <div className="element__img-block">
          <img className="element__image" src={props.url} onClick={cardClick}/>
        </div>
        <div className="element__text-block">
          <h2 className="element__title">{props.title}</h2>
          <div className="element__like-block">
            <button className="element__like"></button>
            <p className="element__like-counter">{props.likes}</p>
          </div>
        </div>
      </div>
    )
}

export default Card