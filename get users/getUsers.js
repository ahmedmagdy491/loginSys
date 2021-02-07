const API_URL =
"http://localhost:8000/api/v1/auth/users";


const res = document.getElementById("res");


//get initial users

getMovies(API_URL);

async function getMovies(url) {
const res = await fetch(url);
const data = await res.json();
showMovie(data.data);
}

function showMovie(users) {
res.innerHTML = "";

users.forEach((users) => {
  const { _id, name, email } = users;
  const user = document.createElement("dev");
  user.classList.add("user");

  user.innerHTML = `
      
      

      <div class="user" style="display:flex">
        <ul>
          <li>id:${_id} | name: ${name} | email : ${email}</li>
          
        </ul>
          
      </div>
      
      
 `

  res.appendChild(user)
});
}

