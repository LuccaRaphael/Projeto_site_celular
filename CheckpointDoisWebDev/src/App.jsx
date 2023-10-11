import './App.css'
import { Outlet } from "react-router-dom"
import Header from "./Components/Header/header"
import Footer from './Components/Footer/footer'


function App() {

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
