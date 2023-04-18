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

  // Humburger - menu
  humb.addEventListener("click", humbHandler); // Pop-up service
  blackout.addEventListener("click", hiddenPopup); // Hidden popup after click
  navbar.addEventListener("click", (event) => {
    if (event.target.classList.contains("nav__link")) {
      hiddenPopup();
    }
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

  //The menu is hidden if you click outside the given window
  document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("click", (e) => {
      const target = e.target;
      if (!target.closest(".nav__items") && !target.closest(".hamb__field")) {
        hiddenPopup();
      }
    });
  });

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

  let countCardArr = []; //[4, 5, 6, 7, 0, 1, 2, 3, 4]

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

  createCountCards(15);
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
      this.parent.after(element);
    }
  }

  function createCards(num) {
    for (let i = 0; i < num; i++) {
      let indexCard = countCardArr[i];
      new oneCard(
        pets[indexCard].img,
        pets[indexCard].name,
        ".arrow-left",
        indexCard
      ).render();
    }
  }

  createCards(15);

  //Slider
  let slideIndex = 1;
  let countSlides = 0;
  const slides = document.querySelectorAll(".one-pets-item"), //slides.length = 15
    prev = document.querySelector(".arrow-left"),
    next = document.querySelector(".arrow-right");

  function showSlides(n) {
    if (n > 15) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = 13;
    }

    slides.forEach((item) => (item.style.display = "none"));

    //1
    slides[slideIndex - 1].style.display = "flex";

    //2
    slides[slideIndex].style.display = "";
    slides[slideIndex].classList.add("mobile-hidden");

    //3
    slides[slideIndex + 1].style.display = "";
    slides[slideIndex + 1].classList.add("mobile-hidden");
    slides[slideIndex + 1].classList.add("tablet-hidden");
  }

  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  prev.addEventListener("click", function () {
    --countSlides;
    if (countSlides === -2 || countSlides === 2) {
      countSlides = 0;
      plusSlides(-3);
      plusSlides(-3);
    } else {
      plusSlides(-3);
    }
  });

  next.addEventListener("click", function () {
    ++countSlides;
    if (countSlides === -2 || countSlides === 2) {
      countSlides = 0;
      plusSlides(3);
      plusSlides(3);
    } else {
      plusSlides(3);
    }
  });

  // Modal
  const petsInfo = document.querySelectorAll(".one-pets-item");
  const modal = document.querySelector(".overlay");
  const modalCloseBtn = document.querySelector(".modal-button");
  const prevent = (ev) => ev.preventDefault(); //block scroll

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
