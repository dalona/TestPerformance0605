export async function CreateFlights(){
    const root = document.getElementById('root');
    root.innerHTML = `
    <h1>Create Flights</h1>

    <br><br>
    <form>

    <label">Flight Number:</label>
    <br>
    <input type="text" maxlength="20" size= "5" widht= 2>
    <br><br>
    <label>Origin:</label>
    <br>
    <input type="text" maxlength="50">
    <br><br>
    <label>Destination:</label>
    <br>
    <input type="text" maxlength="50">
    <br><br>
    <label>Departure:</label>
    <br>
    <input type="date">
    <br><br>
    <label>Arrival:</label>
    <br>
    <input type="date">
    <br><br>
    <button type="submit">Submit</button>
    </form>
    



    `

    //logic

    const $createFlights = document.getElementsByTagName('form')[0]
    const $fligthNumber = document.getElementsByTagName('input')[0]
    const $origin = document.getElementsByTagName('input')[1]
    const $destination = document.getElementsByTagName('input')[2]
    const $departure = document.getElementsByTagName('input')[3]
    const $arrival = document.getElementsByTagName('input')[4]
    console.log($createFlights)
    $createFlights.addEventListener('submit', async (e) => {
        e.preventDefault()

        if (!$fligthNumber || !$origin || !$destination || !$departure || !$arrival) {
            alert('All fields are required')
        }

            //fetch

    const flightCreated = await fetch('http://localhost:3000/Flight',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "flightNumber": $fligthNumber.value,
            "origin": $origin.value,
            "destination": $destination.value,
            "departure": $departure.value,
            "arrival": $arrival.value
        })
    })
    
    if (!flightCreated.ok) {
        alert("Error creating user")
        return
    }

    alert("Flight Created successfully")
    })

}

// <form>
//   <div>
//     <label for="uname">Elige un nombre de usuario: </label>
//     <input
//       type="text"
//       id="uname"
//       name="name"
//       placeholder="Una sola palabra, en minúsculas"
//       size="30" />
//   </div>
//   <div>
//     <button>Enviar</button>
//   </div>
// </form>