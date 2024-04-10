//Register//

async function handleLogin() {
  let email = document.querySelector(".email").value;
  let password = document.querySelector(".password").value;

  let newUser = {
    email: email,
    password: password,
  };

  let request = {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(newUser),
  };

  let apiRequest = fetch("http://localhost:3000/login", request);
  let reponse = await apiRequest;
  console.log(reponse.status);
  if (reponse.status === 200) {
    let toast = document.querySelector(".toast");
    toast.classList.remove("hidden");
    toast.innerText = "Connexion réussie";
    toast.style.backgroundColor = "green";
    toast.style.color = "white";

    setTimeout(() => {
      window.location.href = "./Panel_Admin.html";
      toast.classList.add("hidden");
    }, 3000);
  }
}
