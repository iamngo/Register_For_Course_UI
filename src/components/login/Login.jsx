import { useEffect, useState } from 'react';
import "../../sass/Login.scss"
import Header from '../Header';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';

function Login() {
    
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();

    return ( 
    <div className="container-login">
        {/* <div className="header"></div> */}
        <Header/>
        <div className="body">
            <div className="form-login">
                <div className="mssv">
                    <label htmlFor="mssv">Mã sinh viên</label>
                    <input id="mssv" type="text" placeholder='Nhập mã sinh viên'/>
                </div>
                <div className="password">
                    <label htmlFor="password">Mật khẩu</label>
                    <input id="password" type="password" placeholder='Nhập mật khẩu'/>
                </div>
                <div className="btn">
                    <button onClick={()=>navigate('/home')}>ĐĂNG NHẬP</button>
                </div>
            </div>
        </div>
        <Footer/>
        {/* <div className="footer">
            <span>TRƯỜNG ĐẠI HỌC CÔNG NGHIỆP TP.HỒ CHÍ MINH</span>
            <span>Địa chỉ: Số 12 Nguyễn Văn Bảo, Phường 4, Quận Gò Vấp, TP.Hồ Chí Minh</span>
            <span>Điện thoại: 0283 8940 390</span>
            <span>Fax: 0283 9940 954</span>
            <span>Email: dhcn@iuh.edu.vn</span>
        </div> */}
  </div> );
}

export default Login;