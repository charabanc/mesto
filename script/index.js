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
// render cards
const cards = document.getElementById('cards');

const openingCard = document.querySelector('.opening-card');

const initialCards = [
  {
    name: 'Карачаевск',
    link: './images/karachaevsk.jpg'
  },
  {
    name: 'Гора Эльбрус',
    link: './images/mountainElbrus.jpg'
  },
  {
    name: 'Домбай',
    link: './images/dombay.jpg'
  },
  {
    name: 'Гора Эльбрус',
    link: './images/mountainElbrus.jpg'
  },
  {
    name: 'Домбай',
    link: './images/dombay.jpg'
  },
  {
    name: 'Карачаево-Черкесия',
    link: './images/karachaevsk.jpg'
  }
]; 

function myRender() {
  cards.innerHTML = null;
  initialCards.forEach((currCard) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add('card');
    const img = document.createElement("img");
    cardDiv.innerHTML = `
      <img src="${currCard.link}" alt="Картинка" class="card__image"></img>
      <div class="card__item">
        <h2 class="card__paragraph">${currCard.name}</h2>
        <button class="card__like" type="button"></button>
      </div>
      <button class="card__btn-delete"></button>
    `;
  
    cards.append(cardDiv);

    cardDiv.querySelector('.card__btn-delete').addEventListener('click', () => {
      cardDiv.classList.add('card__delete');
    });
  });

  document.querySelectorAll('.card__like').forEach(cardLike => 
    cardLike.addEventListener('click', () => cardLike.classList.toggle('card__like_active'))
  );

  document.querySelectorAll('.card__image').forEach((cardImg) => 
    cardImg.addEventListener('click', function (event) {
      const src = event.target.src;
      const title = event.target.parentElement.querySelector('.card__paragraph').innerText;

      openingCard.classList.add('opening-card_opened');

      document.querySelector('.opening-card__image').src = src;
      document.querySelector('.opening-card__title').innerText = title;
    })
  );

  document.querySelectorAll('.opening-card__close').forEach((openingClose) => 
    openingClose.addEventListener('click', () => {
      openingCard.classList.remove('opening-card_opened');
    })
  );
}

myRender();

const buttonAdd = document.querySelector('.profile__btn-add');
const newPlace = document.querySelector('.new-place');
const closeNewPlace = document.querySelector('.new-place__close');

function newPlaceAdd (){
  newPlace.classList.add('new-place__opened');
};
function newPlaceRemove (){
  newPlace.classList.remove('new-place__opened');
};
buttonAdd.addEventListener( 'click', newPlaceAdd);
closeNewPlace.addEventListener('click', newPlaceRemove);

const newPlaceNameInput = document.querySelector('.new-place__input.name');
const newPlaceLinkInput = document.querySelector('.new-place__input.link');

newPlace.addEventListener('submit', (event) => {
  event.preventDefault();

  initialCards.unshift({
    name: newPlaceNameInput.value,
    link: newPlaceLinkInput.value
  });

  myRender();
  newPlaceRemove();
});



