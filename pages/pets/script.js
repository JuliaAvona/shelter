window.addEventListener("DOMContentLoaded", function () {
  const pets = [
    {
      name: "Jennifer",
      img: "../../assets/images/pets-jennifer.png",
      type: "Dog",
      breed: "Labrador",
      description:
        "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      age: "2 months",
      inoculations: "none",
      diseases: "none",
      parasites: "none",
    },
    {
      name: "Sophia",
      img: "../../assets/images/sophia.png",
      type: "Dog",
      breed: "Shih tzu",
      description:
        "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      age: "1 month",
      inoculations: "parvovirus",
      diseases: "none",
      parasites: "none",
    },
    {
      name: "Woody",
      img: "../../assets/images/pets-woody.png",
      type: "Dog",
      breed: "Golden Retriever",
      description:
        "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      age: "3 years 6 months",
      inoculations: ["adenovirus", " distemper"],
      diseases: "right back leg mobility reduced",
      parasites: "none",
    },
    {
      name: "Scarlett",
      img: "../../assets/images/pets-scarlet.png",
      type: "Dog",
      breed: "Jack Russell Terrier",
      description:
        "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      age: "3 months",
      inoculations: "parainfluenza",
      diseases: "none",
      parasites: "none",
    },
    {
      name: "Katrine",
      img: "../../assets/images/pets-katrine.png",
      type: "Cat",
      breed: "British Shorthair",
      description:
        "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      age: "6 months",
      inoculations: "panleukopenia",
      diseases: "none",
      parasites: "none",
    },
    {
      name: "Timmy",
      img: "../../assets/images/pets-timmy.png",
      type: "Cat",
      breed: "British Shorthair",
      description:
        "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      age: "2 years 3 months",
      inoculations: ["calicivirus", " viral rhinotracheitis"],
      diseases: "kidney stones",
      parasites: "none",
    },
    {
      name: "Freddie",
      img: "../../assets/images/pets-freddie.png",
      type: "Cat",
      breed: "British Shorthair",
      description:
        "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      age: "2 months",
      inoculations: "rabies",
      diseases: "none",
      parasites: "none",
    },
    {
      name: "Charly",
      img: "../../assets/images/pets-charly.png",
      type: "Dog",
      breed: "Jack Russell Terrier",
      description:
        "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      age: "8 years",
      inoculations: ["bordetella bronchiseptica", " leptospirosis"],
      diseases: ["deafness", " blindness"],
      parasites: ["lice", " fleas"],
    },
  ];

  // Humburger - menu - const
  const humb = document.querySelector(".hamb__field");
  const popup = document.querySelector(".popup");
  const navbar = document.querySelector(".nav__items").cloneNode(1); //navigation
  const blackout = document.querySelector(".blackout");
  const navLinks = document.querySelectorAll(".nav__links");
  const hambPanel = document.querySelector(".hamb");
  const body = document.body;

  //Cards - menu - const
  let countCardArr = []; //[4, 5, 6, 7, 0, 1, 2, 3, 4]
  let sortArr = []; //[ 4, 5, 6, 3, 0, 1, 2, 7, 0, 3, 2, 4, 5, 7, 6, 1, 5, 1, 4, 3, 6, 2, 0, 7, 2, 3, 4, 5, 6, 7, 0, 1, 0, 2, 6, 1, 7, 5, 3, 4, 3, 0, 6, 2, 5, 4, 1, 7, 2, 3, 1, 7, 0, 4, 5, 6]

  //Pagination - const
  const arrowLeft2 = document.querySelector(".arrow_left_2"); //<<
  const arrowLeft1 = document.querySelector(".arrow_left_1"); //<
  const showCountPage = document.querySelector(".arrow_center");
  const arrowRight1 = document.querySelector(".arrow_right_1"); //>
  const arrowRight2 = document.querySelector(".arrow_right_2"); //>>
  const allButtons = document.querySelectorAll(".button-pagination");
  let currentNumberOfPage = 1; //current
  let maxNumberOfPages = 6;

  // Modal
  const modal = document.querySelector(".overlay");
  const modalCloseBtn = document.querySelector(".modal-button");
  const prevent = (ev) => ev.preventDefault(); //block scroll

  // Humburger - menu
  humb.addEventListener("click", humbHandler); // Pop-up service
  blackout.addEventListener("click", hiddenPopup); // Hidden popup after click
  navbar.addEventListener("click", (event) => {
    if (event.target.classList.contains("nav__link")) {
      hiddenPopup();
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    //The menu is hidden if you click outside the given window
    window.addEventListener("click", (e) => {
      const target = e.target;
      if (!target.closest(".nav__items") && !target.closest(".hamb__field")) {
        hiddenPopup();
      }
    });
  });

  function humbHandler(event) {
    event.preventDefault();
    // change style for click
    popup.classList.toggle("open");
    humb.classList.toggle("active");
    body.classList.toggle("noscroll");
    blackout.classList.toggle("active");
    renderPopUp();
  }

  function renderPopUp() {
    popup.appendChild(navbar);
  }

  function hiddenPopup() {
    popup.classList.remove("open");
    humb.classList.remove("active");
    body.classList.remove("noscroll");
    blackout.classList.remove("active");
  }

  //hide menu on scroll down
  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    if (scrolled >= 50) {
      hambPanel.classList.add("hide");
    } else if (scrolled < 50) {
      hambPanel.classList.remove("hide");
    }
  });

  //Create Cards

  function getRandomNum(num) {
    let randomNum = Math.round(Math.random() * num);
    return randomNum;
  }

  function createCountCards(num) {
    let firstNum = getRandomNum(8); //get random number
    for (let i = 0; i < num; i++) {
      if (firstNum + i >= 8) {
        firstNum = 0;
        i = 0;
      }
      countCardArr.push(firstNum + i);

      if (countCardArr.length === num) {
        return 0;
      }
    }
  }

  createCountCards(48);

  function cardRandomizer(num, page) {
    //randomaizer Cards
    let newArrSort = [];
    for (let i = 0; i < page; i++) {
      newArrSort.push(
        countCardArr.slice(0, num).sort(() => Math.random() - 0.5)
      );
    }
    newArrSort.forEach((item) => item.forEach((i) => sortArr.push(i)));
  }

  cardRandomizer(8, maxNumberOfPages);

  class oneCard {
    constructor(img, name, parentSelector, petsIndex) {
      this.img = img;
      this.name = name;
      this.parent = document.querySelector(parentSelector);
      this.petsIndex = petsIndex;
    }

    render() {
      const element = document.createElement("div");
      element.innerHTML = `
        <img src=${this.img} alt=${this.name}-pets-picture>
        <h3 class="one-pets-name">${this.name}</h3>
        <a class="button-one-pets">Learn more</a>
  `;
      element.classList.add("one-pets-item");
      element.classList.add("pointer");
      element.dataset.index = this.petsIndex;
      this.parent.appendChild(element);
    }
  }

  function createCards(num) {
    for (let i = 0; i < num; i++) {
      let indexCard = sortArr[i];
      new oneCard(
        pets[indexCard].img,
        pets[indexCard].name,
        ".pets-gallery",
        indexCard
      ).render();
    }
  }

  createCards(48);

  // adaptive pagination
  const slides = document.querySelectorAll(".one-pets-item");
  document.addEventListener("DOMContentLoaded", changeMaxNumberOfPages());

  function slidesGetClass(currentNumberOfPage) {
    slides.forEach((item) => (item.style.display = "none"));

    // size > 767px -
    if (window.matchMedia("(min-width: 769px)").matches) {
      if (currentNumberOfPage > 6) {
        currentNumberOfPage = 6;
      }
      let pageIndex = (currentNumberOfPage - 1) * 8; //0, 1, 2, 3 ...
      let howMaxIndexCards = currentNumberOfPage * 8; //8, 16, 24, 32...
      for (let i = pageIndex; i < howMaxIndexCards; i++) {
        //first 8 - display = ""
        slides[i].style.display = "";
      }
      for (let i = pageIndex; i > howMaxIndexCards - 3; i--) {
        slides[i].classList.add("tablet-hidden"); //last 2 - "tablet-hidden"
      }
      for (let i = pageIndex; i > howMaxIndexCards - 6; i--) {
        slides[i].classList.add("mobile-hidden"); //last 5 - "mobile-hidden"
      }
    }

    //  768px > size > 320px
    if (
      window.matchMedia("(max-width: 768px)").matches &&
      window.matchMedia("(min-width: 601px)").matches
    ) {
      if (currentNumberOfPage > 8) {
        currentNumberOfPage = 8;
      }
      let pageIndex = (currentNumberOfPage - 1) * 6; //0, 1, 2, 3 ...
      let howMaxIndexCards = currentNumberOfPage * 6; //8, 16, 24, 32...
      for (let i = pageIndex; i < howMaxIndexCards; i++) {
        //first 6 - display = ""
        slides[i].style.display = "";
      }
      for (let i = pageIndex; i > howMaxIndexCards - 3; i--) {
        slides[i].classList.add("mobile-hidden"); //last 3 - "mobile-hidden"
      }
    }

    //  size <= 320px
    if (window.matchMedia("(max-width: 600px)").matches) {
      let pageIndex = (currentNumberOfPage - 1) * 3; //0, 1, 2, 3 ...
      let howMaxIndexCards = currentNumberOfPage * 3; //8, 16, 24, 32...
      for (let i = pageIndex; i < howMaxIndexCards; i++) {
        //first 3 - display = ""
        slides[i].style.display = "";
      }
    }
  }

  slidesGetClass(currentNumberOfPage);

  //Pagination
  window.addEventListener("resize", changeMaxNumberOfPages);

  function changeMaxNumberOfPages() {
    if (window.matchMedia("(min-width: 769px)").matches) {
      maxNumberOfPages = 6;
      if (currentNumberOfPage > 6) {
        currentNumberOfPage = 6;
      }
      changeCountPage(currentNumberOfPage);
      slidesGetClass(currentNumberOfPage);
    } else if (
      window.matchMedia("(max-width: 768px)").matches &&
      window.matchMedia("(min-width: 601px)").matches
    ) {
      maxNumberOfPages = 8;
      if (currentNumberOfPage > 8) {
        currentNumberOfPage = 8;
      }
      changeCountPage(currentNumberOfPage);
      slidesGetClass(currentNumberOfPage);
    } else if (window.matchMedia("(max-width: 600px)").matches) {
      maxNumberOfPages = 16;
      changeCountPage(currentNumberOfPage);
      slidesGetClass(currentNumberOfPage);
    }
  }

  //change NumberOfPage
  function changeCountPage(currentNumberOfPage) {
    showCountPage.textContent = currentNumberOfPage;
    if (currentNumberOfPage === 1) {
      allButtons.forEach((item) => item.classList.add("disabled"));
      allButtons.forEach((item) => (item.disabled = true));

      arrowRight1.classList.remove("disabled");
      arrowRight2.classList.remove("disabled");
      arrowRight1.disabled = false;
      arrowRight2.disabled = false;
    } else if (
      currentNumberOfPage > 1 &&
      currentNumberOfPage < maxNumberOfPages
    ) {
      allButtons.forEach((item) => item.classList.remove("disabled"));
      allButtons.forEach((item) => (item.disabled = false));
    } else if (currentNumberOfPage === maxNumberOfPages) {
      allButtons.forEach((item) => item.classList.remove("disabled"));
      allButtons.forEach((item) => (item.disabled = false));

      arrowRight1.classList.add("disabled");
      arrowRight2.classList.add("disabled");
      arrowRight1.disabled = true;
      arrowRight2.disabled = true;
    }
  }

  changeCountPage(currentNumberOfPage);

  arrowLeft2.addEventListener("click", () => {
    currentNumberOfPage = 1;
    changeCountPage(currentNumberOfPage);
    slidesGetClass(currentNumberOfPage);
  });

  arrowLeft1.addEventListener("click", () => {
    currentNumberOfPage--;
    changeCountPage(currentNumberOfPage);
    slidesGetClass(currentNumberOfPage);
  });

  arrowRight1.addEventListener("click", () => {
    currentNumberOfPage++;
    changeCountPage(currentNumberOfPage);
    slidesGetClass(currentNumberOfPage);
  });

  arrowRight2.addEventListener("click", () => {
    currentNumberOfPage = maxNumberOfPages;
    changeCountPage(currentNumberOfPage);
    slidesGetClass(currentNumberOfPage);
  });

  // Modal
  const petsInfo = document.querySelectorAll(".one-pets-item");
  petsInfo.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.classList.add("show");
      modal.classList.remove("hide");
      createOneModalCard(btn.dataset.index);
      document.addEventListener("wheel", prevent, { passive: false }); //block scroll
    });
  });

  modalCloseBtn.addEventListener("click", () => {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.removeEventListener("wheel", prevent); //un-block scroll
    document.querySelector(".modal-button").nextSibling.remove(); //delete Modal Window
  });

  //The Pop-Up is hidden if you click outside the given window
  document.querySelector(".overlay").addEventListener("click", (e) => {
    if (
      !e.target.classList.contains("modal") &&
      e.target.classList.contains("overlay")
    ) {
      modal.classList.add("hide");
      modal.classList.remove("show");
      document.querySelector(".modal-button").nextSibling.remove();
      document.removeEventListener("wheel", prevent); //un-block scroll
    }
  });

  class oneModalCard {
    constructor(
      img,
      name,
      type,
      breed,
      description,
      age,
      inoculations,
      diseases,
      parasites,
      parentSelector
    ) {
      this.img = img;
      this.name = name;
      this.type = type;
      this.breed = breed;
      this.description = description;
      this.age = age;
      this.inoculations = inoculations;
      this.diseases = diseases;
      this.parasites = parasites;
      this.parent = document.querySelector(parentSelector);
    }

    render() {
      const element = document.createElement("div");
      element.innerHTML = `
      <img class="modal__img" src=${this.img} alt=${this.name}-pets-picture>
      <div class="modal__info">
          <div class="name">${this.name}</div>
          <div class="type-breed">${this.type} - ${this.breed}</div>
          <div class="description">${this.description}</div>
          <ul class="characteristics">
              <li class="age">Age: ${this.age}</li>
              <li class="inoculations">Inoculations: ${this.inoculations}</li>
              <li class="diseases">Diseases: ${this.diseases}</li>
              <li class="parasites">Parasites: ${this.parasites}</li>
          </ul>
      </div>
  `;
      element.classList.add("modal__2-column");
      this.parent.after(element);
    }
  }

  function createOneModalCard(index) {
    new oneModalCard(
      pets[index].img,
      pets[index].name,
      pets[index].type,
      pets[index].breed,
      pets[index].description,
      pets[index].age,
      pets[index].inoculations,
      pets[index].diseases,
      pets[index].parasites,
      ".modal-button"
    ).render();
  }
});
