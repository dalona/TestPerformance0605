import { navigateTo } from "../../../Router";


export function LoginPage(){
    const root= document.getElementById("root");
    root.innerHTML=`
    <h1>Login Page</h1>

    <form>
    <br><br>
    <label>Enter your email</label>
    <br>
    <input type="email" placeholder="Email">
    <br><br>
    <label>Enter your password</label>
    <br>
    <input type="password" placeholder="Password">
    <br><br>
    <button>Login</button>
    </form>
`

const $LoginForm = document.getElementsByTagName('form')[0]
    $LoginForm.addEventListener('submit', async (e) => {
        e.preventDefault()


        const $userEmail = document.getElementsByTagName('input')[0]
        const $userPassword = document.querySelector('[type = "password"]')

        if (!$userEmail.value || !$userPassword.value) {
            alert("All fields are required")
        }

        const token = ($userEmail, $userPassword);

    if (token) {
      localStorage.setItem('token', token);
      navigateTo('/dashboard/admin');
    } else {
      alert('Invalid credentials');
    }
  
        
        //fetch

        const userLogged = await fetch('http://localhost:3000/User', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                
                email: $userEmail.value,
                password: $userPassword.value
            })
        })

        if(!userLogged.ok){
            alert("Error al crear un usuario")
            return
        }

        alert("User Logged in successfully")
        



    })


}