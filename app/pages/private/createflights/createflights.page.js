export function CreateFlights(){
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