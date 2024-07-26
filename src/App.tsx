import { Routes, Route, Link } from "react-router-dom";

import { GithubUsers } from "./components/GithubUsers"
import { Navbar } from "./components/Navbar"
import { User } from "./components/User";

import './index.css'


function App() {


  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<GithubUsers/>}/>
        <Route path="/user/:id" element={<User/>}/>
      </Routes>
    </>
  )
}

export default App
