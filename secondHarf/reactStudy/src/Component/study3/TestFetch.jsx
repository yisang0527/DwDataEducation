// TestFetch.jsx
import { useEffect, useState } from "react";

export default function TestFetch() {
    const [users, setUsers] = useState([]);
    useEffect(
        () => {
            fetch("https://jsonplaceholder.typicode.com/users")
                .then((response) => response.json())
                .then((data) => setUsers);

        }, []
    )

    return (
        <>

        </>
    );
}