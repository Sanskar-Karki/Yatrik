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

const MountAnnapurna = () => {
  const images = [
    {
      original: "../../../../../public/images/Ebc pics/ebc1.jpg",
      thumbnail: "../../../../../public/images/Ebc pics/ebc1.jpg",
    },
    {
      original: "../../../../../public/images/Ebc pics/ebc2.jpg",
      thumbnail: "../../../../../public/images/Ebc pics/ebc2.jpg",
    },
    {
      original: "../../../../../public/images/Ebc pics/ebc3.jpg",
      thumbnail: "../../../../../public/images/Ebc pics/ebc3.jpg",
    },
    {
      original: "../../../../../public/images/Ebc pics/ebc4.jpg",
      thumbnail: "../../../../../public/images/Ebc pics/ebc4.jpg",
    },
    {
      original: "../../../../../public/images/Ebc pics/ebc5.jpg",
      thumbnail: "../../../../../public/images/Ebc pics/ebc5.jpg",
    },
    {
      original: "../../../../../public/images/Ebc pics/ebc6.jpg",
      thumbnail: "../../../../../public/images/Ebc pics/ebc6.jpg",
    }

  ];
  return (
    <div >
      <Nav />
      <div>
        <h1 className={styles["gallery--tittle"]}>Explore Everest Base Camp!!!</h1>
        <div>
          <ImageGallery additionalClass={styles["gallery--img"]} items={images} slideOnThumbnailOver="true" />
        </div>
      </div>
      <div className={style["info--container"]}>
        <h4>
          Check out the Exact location at{" "}
          <Link to="https://www.google.com/maps/place/Everest+Base+Camp/@28.0022779,86.8502906,17z/data=!3m1!4b1!4m6!3m5!1s0x39e9a9327a984be7:0x1f5047197a212375!8m2!3d28.0022779!4d86.8528655!16zL20vMGd6bGMy?entry=ttu">
            <FaMapPin />
          </Link>
        </h4>
        <div className={style['mus--info']}>
          <h3 className={styles.key}>Key trek information </h3>
          <FaMountain /> 8888 meters <br />
          <FaHome /> 4 camps<br />
          <FaCalendar /> 22 days<br />
        </div>
        <div className={style['mus--des']}>
          <p >
            <h4>Description</h4>
            The Everest Base Camp trek combines the convenience of well-maintained paths with the raw beauty of the Himalayas. The Everest region, located in the lap of the mighty Himalayas, is recognized for its beautiful scenery and welcoming Sherpa people. This trek introduces you to the world’s highest peak as well as the culture and traditions of Nepal.

            The 14 day Everest Base Camp trek will take you to a height of roughly 5,364 meters. It provides panoramic views of many 8,000-meter-high summits. You can witness the incredible view of Pumori, Lhotse, Nuptse, Lobuche, and other peaks, as well as the iconic Mt Everest itself.

            The EBC trek journey begins with a breathtaking 35-minute flight from Kathmandu to Lukla in the month of (January, February, June, July, August, September, and December) or a 20 minutes flight from Manthali/Ramechhap to Lukla including a 5 to 6 hours drive from Kathmandu to Manthali in the month of March, April, May, October, and November.

            The Mount Everest Base Camp trek begins and ends in Lukla. The journey starts along the Dudh Koshi River’s bank, passing through the Sagarmatha National Park on the way to Namche Bazaar. Namche is the main trading point in the Everest region, popularly known as an acclimatization destination.

            The walk is challenging, but the beautiful scenery of verdant forests, farmland, hills, and mountains will inspire you to keep going. We will depart Namche Bazaar after a day of acclimatization and continue our trek to Tengboche.

            Upon arriving, we visit the renowned Tengboche Monastery. We will continue our walk to Dingboche and eventually to Lobuche from here. During the hike, you will be able to see Lhotse, Nuptse, Makalu, Cho Oyu, Ama Dablam, and many more peaks.

            Continuing the journey, we hike to Gorak Shep and walk alongside the Khumbu Glacier until we reach mount Everest base camp. The Khumbu Glacier, the world’s deepest glacier, can also be seen from the Everest base camp. We then return to Gorak Shep to spend the night.

            The following day, we hike up Kala Patthar, where we can see the sunrise over Mt. Everest and other peaks. After observing the scenery for a while, we return to Gorak Shep before descending to Pheriche Village.

            We retrace our steps to Tengboche, passing through the lush forests of rhododendron and juniper, and continue to Namche. Once in Lukla, a flight back to Kathmandu concludes the EBC trek in Nepal.
            <br /><br />
            <h2 style={{ color: "black" }}>Route</h2><br />
            Day 01 :
            Arrival at Tribhuvan International Airport in Kathmandu (1,400 m) and transfer to hotel. Overnight at a hotel.<br />

            Day 02 :
            Flight to Lukla (2,840 m) from Kathmandu – 35 minutes or drive to Manthali/Ramechhap (474 m) – 5 to 6 hours and a 20 minutes flight to Lukla, and then trek to Phakding (2,610 m) – 3 to 4 hours. Overnight at a guesthouse.<br />

            Day 03 :
            Trek to Namche Bazaar (3,440 m) from Phakding – 5 to 6 hours. Overnight at a guesthouse.<br />

            Day 04 :
            Acclimatization Day at Namche (3,440 m). Hike to Hotel Everest View (3,880 m) and back – 4 to 5 hours. Overnight at a guesthouse.<br />

            Day 05 :
            Trek to Tengboche (3,860 m) from Namche Bazaar – 5 to 6 hours. Overnight at a guesthouse.<br />

            Day 06 :
            Trek to Dingboche (4,410 m) from Tengboche – 5 to 6 hours. Overnight at a guesthouse.<br />

            Day 07 :
            Acclimatization Day. Hike to Nangkartsang Peak (5,083 m) and back – 4 to 5 hours. Overnight at a guesthouse.<br />

            Day 08 :
            Trek to Lobuche (4,910 m) from Dingboche – 5 to 6 hours. Overnight at a guesthouse.<br />

            Day 09 :
            Trek to Everest Base Camp (5,364 m) and then back to Gorak Shep (5,164 m) – 8 to 9 hours. Overnight at a guesthouse.<br />

            Day 10 :
            Early morning Hike to Kala Patthar (5,555 m) and then, descend to Pheriche (4,240 m) – 7 to 8 hours. Overnight at a guesthouse.<br />

            Day 11 :
            Trek to Namche Bazaar (3,440 m) from Pheriche – 7 to 8 hours. Overnight at a guesthouse.<br />

            Day 12 :
            Trek to Lukla (2,840 m) from Namche Bazaar – 7 to 8 hours. Overnight at a guesthouse.<br />

            Day 13 :
            Flight Back to Kathmandu – 35 minutes or Manthali/Ramechhap – 20 minutes from Lukla and same day drive to Kathmandu – 5 to 6 hours. Overnight at a hotel.<br />

            Day 14 :
            Transfer to the International Airport for your Final Departure.<br />
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

export default MountAnnapurna;
