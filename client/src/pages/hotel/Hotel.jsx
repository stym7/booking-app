import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import './hotel.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import { useContext, useState } from 'react';
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch'
import { SearchContext } from '../../context/SearchContext';

const Hotel = () => {

  const { id } = useParams()

  const {dates} = useContext(SearchContext)

  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)

  const { data, loading, error } = useFetch(`/hotels/find/${id}`)

  const { name, distance, desc, photos, cheapestPrice, rating } = data

  const handleOpen = (i) => {
    setSlideNumber(i)
    setOpen(true)
  }

  const handleMove = (direction) => {
    let newSlideNumber
    if (direction === 'l') {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
    }
    else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
    }
    setSlideNumber(newSlideNumber)
  }

  console.log(dates)

  return (
    <>
      <Navbar />
      <Header type='list' />
      <div className="hotelContainer">
        {open &&
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        }
        {loading ? "Loading..."
          :
          <div className="hotelWrapper">
            <button className="bookNow">Reserve or Book Now!</button>
            <h1 className="hotelTitle">{name}</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>Elton St 125 New york</span>
            </div>
            <span className="hotelDistance">
              Excellent location – {distance}m from center
            </span>
            <span className="hotelPriceHighlight">
              Book a stay over ${cheapestPrice} at this property and get a free airport taxi
            </span>
            <div className="hotelImages">
              {photos?.map((photo, i) => (
                <div className='hotelImgWrapper' key={i}>
                  <img onClick={() => handleOpen(i)} src={photo} alt='' className='hotelImg' />
                </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">{name}</h1>
                <p className="hotelDesc">
                  {desc}
                </p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for a 9-night stay!</h1>
                <span>
                  Located in the real heart of Krakow, this property has an
                  excellent location score of 9.8!
                </span>
                <h2>
                  <b>${cheapestPrice}</b> (9 nights)
                </h2>
                <button>Reserve or Book Now!</button>
              </div>
            </div>

          </div>}
        <MailList />
        <Footer />
      </div>
    </>
  )
}

export default Hotel