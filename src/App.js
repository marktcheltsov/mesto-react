import React from 'react'
import Header from './components/Header.js'
import MainPage from './components/Main.js'
import Footer from './components/Footer.js'
import PopupWithForm from './components/PopupWithForm.js'
import PopupImage from './components/ImagePopup.js'

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
  const [isEditCardPopupOpen, setIsEditCardPopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState(false)

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen)
    if (!isEditAvatarPopupOpen === true) {
      const popupAvatar = document.querySelector('.popup-avatar')
      popupAvatar.classList.add('popup_opened')
    } else {
      const opnenedPopup = document.querySelector('.popup_opened')
      opnenedPopup.classList.remove('popup_opened')
    }
  }

  function handleEditProfileClick() {
  setIsEditProfilePopupOpen(!isEditProfilePopupOpen)
  if (!isEditProfilePopupOpen === true) {
    const popupProfile = document.querySelector('.popup-profile')
      popupProfile.classList.add('popup_opened')
  } else {
    const opnenedPopup = document.querySelector('.popup_opened')
    opnenedPopup.classList.remove('popup_opened')
  }
  }

  function handleAddPlaceClick() {
  setIsEditCardPopupOpen(!isEditCardPopupOpen)
  if (!isEditCardPopupOpen === true) {
    const popupCard = document.querySelector('.popup-cards')
    popupCard.classList.add('popup_opened')
  } else {
    const opnenedPopup = document.querySelector('.popup_opened')
    opnenedPopup.classList.remove('popup_opened')
  }
  }

  function handleCardClick(name, link) {
    setSelectedCard(!selectedCard)
    if (!selectedCard === true) {
      const imagePopup = document.querySelector('.popup-image')
      const imagePopupTitle = imagePopup.querySelector('.popup-image__title')
      const imagePopupLink = imagePopup.querySelector('.popup-image__img')
      imagePopupTitle.textContent = name
      imagePopupLink.src = link
      imagePopup.classList.add('popup_opened')
    } else {
      const opnenedPopup = document.querySelector('.popup_opened')
      opnenedPopup.classList.remove('popup_opened')
    }
  }

  return (
    <div className="page">
      <Header/>
      <MainPage onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
      <Footer/>
      <PopupWithForm name="cards" title="Новое место" id="" isOpen={ handleAddPlaceClick }>
        <form className="popup__form popup__card-form" name="input__block" noValidate>
        <div className="popup__input-container">
          <input type="text" className="popup__input" id="popup-cards__input_type_name" placeholder="Название" value="" required minLength="2" maxLength="30" name="name"/>
          <p className="popup__input-error-text"></p>
        </div>
        <div className="popup__input-container">
          <input className="popup__input" id="popup-cards__input_type_link" placeholder="Ссылка на картинку" value="" type="url"  required name="link"/>
          <p className="popup__input-error-text"></p>
        </div>
    <button type="submit" className="popup__save-button popup-cards__save-button popup__save-button_disabled">Создать</button>
        </form>
      </PopupWithForm>
      <PopupWithForm name="profile" title="Редактировать профиль" id="" isOpen={ handleEditProfileClick }>

      </PopupWithForm>
      <PopupWithForm name="remove" title="Вы уверены?" id="">
        <button type="submit" className="popup__save-button pupup-remove__save-button">Да</button>
      </PopupWithForm>
      <PopupWithForm name="avatar" title="Обновить аватар" id="" isOpen={ handleEditAvatarClick }>
        <form className="popup__form popup-avatar__form" name="input__block" noValidate>
          <div className="popup__input-container">
            <input className="popup__input" placeholder="Ссылка на аватар" value="" type="url"  required name="link"/>
            <p className="popup__input-error-text"></p>
          </div>
          <button type="submit" className="popup__save-button popup-avatar__save-button popup__save-button_disabled">Сохранить</button>
        </form>
      </PopupWithForm>
      <PopupImage isClose={ handleCardClick }/>
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

