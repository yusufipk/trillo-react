import sprite from "../img/sprite.svg";

function Nav() {
  return (
    <nav className="sidebar">
      <ul className="sidebar__side-nav">
        <li className="sidebar__side-nav--item sidebar__side-nav--item--active">
          <a href="#" className="sidebar__side-nav--link">
            <svg className="sidebar__side-nav--icon">
              <use href={`${sprite}#icon-home`}></use>
            </svg>
            <span>Hotel</span>
          </a>
        </li>

        <li className="sidebar__side-nav--item">
          <a href="#" className="sidebar__side-nav--link">
            <svg className="sidebar__side-nav--icon">
              <use href={`${sprite}#icon-aircraft-take-off`}></use>
            </svg>
            <span>Flight</span>
          </a>
        </li>

        <li className="sidebar__side-nav--item">
          <a href="#" className="sidebar__side-nav--link">
            <svg className="sidebar__side-nav--icon">
              <use href={`${sprite}#icon-key`}></use>
            </svg>
            <span>Car rental</span>
          </a>
        </li>

        <li className="sidebar__side-nav--item">
          <a href="#" className="sidebar__side-nav--link">
            <svg className="sidebar__side-nav--icon">
              <use href={`${sprite}#icon-map`}></use>
            </svg>
            <span>Tours</span>
          </a>
        </li>
      </ul>
      <div className="legal">&copy; 2017 by trillo. All rights reserved.</div>
    </nav>
  );
}

export default Nav;
