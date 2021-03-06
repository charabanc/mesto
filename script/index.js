const buttonEdit = document.querySelector('.profile__btn-edit');
const popup = document.querySelector('.popup');

const closeIcon = document.querySelector('.popup__close-icon');

const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');

const profileName = document.querySelector('.profile__info-name');
const profileStatus = document.querySelector('.profile__info-data');
const formElement = document.querySelector('.popup__container');

function popupOpenedAdd (){
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileStatus.textContent;
};

function popupOpenedRemove (){
  popup.classList.remove('popup_opened');
};

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileStatus.textContent = jobInput.value;
  popup.classList.remove('popup_opened');
};

buttonEdit.addEventListener( 'click', popupOpenedAdd);
closeIcon.addEventListener('click', popupOpenedRemove);
formElement.addEventListener('submit', formSubmitHandler);
