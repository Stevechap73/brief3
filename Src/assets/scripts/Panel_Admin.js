let cards = document.querySelector(".cards");

async function getAllAnnouncements() {
  let apiCall = await fetch("http://localhost:3000/all");

  let response = await apiCall.json();

  response.forEach((element) => {
    cards.innerHTML += `<div class='border border-2 border-black rounded-xl bg-blue-600 text-black p-4 w-5/12 mx-4 my-4 '> 
    <img src="${element.image}" style="width: 500px;">
     <p> ${element.title}</p> 
      <p> ${element.description}</p>
      <p> ${element.price}</p>
      <button
              class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-red shadow-sm hover:bg-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onclick="deleteAnnouncement('${element._id}')"
            >
              Delete
            </button>
      <button
              class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-green shadow-sm hover:bg-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onclick="pageUpdate()"
            >
              Update
            </button>     
      </div>`;
  });
}

const deleteAnnouncement = async (idelement) => {
  let request = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({ id: idelement }),
  };

  let apiRequest = fetch("http://localhost:3000/delete", request);
  let reponse = await apiRequest;
  console.log(reponse.status);
  if (reponse.status === 200) {
    let toast = document.querySelector(".toast");
    toast.classList.remove("hidden");
    toast.innerText = "Ajout réussie";
    toast.style.backgroundColor = "green";
    toast.style.color = "white";

    setTimeout(() => {
      window.location.href = "./Panel_Admin.html";
      toast.classList.add("hidden");
    }, 3000);
  }
};

getAllAnnouncements();

// const updateAnnouncement = async (idElement) => {
//   // let image = document.querySelector(".image").value;
//   // let title = document.querySelector(".title").value;
//   // let description = document.querySelector(".description").value;
//   // let price = document.querySelector(".price").value;

//   // let newAnnouncement = {
//   //   image: image,
//   //   title: title,
//   //   description: description,
//   //   price: price,
//   // };

//   let request = {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json; charset=utf-8",
//     },
//     body: JSON.stringify({ id: idelement }),
//   };

//   let apiRequest = fetch("http://localhost:3000/update", request);
//   let reponse = await apiRequest;
//   console.log(reponse.status);
//   if (reponse.status === 200) {
//     let toast = document.querySelector(".toast");
//     toast.classList.remove("hidden");
//     toast.innerText = "Ajout réussie";
//     toast.style.backgroundColor = "green";
//     toast.style.color = "white";

//     setTimeout(() => {
//       window.location.href = "./Panel_Admin.html";
//       toast.classList.add("hidden");
//     }, 3000);
//   }
// };

// updateAnnouncement();

function pageUpdate() {
  window.location.href = "Update_Announcement.html";
}

const updateAnnouncement = async (idElement) => {
  let image = document.querySelector(".image").value;
  let title = document.querySelector(".title").value;
  let description = document.querySelector(".description").value;
  let price = document.querySelector(".price").value;

  let newUpdateAnnouncement = {
    id: idElement,
    image: image,
    title: title,
    description: description,
    price: price,
  };
  let request = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({ newUpdateAnnouncement }),
  };

  let apiRequest = await fetch(
    "http://localhost:3000/updateAnnouncement/:id",
    request
  );
  let response = await apiRequest;
  console.log(response.status);

  if (response.status === 200) {
    let toast = document.querySelector(".toast");
    toast.classList.remove("hidden");
    toast.innerText = "Mise à jour réussie";
    toast.style.backgroundColor = "green";
    toast.style.color = "white";

    setTimeout(() => {
      window.location.href = "./Panel_Admin.html";
      toast.classList.add("hidden");
    }, 3000);
  } else {
    console.error("Erreur lors de la mise à jour :", response.status);
  }
};

// // Appelez la fonction avec l'ID de l'élément à mettre à jour
// updateAnnouncement(idelement);
