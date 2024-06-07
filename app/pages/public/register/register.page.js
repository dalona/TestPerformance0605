import { navigateTo } from "../../../Router"

export async function RegisterPage() {
    const root = document.getElementById('root')
    root.innerHTML = `
    
    <h1>Register Page</h1>
    <br><br>
    <form>

    <label for="Roles">What is your Role?:</label>

    <select name="Roles" id="roles">
    <option value="">--Please choose an option--</option>
    <option value="1">Admin</option>
    <option value="2">Guest</option>
    </select>

    <br><br>
    <label>Enter your name</label>
    <br>
    <input type="text" placeholder="Name">
    <br><br>
    <label>Enter your email</label>
    <br>
    <input type="email" placeholder="Email">
    <br><br>
    <label>Enter your Birth Date</label>
    <br>
    <input type="date">
    <br><br>
    <label>Create your password</label>
    <br>
    <input type="password" placeholder="Password">
    <br><br>
    <button type="submit">Register</button>
    </form>
    
    `
    //logic

    const $registerForm = document.getElementsByTagName('form')[0]
    const $userName = document.getElementsByTagName('input')[0]
    const $userEmail = document.getElementsByTagName('input')[1]
    const $birthday = document.getElementsByTagName('input')[2]
    const $userPassword = document.getElementsByTagName('input')[3]
    const $roles = document.getElementById('roles')

    $registerForm.addEventListener('submit', async (e) => {
        e.preventDefault()

        if (!$userName.value || !$userEmail.value || !$birthday.value || !$userPassword.value || !$roles) {
            alert('All fields are required')
        }

        //fetch
        
        const userCreated = await fetch('http://localhost:3000/User', {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": $userName.value,
                "email": $userEmail.value,
                "birthday": $birthday.value,
                "password": $userPassword.value,
                "role": $roles.value
            })

        })


        if (!userCreated.ok) {
            alert("Error creating user")
            return
        }

        alert("User Created successfully")
        navigateTo('/login')


    })


}

export function emailValidator() {
    $userEmail.addEventListener('input', () => {
        if (!$userEmail.value.includes('@' || ".")) {
            alert('The email must include an "@" or a "."')
        }
    })
}


//El fetch me duvuelve una promesa. Pero en vez de gestionarla con el .then uso un await 
// que me va a hacer el await para la ejecucion de esto  hasta que me resuelva la promesa la promesa