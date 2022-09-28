/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";
const button = document.querySelector("#btn");

button.addEventListener("click", showUsers);

function showUsers() {
  document.querySelector("#message").remove();
  const createUserCard = (userData) => {
    userData.forEach((user) => {
      const userCard = document.createElement("div");
      const avatar = document.createElement("img");
      const login = document.createElement("h3");

      userCard.setAttribute("id", "user-card");
      avatar.setAttribute("id", "avatar");
      login.setAttribute("id", "login");
      console.log(userCard);
      login.innerText = user.login;
      avatar.src = user.avatar_url;

      userCard.append(avatar, login);
      document.querySelector("#output").append(userCard);
    });
  };
  const getUsers = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);

      createUserCard(data);
    } catch (error) {
      console.log(error);
    }
  };

  getUsers(ENDPOINT);
}
