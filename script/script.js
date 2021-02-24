const buttonEdit = document.querySelector('.profile__btn-edit');
const popup = document.querySelector('.popup');

const closeIcon = document.querySelector('.popup__closeIcon');

const formElement = document.querySelector('.popup__container');
const nameInput = document.querySelector('.nameInput');
const jobInput = document.querySelector('.jobInput');

const profileName = document.querySelector('.profile__info-name');
const profileStatus = document.querySelector('.profile__info-data');

buttonEdit.addEventListener( 'click', function(){
  popup.classList.add('shown');
  nameInput.value = profileName.textContent;
  jobInput.value = profileStatus.textContent;
});

closeIcon.addEventListener('click', function(){
  popup.classList.remove('shown');
});

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileStatus.textContent = jobInput.value;
  popup.classList.remove('shown');
}

formElement.addEventListener('submit', formSubmitHandler);
