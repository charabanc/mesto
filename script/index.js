// Общие функции для попапов
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
};

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
};

// Закрываем все попапы
const closeIcons = document.querySelectorAll('.popup__close-icon');

closeIcons.forEach((currentCloseIcon) => {
  currentCloseIcon.addEventListener('click', (event) => {
    const popup = event.target.parentNode.parentNode;
    closePopup(popup);
  });
});

// Изменить информацию профиля
const buttonEdit = document.querySelector('.profile__btn-edit');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const profilePopup = document.querySelector('.profile-popup');
const profilePopupForm = profilePopup.querySelector('.profile-popup .popup__form');
const profileName = document.querySelector('.profile__info-name');
const profileStatus = document.querySelector('.profile__info-data');

buttonEdit.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileStatus.textContent;

  openPopup(profilePopup);
});

profilePopupForm.addEventListener('submit', (event) => {
  event.preventDefault();

  profileName.textContent = nameInput.value;
  profileStatus.textContent = jobInput.value;

  closePopup(profilePopup);
});

// Добавление новой карточки
const buttonAdd = document.querySelector('.profile__btn-add');
const cardPopup = document.querySelector('.card-popup');
const cardPopupForm = document.querySelector('.card-popup form');
const cardPopupInputName = cardPopupForm.querySelector('.popup__input_type_name');
const cardPopupInputLink = cardPopupForm.querySelector('.popup__input_type_job');

buttonAdd.addEventListener('click', () => {
  openPopup(cardPopup);
});

cardPopupForm.addEventListener('submit', (event) => {
  event.preventDefault();

  addCard({
    name: cardPopupInputName.value,
    link: cardPopupInputLink.value
  }, true);

  closePopup(cardPopup);
});

// render cards
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const placePopup = document.querySelector('.place-popup');
const placePopupImg = placePopup.querySelector('.popup__image');
const placePopupTitle = placePopup.querySelector('.popup__paragraph');
const cards = document.querySelector('#cards');

function createCard(item) {
  const cardTemplate = document.querySelector('#card-template').content;
  const card = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImg = card.querySelector('.card__image');
  const cardTitle = card.querySelector('.card__paragraph');
  
  cardImg.src = item.link;
  cardTitle.textContent = item.name;

  card.querySelector('.card__btn-delete').addEventListener('click', () => {
    card.classList.add('card__delete');
  });

  card.querySelectorAll('.card__like').forEach(cardLike => 
    cardLike.addEventListener('click', () => cardLike.classList.toggle('card__like_active'))
  );

  cardImg.addEventListener('click', (event) => {
    openPopup(placePopup);

    placePopupImg.src = item.link;
    placePopupTitle.innerText = item.name;
  });
  
  return card;
};

function addCard(item, isFirst = false) {
  const card = createCard(item);

  if (isFirst) {
    cards.prepend(card);
  } else {
    cards.append(card);
  }
}

function myRender(){
  initialCards.forEach(function(item){
    addCard(item);
  }); 
}

myRender();

// Ставить Лайк
// const cards = document.getElementById('cards');
// const initialCards = [
//   {
//     name: 'Карачаевск',
//     link: './images/karachaevsk.jpg'
//   },
//   {
//     name: 'Гора Эльбрус',
//     link: './images/mountainElbrus.jpg'
//   },
//   {
//     name: 'Домбай',
//     link: './images/dombay.jpg'
//   },
//   {
//     name: 'Гора Эльбрус',
//     link: './images/mountainElbrus.jpg'
//   },
//   {
//     name: 'Домбай',
//     link: './images/dombay.jpg'
//   },
//   {
//     name: 'Карачаево-Черкесия',
//     link: './images/karachaevsk.jpg'
//   }
// ]; 

// function myRender() {
//   cards.innerHTML = null;
//   initialCards.forEach((currCard) => {
//     const cardDiv = document.createElement("div");
//     cardDiv.classList.add('card');
//     const img = document.createElement("img");
//     cardDiv.innerHTML = `
//       <img src="${currCard.link}" alt="Картинка" class="card__image"></img>
//       <div class="card__item">
//         <h2 class="card__paragraph">${currCard.name}</h2>
//         <button class="card__like" type="button"></button>
//       </div>
//       <button class="card__btn-delete"></button>
//     `;
  
//     cards.append(cardDiv);

//     cardDiv.querySelector('.card__btn-delete').addEventListener('click', () => {
//       cardDiv.classList.add('card__delete');
//     });
//   });

//   document.querySelectorAll('.card__like').forEach(cardLike => 
//     cardLike.addEventListener('click', () => cardLike.classList.toggle('card__like_active'))
//   );
// }

// myRender();





