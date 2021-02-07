let errorEmail = $("#errorEmail")
let errorPassword = $("#errorPassword")
let provideError = $("#provideError")
let errorName = $("#errorName")
function createUser() {
    axios
        .post('http://localhost:8000/api/v1/auth/users',{
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
        })
        .then(respone=> showOutputs(respone))
        .catch(err=>console.log(err))

        let error = localStorage.getItem('error')

        if (response.error) {
            window.localStorage.setItem('error', respone.error.error)

                // Login & SignUp
				if(respone.error.error = "Use a Unique email"){
					errorEmail.textContent = "Use a Unique email"
				}
				// Login & SignUp
				if(respone.error.error = "Please add a password"){
					errorPassword.textContent = "Please add a password"
				}

				// SignUp
				if(respone.error.error = "Duplicate field value entered"){
					provideError.textContent = "Duplicate field value entered"
				}

				if(respone.error.error = "please provide email and password"){
					provideError.textContent = "please provide email and password"
				}
                
                if(respone.error.error = "Please add a name"){
					errorName.textContent = "Please add a name"
				}

        }
}


function showOutputs(respone) {
    document.getElementById('res').textContent= `
        <div> you have created new user: ${respone.data} </div>
    `

}

document.getElementById('createBtn').addEventListener('click', createUser)



