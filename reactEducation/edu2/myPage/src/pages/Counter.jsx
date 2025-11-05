// import { Link } from "react-router-dom";
// import photo from "../images/photo1.png";

import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <>
            {/* <div id="wrap">
                <img src={photo} />
                <Link to="/portfolio" className="button">Portfolio</Link>
            </div> */}

                <h3>현재 숫자: {count}</h3>
                <button onClick={() => setCount(count + 1)}>+ 증가</button>
                <button onClick={() => setCount(count - 1)}>- 증가</button>
        </>
    )
}