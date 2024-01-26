import About from "./components/About"
import Honors from "./components/Honors"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Banner2 from "./components/Banner2"
import Footer from "./components/Footer"



function App() {
  

  return (
    <>
      <div>
        <Navbar/>
        <Home/>
        <About/>
        <Honors/>
        <Banner/>
        <Experience/>
        <Banner2/>
        <Contact/>
        {/* <Footer/> */}
      </div>
    </>
  )
}

export default App
