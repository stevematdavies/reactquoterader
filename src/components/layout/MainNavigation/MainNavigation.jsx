import classes from "./MainNavigation.module.css";
import {NavLink} from "react-router-dom";


const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                Great Quotes
            </div>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink to="/quotes" className={navData => navData.isActive ? classes.active : ''}>All quotes</NavLink>
                    </li>

                    <li>
                        <NavLink to="/quotes/new-quote" className={navData => navData.isActive ? classes.active : '' }>Add a quote</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;