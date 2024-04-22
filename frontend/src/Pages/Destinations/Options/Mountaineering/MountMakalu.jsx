import ImageGallery from "react-image-gallery"
import Footer from "../../../Home/Footer/Footer"
import styles from "../../../Gallery/Gallery.module.css"
import Nav from '../../../Home/Navbar/Navbar'
import {

  FaHome,
  FaMapPin,
  FaMountain,
  FaCalendar,
} from "react-icons/fa";


import { Link } from "react-router-dom";
import style from "./Mustang.module.css"

const MountMakalu = () => {
  const images = [
    {
      original: "../../../../../public/images/Makalu pics/makal1.jpg",
      thumbnail: "../../../../../public/images/Makalu pics/makal1.jpg",
    },
    {
      original: "../../../../../public/images/Makalu pics/makal3.jpg",
      thumbnail: "../../../../../public/images/Makalu pics/makal3.jpg",
    },
    {
      original: "../../../../../public/images/Makalu pics/makal2.jpg",
      thumbnail: "../../../../../public/images/Makalu pics/makal2.jpg",
    },
    {
      original: "../../../../../public/images/Makalu pics/makal4.jpg",
      thumbnail: "../../../../../public/images/Makalu pics/makal4.jpg",
    }

  ];
  return (
    <div >
      <Nav />
      <div>
        <h1 className={styles["gallery--tittle"]}>Explore Mount Makalu!!!</h1>
        <div>
          <ImageGallery additionalClass={styles["gallery--img"]} items={images} slideOnThumbnailOver="true" />
        </div>
      </div>
      <div className={style["info--container"]}>
        <h4>
          Check out the Exact location at{" "}
          <Link to="https://www.google.com/maps/place/Makalu/@27.8857442,87.0670495,14z/data=!3m1!4b1!4m6!3m5!1s0x39e8587e7dd7411f:0xdb104716a1e9066c!8m2!3d27.8857462!4d87.0876492!16zL20vMDFyM2p4?entry=ttu">
            <FaMapPin />
          </Link>
        </h4>
        <div className={style['mus--info']}>
          <h3 >Key travel information </h3>
          <FaMountain /> 8643 meters <br />
          <FaHome /> Camp 1 - 4<br />
          <FaCalendar /> 20 days<br />
        </div>
        <div className={style['mus--des']}>
          <p >
            <h4>Description</h4>
            Mount Makalu, is the world’s fifth-highest mountain, reaching a lofty height of 8,463m. Located in the Mahalangur Himalayas on the border between Nepal and the Tibet Autonomous Region (China), it is situated twelve miles from Mount Everest. Makalu means ‘Great Black One’, due to its dark rock formation although it is mostly covered in snow and ice.
            <br /><br />
            Season to climb Manaslu: May <br /> <br />
            Difficulty: Makalu is known as one of the more taxing 8000m peaks among the fourteen.
            While not extremely technical, the mountain is relentlessly steep. The advanced base camp
            is one of the highest in the world at 5,700m. This makes it tough to recover between rotations.
            As my second 8000er, I can only compare Makalu to Manaslu and it was much, much tougher. It’s
            important to note that I summitted with Sherpa assistance and with the use of oxygen.
            If you remove either or both of those factors, this climb will become significantly harder.
            Our summit push was base camp to base camp in 51 hours and we had favorable weather and conditions.<br /><br />
            Recommended prior climbs: While there are many climbs you can do to warm up for Makalu, some common options are Island Peak (6,189), Baruntse Peak (7,129m), Spantik Peak (7,030) and Himlung Himal (7,126m). In addition to these acclimatization peaks, I would recommend climbing at least one or two ‘easier’ 8000m peaks before attempting Makalu.
          </p>
        </div>
      </div>
      <div className={style['guide--suggestion']}>
        <h1>Do you need a guide??</h1>
        <Link to="/Guides">
          <button className={style['guide--btn']}>
            Explore Guides
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default MountMakalu;

