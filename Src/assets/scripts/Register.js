//Register//

async function handleRegister() {
  let firstName = document.querySelector(".firstName").value;
  let lastName = document.querySelector(".lastName").value;
  let email = document.querySelector(".email").value;
  let password = document.querySelector(".password").value;

  let newUser = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  };

  let request = {
    // mode: "no-cors",
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(newUser),
  };

  let apiRequest = fetch("http://localhost:3000/register", request);
  let reponse = await apiRequest;
  console.log(reponse.status);
  if (reponse.status === 200) {
    let toast = document.querySelector(".toast");
    toast.classList.remove("hidden");
    toast.innerText = "Inscription réussie";
    toast.style.backgroundColor = "green";
    toast.style.color = "white";

    setTimeout(() => {
      window.location.href = "./Login.html";
      toast.classList.add("hidden");
    }, 3000);
  } else {
    let toast = document.querySelector(".toast");
    toast.classList.remove("hidden");
    toast.innerText = "Tu t'es trompé d'email ou mot de passe";
    toast.style.backgroundColor = "green";
    toast.style.color = "white";
  }
}
