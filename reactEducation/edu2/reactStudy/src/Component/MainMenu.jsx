// MainMenu.jsx

import { Link } from 'react-router-dom';

export default function MainMenu() {

    return ( // 설명, 실습, 문제 등등 여기에 이동 링크 만들어서 사용할테야
        <div className="nav">
            <Link to="/propstate">props+state</Link>
            <Link to="/boardMake">게시판 작성문제</Link>
            <Link to="/member">멤버</Link>
            <Link to="/store">상점 구매</Link>
        </div>
    );
}