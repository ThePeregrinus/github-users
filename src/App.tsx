import { Routes, Route } from "react-router-dom";

import { GithubUsers } from "./components/GithubUsers"
import { Navbar } from "./components/Navbar"
import { User } from "./components/User";

import './index.css'
import { Scroll } from "./components/Scroll";


function App() {


  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<GithubUsers/>}/>
        <Route path="/user/:id" element={<User/>}/>
      </Routes>
      <Scroll/>
    </>
  )
}

export default App
