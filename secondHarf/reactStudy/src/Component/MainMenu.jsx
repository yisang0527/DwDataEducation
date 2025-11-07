// MainMenu.jsx

import { Link } from 'react-router-dom';

export default function MainMenu() {

    return ( // 설명, 실습, 문제 등등 여기에 이동 링크 만들어서 사용할테야
        <div className="nav">
            <Link to="/propstate" className='menu'>props+state</Link>
            <Link to="/boardMake" className='menu'>게시판 작성문제</Link>
            <Link to="/member" className='menu'>멤버</Link>
            <Link to="/store/*" className='menu'>상점 구매</Link>
            <Link to="/schedule" className='menu'>시간표</Link>
            <Link to="/studentname" className='menu'>학생명단</Link>
            <Link to="/simplememo" className='menu'>간단메모</Link>
            <Link to="/boardMng" className='menu'>게시판정보</Link>
            <Link to="/productBuy/*" className='menu'>장바구니</Link>
            <Link to="/effect1" className='menu'>Effect 살펴보기</Link>
        </div>
    );
}