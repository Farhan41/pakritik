import BannerWorld from "./Components/BannerWorld"
import Footer from "./Components/Footer"
import Contact from "./Components/Contact"
import Service from "./Components/Service"
import TopNavbar from "./Components/TopNavbar"
import Whatsapp from "./Components/Whatsapp"

import Modal from "./Components/Modal"



function App() {

  return (
    <div className="dark:bg-gray-700 dark:text-gray-400">

      <Modal/>

      <TopNavbar/>
      <BannerWorld/>
      <Service/>
      <Contact/>
      <Footer/>
      <Whatsapp/>
    </div>
  )
}

export default App
