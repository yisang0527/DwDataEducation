// Attend.jsx
// MainMenu에 출석부, 주소는 / attend
// App에 path /attend, element Attend
import { Link } from "react-router-dom"
import { useState } from "react";

export default function Attend() {
    const member = [
        { id: 1, name: "Star Platinum", className: "sp" },
        { id: 2, name: "The World", className: "tw" },
        { id: 3, name: "Crazy Diamond", className: "cd" },
        { id: 4, name: "Killer Queen", className: "kq" },
        { id: 5, name: "Gold Experience", className: "ge" },
        { id: 6, name: "King Crimson", className: "kc" },
        { id: 7, name: "Stone Free", className: "sr" },
        { id: 8, name: "Made In Heaven", className: "mih" },
        { id: 9, name: "Hermit Purple", className: "hp" },
        { id: 10, name: "Silver Chariot", className: "sc" },
        { id: 11, name: "Gray Fly", className: "gf" },
        { id: 12, name: "Echoes ACT1", className: "ea" },
        { id: 13, name: "Heaven's Door", className: "hd" },
        { id: 14, name: "Sticky Fingers", className: "sf" },
        { id: 15, name: "Sex Pistols", className: "si" }
    ];

    const users = member;

    const [keyword, setKeyword] = useState("");
    const [ad, setAd] = useState(1);

    const userList = users.filter((u) =>
        [u.name, u.className]
            .join(" ")
            .includes(keyword.toLowerCase())
    ).sort((a, b) => a.name.localeCompare(b.name) * ad);

    return (
        <>
            <Link to="/" className="home">HOME</Link>

            검색: <input type="text" onChange={(e) => setKeyword(e.target.value)} />

            <button onClick={() => setAd(1)}>오름차순</button>
            <button onClick={() => setAd(-1)}>내림차순</button>

            <ul className="mt-4">
                {userList.length > 0 ? (
                    userList.map((u) => (
                        <li key={u.id} className="mb-4">
                            {u.name} / {u.className}
                        </li>
                    ))
                ) : (
                    <li>검색 결과가 없습니다.</li>
                )}
            </ul>
        </>
    );
}