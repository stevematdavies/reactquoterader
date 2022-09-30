import classes from "./Pages.module.css"
import {Link} from "react-router-dom";

const PageNotFound = () => <div className={classes.page404}>
    <header>404</header>
    <p>Page not found!</p>
    <Link to={"/quotes"} className={classes.page404Link}>
        Head home and try again...
    </Link>
</div>

export default PageNotFound;
