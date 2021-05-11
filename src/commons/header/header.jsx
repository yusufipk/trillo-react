import logo from "../img/logo.png";
import sprite from "../img/sprite.svg";
import user from "../img/user.jpg";
import "font-awesome/css/font-awesome.min.css";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="trillo logo" className="header__logo" />

      <form action="#" className="header__search">
        <input
          type="text"
          className="header__search--input"
          placeholder="Search hotels"
        />
        <button className="header__search--button">
          <svg className="header__search--icon">
            <use href={`${sprite}#icon-magnifying-glass`}></use>
          </svg>
        </button>
      </form>
      <nav className="header__user-nav">
        <div className="header__user-nav--icon-box">
          <svg className="header__user-nav--icon">
            <use href={`${sprite}#icon-bookmark`}></use>
          </svg>
          <span className="header__user-nav--notification">7</span>
        </div>
        <div className="header__user-nav--icon-box">
          <svg className="header__user-nav--icon">
            <use href={`${sprite}#icon-chat`}></use>
          </svg>
          <span className="header__user-nav--notification">13</span>
        </div>
        <div className="header__user-nav--user">
          <img src={user} alt="User" className="header__user-nav--user-photo" />
          <span className="header__user-nav--user-name">Yusuf</span>
          <ul className="header__hover-list">
            <li className="header__hover-list-item">
              <a href="#" className="header__hover-list-item-link">
                <i class="fa fa-user"></i> My Profile
              </a>
            </li>
            <li className="header__hover-list-item">
              <a
                href="https://yusufipek.me"
                target="_blank"
                rel="noreferrer"
                className="header__hover-list-item-link"
              >
                <i class="fa fa-globe"></i> My Website
              </a>
            </li>
            <li className="header__hover-list-item">
              <a
                href="https://github.com/yusufipk"
                target="_blank"
                rel="noreferrer"
                className="header__hover-list-item-link"
              >
                <i class="fa fa-github"></i> Github
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
