$(document).on('click', '#login-btn', function (e) {
	e.preventDefault();
	let email = $('#email').val();
	let password = $('#password').val();
	let errorEmail = $('#errorEmail').val();
	let errorPassword = $('#errorPassword').val();
	let provideError = $('#provideError').val();
	axios({
		method: 'post',
		url: 'http://localhost:8000/api/v1/auth/login',
		data: {
			email: email,
			password: password,
		}
	})
		.then((response) => {
			console.log(response)
			if (!response.ok) {
				throw Error("Error")
			}
			
				if (response.data.is_admin === true) {
					window.localStorage.setItem('token', response.data.token);
					window.localStorage.setItem('is_admin', 1);
					window.location.href = '../welcome/welcome.html';
				} else {
					window.localStorage.setItem('is_admin', 0);
					window.location.href = '../welcome/welcome.html';
				}
			
		})
		.catch(
			error => 
			{
				console.log(error)
			}
			);
});



/* if (response.error) {

				// Login & signup
				if(response.error = "please add an email"){
					errorEmail.textContent = "please add an email"
				}

				// Login & SignUp
				if(response.error.error = "Use a Unique email"){
					errorEmail.textContent = "Use a Unique email"
				}
				// Login & SignUp
				if(response.error.error = "Please add a password"){
					errorPassword.textContent = "Please add a password"
				}

				// SignUp
				if(response.error.error = "Duplicate field value entered"){
					provideError.textContent = "Duplicate field value entered"
				}

				if(response.error.error = "please provide email and password"){
					provideError.textContent = "please provide email and password"
				}

				if(response.error = "Invalid credentials"){
					provideError.textContent = "Invalid credentials"
				}

				if(response.error.error = "Password is incorrect"){
					errorPassword.textContent = "Password is incorrect"
				}

				// Delete
				if(response.error.error = "there is no id of"){
					errorPassword.textContent = "there is no id of"
				}

				

				
			} */