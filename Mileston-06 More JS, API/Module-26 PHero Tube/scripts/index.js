function removeActiveClass() {
  const activeBtn = document.getElementsByClassName("active");
  // console.log(activeBtn);

  for (let btn of activeBtn) {
    btn.classList.remove("active");
  }
}

function loadCategories() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories));
}

function displayCategories(categories) {
  //   console.log(categories);
  const categoryContainer = document.getElementById("category-container");

  for (const cat of categories) {
    // console.log(cat);
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
        <button id="btn-${cat.category_id}" onclick="loadCategorywiseVideo(${cat.category_id})" class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
        `;
    categoryContainer.append(categoryDiv);
  }
}

const loadCategorywiseVideo = (id) => {
  // console.log(id);
  removeActiveClass();
  const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
  // console.log(url);

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const clickedButton = document.getElementById(`btn-${id}`);
      // console.log(clickedButton);
      clickedButton.classList.add("active");
      displayViedos(data.category);
    });
  // .then((data) => displayViedos(data.category));
};

function loadVedios(searchText="") {
  fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchText}`)
    .then((res) => res.json())
    .then((data) => {
      removeActiveClass();
      document.getElementById("btn-all").classList.add("active");
      displayViedos(data.videos);
    });
}

const displayViedos = (videos) => {
  // console.log(videos);
  const vedioContainer = document.getElementById("vedio-container");

  vedioContainer.innerHTML = " ";

  if (videos.length == 0) {
    vedioContainer.innerHTML = `
    <div
        class="py-20 col-span-full flex flex-col justify-center items-center text-center"
      >
        <img class="w-[120px]" src="./img/Icon.png" alt="" />
        <h2 class="text-2xl font-bold">
          Oops!! Sorry, There is no content here
        </h2>
      </div>
    `;
    // hideLoader();
    return;
  }

  videos.forEach((video) => {
    // console.log(video);
    const vedioCard = document.createElement("div");
    vedioCard.innerHTML = `
    <div class="card bg-base-100">
        <figure class="relative">
            <img class="w-full h-[150px] object-cover"
                src="${video.thumbnail}"
                alt="Shoes" />
            <span class="absolute bottom-2 right-2 bg-black text-white px-2 text-sm rounded">
                3hrs 56 min ago
            </span>
        </figure>
        <div class="flex gap-3 px-0 py-5">
            <div class="profile">
                <div class="avatar">
                    <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
                        <img src="${video.authors[0].profile_picture}" />
                    </div>
                </div>
            </div>
            <div class="intro">
                <h2 class="text-sm font-semibold">${video.title}</h2>
                <p class="text-sm text-gray-500 flex gap-1">
                    ${video.authors[0].profile_name}
                    ${
                      video.authors[0].verified
                        ? `<img class="w-5 h-5" src="https://img.icons8.com/?size=64&id=6xO3fnY41hu2&format=png" alt="Verified">`
                        : ""
                    }
                </p>
                <p class="text-sm text-gray-500">${video.others.views} Views</p>
            </div>
        </div>

        <button onclick="loadVideoDetails('${
          video.video_id
        }')" class="btn btn-block border border-gray-500">Details</button>

    </div>
`;

    //apend
    vedioContainer.append(vedioCard);
  });
};

const loadVideoDetails = (videoId) => {
  console.log(videoId);
  const url = `https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayVideoDetails(data.video));
};

const displayVideoDetails = (video) => {
  console.log(video);
  document.getElementById("video_details").showModal();
  const detailsContainer = document.getElementById("details-container");

  detailsContainer.innerHTML = `
     <div class="card bg-base-100 image-full shadow-sm">
    <figure>
      <img
        src="${video.thumbnail}"
        alt="Shoes" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">${video.title}</h2>
      <p>${video.description}</p>
      <div class="card-actions justify-end">
      </div>
    </div>
  </div>
    `;
};




document.getElementById("search-input").addEventListener("keyup", (e) => {
    const input = e.target.value;
    // console.log(input);
    loadVedios(input);
  });

loadVedios();
loadCategories();
