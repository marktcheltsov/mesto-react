import React, { useEffect } from "react";
import profileEditBntImg from '../images/edit__button/Vector(3).svg'
import profileChangeImg from '../images/profile__image/image-change.png'
import myApi from '../Api.js'
import Card from './Card.js'

function MainPage(props) {
  const [userName, setUserName] = React.useState('')
  const [userAvatar, setUserAvatar] = React.useState('')
  const [userDescription, setUserDescription] = React.useState('')
  const [cards, setCards] = React.useState([])

   useEffect(()=> {
    myApi.getUserInfoFromServer().then((res)=> {
      setUserAvatar(res.avatar)
      setUserName(res.name)
      setUserDescription(res.about)
    })
   }, [])

   useEffect(()=> {
    myApi.getCards().then((res)=> {
        setCards(res)
    })
  }, [])

    return(
        <main className="main">
        <section className="profile">
          <div className="profile__info">
            <div className="profile__user-block">
              <h1 className="profile__name">{ userName }</h1>
              <p className="profile__about">{ userDescription }</p>
            </div>
            <button className="profile__edit-button" type="button" onClick={ props.onEditProfile }><img src={ profileEditBntImg } alt="добавить"/></button>
            <div className="profile__avatar">
              <div className="profile__change-image" onClick={ props.onEditAvatar }>
                <img src={ profileChangeImg } alt="аватарка" className="profile__avatar-image"/>
              </div>
              <img src={ userAvatar} alt="аватарка" className="profile__image"/>
            </div>
          </div>
          <button className="profile__card-button" type="button" onClick={ props.onAddPlace }></button>
        </section>
        <section className="elements">

        {cards.map((info, i) => (

          <Card url={info.link} title={info.name} id={info._id} likes={info.likes.length} handleClick={props.onCardClick}/>)
    )}
        </section>
      </main>
    )
}

export default MainPage;