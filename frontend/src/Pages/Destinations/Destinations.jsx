import Footer from "../Home/Footer/Footer"
import Nav from '../Home/Navbar/Navbar'
import styles from "./Destinations.module.css"

function Destinations() {
  return (
    <>
      <Nav />
      <div className={styles['destination--options']}>

        <a href="/treaking">
          <h1>Trekking Routes</h1><br />
          <p>Find beautiful trekking routes trending hot at the moment and trek through the highs and lows of the himalayas and store an ever lasting story associating you with nature.</p>
        </a>

        <a href="/mountaineering">
          <h1>Mountaineering</h1><br />
          <p>Conquer the extraordinary heights of Nepal's majestic peaks, where every ascent is a triumph of spirit and nature. In the land of the Himalayas, our mountaineering destinations beckon with a call to the adventurous soul. .</p>
        </a>

        <a href="/road">
          <h1>By Road Travel</h1><br />
          <p>Embark on the mesmerizing roads of Nepal, where each twist and turn unveils a breathtaking panorama. Let the journey be your destination, as Nepal's scenic highways promise not just roads, but a pathway to unforgettable adventures.</p>
        </a>

      </div>
      <Footer />
    </>
  )
}

export default Destinations