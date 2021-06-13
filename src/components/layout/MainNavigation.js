import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
// converts all the css ppt u write in the css file into an object
//which can then be used in the component below
function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Tosin Logo</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">My Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
 