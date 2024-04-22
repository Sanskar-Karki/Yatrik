import Contactus from "./Pages/Home/Contactus/Contactus"
import Aboutus from "./Pages/Home/Aboutus/Aboutus"
import Destination from "./Pages/Home/Destination/Destination"
import Hero from "./Pages/Home/Hero/Hero"
import Mission from "./Pages/Home/Mission/Mission"
import Navbar from "./Pages/Home/Navbar/Navbar"
import Footer from "./Pages/Home/Footer/Footer"
function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Aboutus/>
      <Mission/>
      <Destination/>
      <Contactus/>
      <Footer/>
    </>
  )
}

export default App
