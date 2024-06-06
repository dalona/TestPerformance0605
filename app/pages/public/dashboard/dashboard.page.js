import styles from "./dashboard.css"

// /dashboard/flights/create

export function Dashboard(){
    const root = document.getElementById("root");
    root.innerHTML = `
    <h1>Dashboard</h1>

    <section>
    
    <div class=${styles['hey']}>Current Flights</div>
    <div class=${styles['hoy']}>
    
    <div class=${styles['hey']}>Flight Number</div>
    <div class=${styles['hey']}>Origin</div>
    <div class=${styles['hey']}>Destination</div>
    <div class=${styles['hey']}>Departure</div>

    </div>


    </section>


    `
}


// const roleid = localStorage.getItem("roleid");
// const pageContent;


// if (roleid === "1"){
//     pageContent=`


//     `
// }

// else if(roleid === "2"){

//     pageContent=`

//     `

// }

