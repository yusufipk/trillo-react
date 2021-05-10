import hotel1 from "../img/hotel-1.jpg";
import hotel2 from "../img/hotel-2.jpg";
import hotel3 from "../img/hotel-3.jpg";
import sprite from "../img/sprite.svg";

function HotelView() {
  return (
    <main className="hotel-view">
      <div className="gallery">
        <figure className="gallery__item">
          <img src={hotel1} alt="Hotel" className="gallery__photo" />
        </figure>
        <figure className="gallery__item">
          <img src={hotel2} alt="Hotel" className="gallery__photo" />
        </figure>
        <figure className="gallery__item">
          <img src={hotel3} alt="Hotel" className="gallery__photo" />
        </figure>
      </div>

      <div className="overview">
        <h1 className="heading-main">Hotel Las Palmas</h1>

        <div className="overview__stars">
          <svg className="overview__icon-star">
            <use href={`${sprite}#icon-star`}></use>
          </svg>
          <svg className="overview__icon-star">
            <use href={`${sprite}#icon-star`}></use>
          </svg>
          <svg className="overview__icon-star">
            <use href={`${sprite}#icon-star`}></use>
          </svg>
          <svg className="overview__icon-star">
            <use href={`${sprite}#icon-star`}></use>
          </svg>
          <svg className="overview__icon-star">
            <use href={`${sprite}#icon-star`}></use>
          </svg>
        </div>

        <div className="overview__location">
          <svg className="overview__icon-location">
            <use href={`${sprite}#icon-location-pin`}></use>
          </svg>
          <button className="btn-inline">Albufeira, Portugal</button>
        </div>

        <div className="overview__rating">
          <div className="overview__rating-average">8.6</div>
          <div className="overview__rating-count">429 votes</div>
        </div>
      </div>
    </main>
  );
}

export default HotelView;
