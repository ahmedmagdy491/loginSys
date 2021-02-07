$(document).on('click', '#logout', function () {
	localStorage.removeItem('token');
	localStorage.removeItem('is_admin');
	window.location.href = '../login/login.html';
});

let is_admin = localStorage.getItem('is_admin');
console.log(is_admin);

$(document).ready(function () {
	if (is_admin == 0) {
		$('#root_admin').remove();
	} else {
		console.log('admin');
	}
});

$(document).on('click', '#all_users', function () {
	const API_URL = 'http://localhost:8000/api/v1/auth/users';

	const res = document.getElementById('res');

	//get initial users

	getMovies(API_URL);

	async function getMovies(url) {
		const res = await fetch(url);
		const data = await res.json();
		showMovie(data.data);
	}

	function showMovie(users) {
		res.innerHTML = '';

		users.forEach((users) => {
			const { _id, name, email } = users;
			const user = document.createElement('dev');
			user.classList.add('user');

			user.innerHTML = `
      <div class="user" style="display:flex">
        <ul>
          <li>id:${_id} | name: ${name} | email : ${email}</li>
          
        </ul>
          
      </div>
    `;

			res.appendChild(user);
		});
	}
});
