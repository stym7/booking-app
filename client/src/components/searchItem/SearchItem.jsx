import { Link } from 'react-router-dom'
import './searchItem.scss'

const SearchItem = ({ item }) => {

    const { name, distance, desc, photos, cheapestPrice, rating } = item
    return (
        <div className="searchItem">
            <img
                src={photos[0]}
                alt=""
                className="siImg"
            />
            <div className="siDesc">
                <h1 className="siTitle">{name}</h1>
                <span className="siDistance">{distance}</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubtitle">
                    Studio Apartment with Air conditioning
                </span>
                <span className="siFeatures">
                    {desc}
                </span>
                <span className="siCancelOp">Free cancellation </span>
                <span className="siCancelOpSubtitle">
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className="siDetails">
                {rating &&
                    <div className="siRating">
                        <span>Excellent</span>
                        <button>{rating}</button>
                    </div>
                }
                <div className="siDetailTexts">
                    <span className="siPrice">${cheapestPrice}</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <Link to={`/hotels/${item._id}`}>
                        <button className="siCheckButton">See availability</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SearchItem