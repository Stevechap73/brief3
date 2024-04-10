//Add Announcement//

async function addAnnouncement() {
  let image = document.querySelector(".image").value;
  let title = document.querySelector(".title").value;
  let description = document.querySelector(".description").value;
  let price = document.querySelector(".price").value;

  let newAnnouncement = {
    image: image,
    title: title,
    description: description,
    price: price,
  };

  let request = {
    // mode: "no-cors",
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(newAnnouncement),
  };

  let apiRequest = fetch("http://localhost:3000/add", request);
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
}

function pageAddAnnouncement() {
  window.location.href = "./Add_Announcement.html";
}
