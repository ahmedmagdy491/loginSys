$(document).on('click', '#deleteUser', function (e) {
	let errorId = $('#errorId')
	e.preventDefault();
	const id = document.getElementById('userId').value;

	let token = localStorage.getItem('token');

	console.log(id);

	let url = `http://localhost:8000/api/v1/auth/users/${id}`;
	console.log(url);

	// Delete users

	axios({
		method: 'delete',
		url,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	let error = localStorage.getItem('error')
	// Delete
	if (response.error) {
		if(respone.error.error.startsWith("there is no id of", null)){
			errorPass.textContent = "this id is not found"
		}
	}

	function showOutputs(res) {
		document.getElementById('res').innerHTML = `
			  <div> the user was deleted </div>
		  `;

		document.getElementById('form').style.display = 'none';
	}

});
