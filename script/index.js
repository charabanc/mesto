const buttonEdit = document.querySelector('.profile__btn-edit');
const popup = document.querySelector('.popup');

const closeIcon = document.querySelector('.popup__close-icon');

const formElement = document.querySelector('.popup__container');
const nameInput = document.querySelector('.popup__input-name');
const jobInput = document.querySelector('.popup__input-job');

const profileName = document.querySelector('.profile__info-name');
const profileStatus = document.querySelector('.profile__info-data');

function popupOpenedAdd (){
  popup.classList.add('popup__opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileStatus.textContent;
};

buttonEdit.addEventListener( 'click', popupOpenedAdd);

function popupOpenedRemove (){
  popup.classList.remove('popup__opened');
};

closeIcon.addEventListener('click', popupOpenedRemove);

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileStatus.textContent = jobInput.value;
  popup.classList.remove('popup__opened');
};

formElement.addEventListener('submit', formSubmitHandler);
