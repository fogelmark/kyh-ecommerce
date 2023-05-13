import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/style.scss'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)


// För betyget godkänt (G) ska följande finnas med i eran lösning:
// Ni ska bygga upp alla sidor som finns med i designfilen.  --
// Ni ska lista upp produkter på startsidan med React, genom att hämta dessa via ett Web API från valfri backend lösning (inte JSON-server) --
// som ni bygger upp själva. --
// Eran backend lösning ska innehålla full CRUD funktionalitet (GET, POST, PUT/PATCH, DELETE) --
// Alla metoder förutom GET ska vara låsta så man måste vara inloggad för att ändra på eller ta bort produkterna. 
// Ni ska kunna lista upp en produkt på en separat sida där produkten ska visa information som namn, beskrivning, pris och bilder mm.
// (titta på designen på vad ni kan tänkas behöva ha på era produkter)
// Ni ska använda er av Redux eller Context för att lagra information i applikationen under användning.
// Ni ska använda er av react-router-dom för att kunna navigera mellan olika sidor. ++
// Ni ska ha en kundvagn där man ska kunna lägga till produkter i. 
// Man ska kunna ändra antalet produkter i kundvagnen.
// Ni ska kunna lista upp hur många produkter som finns i kundvagnen.


// För betyget väl godkänt (VG):
// Ni ska bygga upp eventuella andra sidor som behövs men inte finns med i designfilen, dessa ska följa samma stil och tema.
// Ni ska kunna logga in och registrera en användare. 
// Om användaren är inloggad ska "Login" länken i topp menyn bytas ut mot en länk som går till en "user-profile" sida.
// Ni ska kunna spara ner kundvagnen som en order i databasen, men bara om användaren är inloggad.
// Man ska som användare kunna se sina aktuella ordrar och historiska ordrar på en separat sida om man är inloggad.
// Man ska kunna logga ut en användare
// Individuell rapport
