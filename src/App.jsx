import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ListMatkul from './components/ListMatkul';
const nama = "Desyana";
const role = "superAdmin";

function App() {

  return (
   <div>
    <h1>Selamat datang {nama}!</h1>
    <p>Peran: {role} </p>

    <ListMatkul />
   </div>
  );
}

export default App
