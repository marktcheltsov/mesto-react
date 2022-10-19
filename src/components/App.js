import React, { useState } from "react";
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import PopupWithForm from './PopupWithForm.js'
import PopupImage from './ImagePopup.js'

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isEditCardPopupOpen, setIsEditCardPopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState({})

  function closeAllPopup() {
    setIsEditProfilePopupOpen(false);
    setIsEditCardPopupOpen(false);
    setIsEditAvatarPopupOpen(false)
    setSelectedCard({})
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsEditCardPopupOpen(true)
  }

  function handleCardClick(name, link) {
    setSelectedCard({opened: true, name: name, link: link})
  }

  return (
    <div className="page">
      <Header/>
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
      <Footer/>
      <PopupWithForm name="cards" title="Новое место" id="" isClose={ closeAllPopup } btnText="Создать" isOpen={isEditCardPopupOpen}>
        <div className="popup__input-container">
          <input type="text" className="popup__input" id="popup-cards__input_type_name" placeholder="Название" value="" required minLength="2" maxLength="30" name="name"/>
          <p className="popup__input-error-text"></p>
        </div>
        <div className="popup__input-container">
          <input className="popup__input" id="popup-cards__input_type_link" placeholder="Ссылка на картинку" value="" type="url"  required name="link"/>
          <p className="popup__input-error-text"></p>
        </div>
      </PopupWithForm>
      <PopupWithForm name="profile" title="Редактировать профиль" id="" isClose={ closeAllPopup } isOpen={ isEditProfilePopupOpen } btnText="Сохранить">
      <div className="popup__input-container">
          <input type="text" className="popup__input popup__input_type_name" required value="" minLength="2" maxLength="40" name="name"/>
          <p className="popup__input-error-text"></p>
        </div>
        <div className="popup__input-container">
          <input type="text" className="popup__input popup__input_type_about" required value="" minLength="2" maxLength="200" name="about"/>
          <p className="popup__input-error-text"></p>
        </div>
      </PopupWithForm>
      <PopupWithForm name="remove" title="Вы уверены?" id="" btnText="да">
      </PopupWithForm>
      <PopupWithForm name="avatar" title="Обновить аватар" id="" isClose={ closeAllPopup } isOpen={ isEditAvatarPopupOpen } btnText="Сохранить">
          <div className="popup__input-container">
            <input className="popup__input" placeholder="Ссылка на аватар" value="" type="url"  required name="link"/>
            <p className="popup__input-error-text"></p>
          </div>
      </PopupWithForm>
      <PopupImage isClose={ closeAllPopup } isOpen={ selectedCard }/>
  <template id="template" className="template">
    <div className="element">
      <button className="element__delete-icon"></button>
      <div className="element__img-block">
        <img className="element__image"/>
      </div>
      <div className="element__text-block">
        <h2 className="element__title"></h2>
        <div className="element__like-block">
          <button className="element__like"></button>
          <p className="element__like-counter">0</p>
        </div>
      </div>
    </div>
    </template>
    </div>
  );
}
export default App;

