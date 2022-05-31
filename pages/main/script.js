const PETS = JSON.parse(` [
  {
    "name": "Jennifer",
    "img": "../../assets/images/pets-jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "../../assets/images/pets-sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "../../assets/images/pets-woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "../../assets/images/pets-scarlet.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Katrine",
    "img": "../../assets/images/pets-katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "../../assets/images/pets-timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "../../assets/images/pets-freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "../../assets/images/pets-charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
]`)

 
 
 
 
 
 /*Burger*/


 const burgerItem = document.querySelector('.burger');
 const menu = document.querySelector('.header-nav');
 const section = document.querySelector('.shadow_wrap');
 const shelterLogo = document.querySelector('.header-logo');
 const burgerLogo = document.querySelector('.header-logo_burger');
 
  
 
 function toggleMenu() {
   burgerItem.classList.toggle('hamburger__menu_open');
   }
   burgerItem.addEventListener('click', toggleMenu);
 
 
 (function () {
 
 burgerItem.addEventListener('click', () => {
   document.body.classList.toggle('_lock');
   menu.classList.toggle('header-nav_open');
   section.classList.toggle('shadow_wrap_open');
   shelterLogo.classList.toggle('header-logo_open');
   burgerLogo.classList.toggle('header-logo_burger_open');
 });
 }());
 
 menu.addEventListener("click", (event) => {
   if(event.target){
     menu.classList.remove("header-nav_open");
     burgerItem.classList.remove("hamburger__menu_open");
     document.body.classList.remove('_lock');
     section.classList.remove('section_open');
     shelterLogo.classList.remove('header-logo_open');
   burgerLogo.classList.remove('header-logo_burger_open');
  }
 });


  /*slider*/


const BODY = document.querySelector('body')
const PETS_CARDS = document.querySelector('.slider_block')


const MODAL = document.querySelector('.popup')
const MODAL_WRAPPER = document.querySelector('.popup_body')
const MODAL_BUTTON = document.querySelector('.popup_close')



const BTN_LEFT = document.querySelector('.left_arrow_button');
const BTN_RIGHT = document.querySelector('.right_arrow_button');
const CAROUSEL = document.querySelector('.content_slider');
const PETS_SLIDER = document.querySelector('.slider_friends')
const LEFT_PETS_CARDS = document.querySelector('.slider_block_left');
const RIGHT_PETS_CARDS = document.querySelector('.slider_block_right');
const CURRENT_PETS_CARDS = document.querySelector('.slider_block_active')


function closeModal() {
	MODAL.classList.remove('popup_open')
	BODY.classList.remove('body-stop-scroll')
}

function generateNewModal(card) {
	return (`<img class="popup_picture" src="../../assets/images/pets-${card.name.toLowerCase()}.png" alt="pet">
	<div class="popup_text">
		<h3 class="popup_title">${card.name}</h3>
		<h4 class="popup_breed">${card.type} - ${card.breed}</h4>
		<h5 class="popup_description">${card.description}</h5>
		<ul class="popup_list">
			<li class="modal__list-point">
			<span class="description">Age:</span> 
			${card.age}
			</li>
			<li class="modal__list-point">
			<span class="description">Inoculations:</span>
				${card.inoculations}
			</li>
			<li class="modal__list-point">
			<span class="description">Diseases:</span>
				${card.diseases}
			</li>
			<li class="modal__list-point">
			<span class="description">Parasites:</span>
				${card.parasites}
			</li>
		</ul>
	</div>`)
}

function generateCard(cardNum) {

	let card = PETS[cardNum]

	return `<div class="slider_element">
				<img src="../../assets/images/pets-${card.name.toLowerCase()}.png" alt="pet woody">
				<div class="slider_info">
					<h4 class="slider_name">${card.name}</h4>
					<button class="slider_button shelter_button">Learn more</button>
				</div>
			</div>`
}


let currentIndexCards = []

function generateInitialCards(addClass, amount, generateNoRepeatCards) {

	let randomNumsForCards = []

	while (randomNumsForCards.length < amount) {
		let currentNum = Math.floor(Math.random() * PETS.length)
		if (!randomNumsForCards.includes(currentNum) && !currentIndexCards.includes(currentNum)) {
			randomNumsForCards.push(currentNum)
		}
	}

	if (generateNoRepeatCards) {
		currentIndexCards = [...randomNumsForCards]
	}

	let cards = document.createElement('div')
	cards.classList.add('slider_block', addClass)
	for (let i = 0; i < amount; i++) {
		cards.innerHTML += generateCard(randomNumsForCards[i])
	}
	return cards.outerHTML
}

function generateInitialContainersCards(amountCards) {
	CAROUSEL.insertAdjacentHTML('afterbegin', generateInitialCards('slider_block_active', amountCards, true))
	CAROUSEL.insertAdjacentHTML('afterbegin', generateInitialCards('slider_block_left', amountCards))
	CAROUSEL.insertAdjacentHTML('beforeend', generateInitialCards('slider_block_right', amountCards))
}

if (window.innerWidth >= 1280) {
	generateInitialContainersCards(3)
} else if (window.innerWidth >= 768 && window.innerWidth <= 1279) {
	generateInitialContainersCards(2)
} else {
	generateInitialContainersCards(1)
}

function moveLeft() {
	CAROUSEL.classList.add("transition-left");
	BTN_LEFT.removeEventListener("click", moveLeft);
	BTN_RIGHT.removeEventListener("click", moveRight);
};

function moveRight() {
	CAROUSEL.classList.add("transition-right");
	BTN_LEFT.removeEventListener("click", moveLeft);
	BTN_RIGHT.removeEventListener("click", moveRight);
};

BTN_LEFT.addEventListener('click', moveLeft)

BTN_RIGHT.addEventListener('click', moveRight)

PETS_SLIDER.addEventListener('animationend', (animationEvent) => {

	if (animationEvent.animationName === "move-right") {

		CAROUSEL.classList.remove("transition-right");

		document.querySelector('.slider_block_active').innerHTML =
			document.querySelector('.slider_block_right').innerHTML;

		if (window.innerWidth >= 1280) {
			document.querySelector('.slider_block_right')
				.outerHTML = generateInitialCards('slider_block_right', 3, true)
		} else if (window.innerWidth >= 768 && window.innerWidth <= 1279) {
			document.querySelector('.slider_block_right')
				.outerHTML = generateInitialCards('slider_block_right', 2, true)
		} else {
			document.querySelector('.slider_block_right')
				.outerHTML = generateInitialCards('slider_block_right', 1, true)
		}

	} else {

		CAROUSEL.classList.remove("transition-left");

		document.querySelector('.slider_block_active').innerHTML =
			document.querySelector('.slider_block_left').innerHTML;

		if (window.innerWidth >= 1280) {
			document.querySelector('.slider_block_left')
				.outerHTML = generateInitialCards('slider_block_left', 3, true)
		} else if (window.innerWidth >= 768 && window.innerWidth <= 1279) {
			document.querySelector('.slider_block_left')
				.outerHTML = generateInitialCards('slider_block_left', 2, true)
		} else {
			document.querySelector('.slider_block_left')
				.outerHTML = generateInitialCards('slider_block_left', 1, true)
		}
	}

	BTN_LEFT.addEventListener("click", moveLeft);
	BTN_RIGHT.addEventListener("click", moveRight);
})


CAROUSEL.addEventListener('click', (event) => {

	let card = event.target.closest('.slider_element')

	if (card) {
		MODAL_WRAPPER.querySelector('.popup_content').outerHTML = ''
		MODAL.classList.add('popup_open')
		BODY.classList.toggle('body-stop-scroll')

		let cardNamePet = card.querySelector('.slider_name').textContent

		let newCards = document.createElement('div')
		newCards.classList.add('popup_content')

		PETS.filter((currentCard) => {
			if (currentCard.name === cardNamePet) {
				newCards.innerHTML = generateNewModal(currentCard)
				MODAL_WRAPPER.append(newCards)
			}
		})
	}
})

MODAL_BUTTON.addEventListener('click', () => {
	closeModal()
})

// const createCardTemplate = () => {
// const card = document.createElement("div");
// card.classList.add("card");
// }


// const moveLeft = () => {
//   CAROUSEL.classList.add("transition-left");
//   BTN_LEFT.removeEventListener("click", moveLeft);
//   BTN_LEFT.removeEventListener("click", moveRight);
// }





// const moveRight = () => {
//   CAROUSEL.classList.add("transition-right");
//   BTN_RIGHT.removeEventListener("click", moveRight);
//   BTN_LEFT.removeEventListener("click", moveLeft);
// }

// BTN_LEFT.addEventListener("click", moveLeft);
// BTN_RIGHT.addEventListener("click", moveRight);

// CAROUSEL.addEventListener("animationend",(animationEvent) => {
//   let changedItem;
//  if (animationEvent.animationName === "move-left") {
//   CAROUSEL.classList.remove("transition-left");
//   document.querySelector(".slider_block_active").innerHTML = ITEM_LEFT.innerHTML;
// } else {
//   CAROUSEL.classList.remove("transition-right");
//   changedItem = ITEM_RIGHT;
//   document.querySelector(".slider_block_active").innerHTML = ITEM_RIGHT.innerHTML;
//  }


//  changedItem.innerHTML = "";
//  for (let i = 0; i < 3; i++) {
//    const card = createCardTemplate();
//    card.innerText = Math.floor(Math.random() * 8);
//    changedItem.appendChild(card);
//  }
 
//  BTN_LEFT.addEventListener("click", moveLeft);
//  BTN_RIGHT.addEventListener("click", moveRight);
// })





























// // Popup



// const popupLinks = document.querySelectorAll('.popup-link');
// const body = document.querySelector('body');
// const lockPadding = document.querySelectorAll(".lock-padding");

// let unlock = true;
// const timeout = 800;


// if (popupLinks.length > 0) {
//   for (let index = 0; index < popupLinks.length; index++) {
//     const popupLink = popupLinks[index];
//     popupLink.addEventListener('click', function (e) {
//       const popupName = popupLink.getAttribute('href').replace('#', '');
//       const currentPopup = document.getElementById(popupName);
//       popupOpen(currentPopup);
//       e.preventDefault();
//     });
//   }
// }

// const popupCloseIcon = document.querySelectorAll('.close-popup');
// if (popupCloseIcon.length > 0) {
//   for (let index = 0; index < popupCloseIcon.length; index++) {
//     const el = popupCloseIcon[index];
//     el.addEventListener('click', function (e) {
//       popupCloseIcon(el.closest('.popup'));
//       e.preventDefault();
//     });
//   }
// }
// function popupOpen(currentPopup) {
//   if(currentPopup && unlock) {
//     const popupActive = document.querySelector('.popup.open');
//     if (popupActive) {
//       popupCloseIcon(popupActive, false);
//     } else {
//       bodyLock();
//     }
//     currentPopup.classList.add('open');
//     currentPopup.addEventListener("click", function(e) {
//       if (!e.target.closest('.popup_content')) {
//         popupCloseIcon(e.target.closest('.popup'));
//       }
//     });
//     }
//   }

// function popupClose(popupActive, doUnlock = true) {
//   if (unlock) {
//     popupActive.classList.remove('open');
//     if (doUnlock) {
//       bodyUnLock();
//     }
//   }
// }



// function bodyLock() {
//   const lockPaddingValue = window.innerWidth - document.querySelector('.container').offsetWidth + 'px';
//   if (lockPadding.length > 0) {
//   for (let index = 0; index < lockPadding.length; index++) {
//     const el = lockPadding[index];
//     el.style.paddingRight = lockPaddingValue;
//   }}
// body.style.paddingRight = lockPaddingValue;
// body.classList.add('lock');

// unlock = false;
// setTimeout(function (){
//   unlock = true;
// }, timeout);
// }

// function bodyUnLock() {
//   setTimeout(function () {
//     if (lockPadding.length > 0) {
//     for (let index = 0; index < lockPadding.length; index++) {
//       const el = lockPadding[index];
//       el.style.paddingRight = '0px';
//     }
//   }
//     body.style.paddingRight = '0px';
//     body.classList.remove('lock');
//   }, timeout);
  
//   unlock = false;
//   setTimeout(function () {
//     unlock = true;
//   }, timeout);
// }


// document.addEventListener('keydown', function (e) {
//   if (e.which === 27) {
//     const popupActive = document.querySelector('.popup.open');
//     popupClose(popupActive);
//   }
// });