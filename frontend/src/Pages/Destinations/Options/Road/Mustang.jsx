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


const Mustang = () => {
  const images = [
    {
      original: "../../../../../public/images/Mustang pics/mus7.jpg",
      thumbnail: "../../../../../public/images/Mustang pics/mus7.jpg",
    },
    {
      original: "../../../../../public/images/Mustang pics/mus6.jpg",
      thumbnail: "../../../../../public/images/Mustang pics/mus6.jpg",
    },
    {
      original: "../../../../../public/images/Mustang pics/mus5.jpg",
      thumbnail: "../../../../../public/images/Mustang pics/mus5.jpg",
    },
    {
      original: "../../../../../public/images/Mustang pics/mus4.jpg",
      thumbnail: "../../../../../public/images/Mustang pics/mus4.jpg",
    },
    {
      original: "../../../../../public/images/Mustang pics/mus3.jpg",
      thumbnail: "../../../../../public/images/Mustang pics/mus3.jpg",
    },
    {
      original: "../../../../../public/images/Mustang pics/mus2.jpg",
      thumbnail: "../../../../../public/images/Mustang pics/mus2.jpg",
    },
    {
      original: "../../../../../public/images/Mustang pics/mus1.jpg",
      thumbnail: "../../../../../public/images/Mustang pics/mus1.jpg",
    }

  ];
  return (
    <div >
      <Nav />
      <div>
        <h1 className={styles["gallery--tittle"]}>Explore Heavenly Mustang!!!</h1>
        <div>
          <ImageGallery additionalClass={styles["gallery--img"]} items={images} slideOnThumbnailOver="true" />
        </div>
      </div>
      <div className={style["info--container"]}>
        <h4>
          Check out the Exact location
          <Link to="https://www.google.com/maps/place/Mustang/@28.94636,83.2041651,9z/data=!3m1!4b1!4m6!3m5!1s0x39be6c7eb19f2ab7:0x2c40a8c5a03d3c04!8m2!3d28.9985065!4d83.8473015!16zL20vMDhjbHNi?entry=ttu">
            <FaMapPin />
          </Link>
        </h4>
        <div className={style['mus--info']}>
          <h3 >Key travel information </h3>
          <FaMountain /> 3840 meters <br />
          <FaHome /> lodges and guesthouse<br />
          <FaCalendar /> 5 days<br />
        </div>
        <div className={style['mus--des']}>
          <p >
            <h4>Description</h4>
            Mustang is known for its trekking tours and mountain sightseeing. Elevated at an altitude of 3840 kilometres, this city is divided into two parts: Lower and Upper Mustang. Even though it is relatively unexplored, this city is a great destination for those who want to immerse in Tibetan culture as well as in Nepalese lifestyle as it is located near the Tibetan Plateau.

            Lower Mustang is well-known for natural scenery while upper Mustang is famous for its trekking and hiking trails, monasteries, caves and local tribes. This destination is rich in vegetation with a range of rhododendron plantations, apple fields and is strong with Buddhist culture. Visitors get to see the lifestyle of the mountain people, their day-to-day routines and their customs. Visitors can take a look at a number of Tibetan shrines, monasteries, caves and villages in order to learn about the “Mini Tibet in Nepal”. All in all, this North-West part of Nepal has a rugged and mystical reputation and is a great destination for backpackers, trekkers or those who want a vacation away from the commercial life and want to spend some time in the Himalayas.
            <br /><br />
            For booking, we need the photocopy of your passport and you have to pay us a minimum of 10% payment of the total cost as advance.
            Beverages, snacks, charging electronic devices, hot showers, Wi-Fi are not included in our packages, so you have to pay additional cash.
            It is preferable to pack your bag lightly because porters will only carry your 15-20kg luggage
            You should have comprehensive travel insurance that covers trekking activities including medical expenses and emergency evacuation.
            Carry a reusable water bottle and use water purification tablets like iodine, aquatabs tablets.
            Pack your clothes according to the seasonal basis.
            Short Upper Mustang Trek is a moderate to challenging trek which requires a certain level of physical fitness so, it is recommended to prepare with cardiovascular exercises, strength training, and hiking.
            You should carry enough cash in Nepalese rupees as ATMs may not be available in remote areas.
            We suggest you not to book your international flights early as there may be sudden change in weather which will make your flights delay or even cancel.
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

export default Mustang;
