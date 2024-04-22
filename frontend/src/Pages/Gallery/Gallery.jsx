import Footer from "../Home/Footer/Footer"
import Nav from '../Home/Navbar/Navbar'
import styles from "./Gallery.module.css"
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery"

function Gallery() {
  const images = [
    {
      original: "../../../public/images/Home Images/abc.jpg",
      thumbnail: "../../../public/images/Home Images/abc.jpg",
    },
    {
      original: "../../../public/images/Gallery Images/annapurna.jpg",
      thumbnail: "../../../public/images/Gallery Images/annapurna.jpg",
    }
    ,
    {
      original: "../../../public/images/Gallery Images/namche.jpg",
      thumbnail: "../../../public/images/Gallery Images/namche.jpg",
    }
    ,
    {
      original: "../../../public/images/Gallery Images/pasupatinath.jpg",
      thumbnail: "../../../public/images/Gallery Images/pasupatinath.jpg",
    }
    ,
    {
      original: "../../../public/images/Gallery Images/lumbini.jpg",
      thumbnail: "../../../public/images/Gallery Images/lumbini.jpg",
    }
    ,
    {
      original: "../../../public/images/Gallery Images/hill.jpg",
      thumbnail: "../../../public/images/Gallery Images/hill.jpg",
    }
    ,
    {
      original: "../../../public/images/Gallery Images/patan.jpg",
      thumbnail: "../../../public/images/Gallery Images/patan.jpg",
    }
    ,
    {
      original: "../../../public/images/Gallery Images/annapurna.jpg",
      thumbnail: "../../../public/images/Gallery Images/annapurna.jpg",
    }


  ];
  return (
    <>
      <Nav />
      <h1 className={styles["gallery--tittle"]}>Explore the Slide Show of our Gallery</h1>
      <ImageGallery additionalClass={styles["gallery--img"]} items={images} slideOnThumbnailOver="true" />
      <Footer />
    </>
  )
}
export default Gallery

