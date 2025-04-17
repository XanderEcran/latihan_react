import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Matkul from './components/Matkul';
const nama = "Desyana";
const role = "superAdmin";

function App() {

  return (
   <div>
    <h1>Selamat datang {nama}!</h1>
    <p>Peran: {role} </p>

    <ul>
      <Matkul kode="BD1007" nama="Pemrograman Web Dasar" />
      <Matkul kode="BD1019" nama="Pemrograman Web Lanjutan" />
    </ul>
   </div>
  );
}

export default App
