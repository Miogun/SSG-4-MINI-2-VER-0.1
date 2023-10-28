import { Link, Outlet } from "react-router-dom";
import './Header.css';

const Header_login = () => {
  
    const id_receive = "사용자 이름"// user['name'] 또는 request.form.get('username') 또는 session['id'] = id_receive

    return(
        <>
        <header>          
          <Link to={'/'}><h2>한걸음 대여소</h2></Link>
          <Link to='/'> {id_receive} </Link>
          <Link to='/board'> 공지사항 </Link>
          <Link to='/toyrent'> 장난감 대여소 </Link>
          <Link to='/'> 로그아웃 </Link>
          <Link to='/'> 회원탈퇴 </Link>

        </header>
        <main>
          <Outlet />
        </main>

        </>
    );
}

export default Header_login;