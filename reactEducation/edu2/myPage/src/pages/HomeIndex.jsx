import { Link } from "react-router-dom";
import photo from "../images/photo1.png";

export default function HomeIndex() {

    return (
        <>
            <div id="wrap">
                <img src={photo} />
                <Link to="/portfolio" className="button">Portfolio</Link>
            </div>
        </>
    )
}