function removeActiveClass() {
  const activeBtn = document.getElementsByClassName("active");
  // console.log(activeBtn);
  for (let btn of activeBtn) {
    btn.classList.remove("active");
  }
}

function loadLevel() {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((data) => displayLevel(data.data));
  // by default text
  const defaultCard = document.getElementById("default-card");
  const newDiv = document.createElement("div");
  newDiv.innerHTML = `
        <div class="text-center my-16 space-y-3">
            <p class="text-[#79716B] text-sm">আপনি এখনো কোন Lesson Select করেন নি</p>
            <h2 class="text-2xl font-medium">একটি Lesson Select করুন।</h2>
        </div>
    `;
  defaultCard.appendChild(newDiv);
}

const displayLevel = (levels) => {
  const levelBtn = document.getElementById("level-btn");
  levels.forEach((element) => {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
            <a id="btn-${element.level_no}" onclick="loadLevelwiseWords(${element.level_no})"
              class="btn btn-sm border border-[#422AD5] text-[#422AD5] font-bold"
            >
                <i class="fa-solid fa-book-open"></i>
             
              Lesson - ${element.level_no}
            </a>
        `;
    levelBtn.appendChild(newDiv);
  });
  // console.log(levelBtn);
};

const loadLevelwiseWords = (level_no) => {
  // console.log(level_no);
  removeActiveClass();

    const spinner = document.getElementById("spinner");
    spinner.style.display = "block";


  const url = `https://openapi.programming-hero.com/api/level/${level_no}`;
  // console.log(url);

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const clickedButton = document.getElementById(`btn-${level_no}`);
      clickedButton.classList.add("active");
      // console.log(clickedButton);
      // console.log(data.data);
      // console.log(data.data.length);

      spinner.style.display = "none"; 


      if (data.data.length > 0) {
        displayWords(data.data);
      } else {
        displayNoWords();
      }
    });
};

// no-word-card

const displayNoWords = () => {
  const noWordCard = document.getElementById("no-word-card");
  const newDiv = document.createElement("div");

  const defaultCard = document.getElementById("default-card");
  noWordCard.innerHTML = " ";
  defaultCard.innerHTML = " ";
  const cards = document.querySelector(".cards");
  cards.innerHTML = " ";
  newDiv.innerHTML = `
        <div class="flex flex-col items-center justify-center text-center w-full h-60 space-y-1">
          <img class="w-12" src="./img/alert-error.png" alt="">
          <p class="text-[#79716B] text-sm">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
          <h3 class="text-sm font-semibold">নেক্সট Lesson এ যান</h3>
        </div>
    `;
  noWordCard.appendChild(newDiv);
};

const displayWords = (data) => {
  // console.log(data); //ok
  const cards = document.querySelector(".cards");
  cards.innerHTML = " ";
  const defaultCard = document.getElementById("default-card");
  defaultCard.innerHTML = " ";
  const noWordCard = document.getElementById("no-word-card");
  noWordCard.innerHTML = " ";
  // console.log(cards); // ok

  data.forEach((element) => {
    // console.log(element); // is ok
    const newDiv = document.createElement("div");

    newDiv.innerHTML = `
        <div class="text-center space-y-3 mt-6 border border-gray-200 bg-gray-100 p-4 rounded">
            <p class="font-bold">${element.word}</p>
            <h1 class="text-sm inline-block">Meaning / Pronunciation</h1>
            <h2 class="font-bold text-[#18181B80]">"${element.meaning == null?"অর্থ পাওয়া যায়নি":element.meaning} / ${element.pronunciation}"</h2>
            <div class="flex justify-around mt-6 text-[#18181B80]">
                <i onclick="loadWordDetails('${element.id}')" class="fa-solid fa-circle-exclamation cursor-pointer"></i>
                <i class="fa-solid fa-volume-low"></i>
            </div>
          </div>
        `;
    cards.appendChild(newDiv);
  });
};

const loadWordDetails = (wordId) => {
  console.log(wordId);
  const url = `https://openapi.programming-hero.com/api/word/${wordId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayWordDetails(data.data));
};

const displayWordDetails = (word) => {
  console.log(word);
  document.getElementById("word_details").showModal();
  const detailsContainer = document.getElementById("details-container");

  detailsContainer.innerHTML = `
        <div class="space-y-2">
            <h3 class="text-lg font-bold">${
              word.word
            } (<i class="fa-solid fa-microphone-lines"></i>: ${
    word.pronunciation
  })</h3>
            <p class="text-sm font-bold">Meaning</p>
            <p class="text-xs">${word.meaning == null?"অর্থ পাওয়া যায়নি":word.meaning}</p>
        </div>
        <div class="space-y-1 my-6">
            <p class="text-sm font-bold">Example</p>
            <p class="text-xs">${word.sentence}</p>
        </div>
        <div class="space-y-1 my-8">
            <p class="text-sm font-semibold">সমার্থক শব্দ গুলো</p>
            ${word.synonyms
              .map(
                (syn) =>
                  `<a class="btn btn-sm border mx-1 border-gray-200 bg-[#D7E4EF] text-xs">${syn}</a>`
              )
              .join("")}
        </div>
        <div class="modal-action flex justify-start items-start  mt-6">
            <form method="dialog">
            <button class="btn bg-[#422AD5] text-white">Complete Learning</button>
            </form>
        </div>
    `;
};


const nav = document.querySelector("nav");
const banner = document.getElementById("banner");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

nav.classList.add("hide");
main.classList.add("hide");
footer.classList.add("hide");

function getValue() {
    const pass = document.getElementById("pass");
    const name = document.getElementById("name");

    let name1 = name.value;
    let value = pass.value;

    if (name1 == "") {
        alert("Please Enter any name");
    }
    else if (value == 123456) {
        nav.classList.remove("hide");
        main.classList.remove("hide");
        footer.classList.remove("hide");
        banner.classList.add("hide");
        alert("Logged in Successfully!")
    }
    else{
        alert("Wrong Password");
    }

}

const element = document.getElementById("logout");
element.addEventListener("click", function() {
    nav.classList.add("hide");
    main.classList.add("hide");
    banner.classList.remove("hide");
});

loadLevel();
