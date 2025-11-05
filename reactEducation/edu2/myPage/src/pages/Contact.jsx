import { useState } from "react";

export default function Contact() {
    const [name, setName] = useState("");

    return (
        <>
            <div id="wrap">
                <input type="text" onChange={(e) => setName(e.target.value)} />

                <p>君の名前わ... {name}</p>
            </div>
        </>
    );
}
