import Header from '../Header';
import Footer from '../Footer';
import '../../sass/Home.scss'
import { useNavigate } from 'react-router-dom';

function Home() {
    let navigate = useNavigate();

    return ( 
    <div className="home">
        <div className="container">
            <Header/>
            <div className="features">
                <div className="features-info">
                    <div>Xin chào!</div>
                    <div><b>Lê Thị Kim Ngân</b></div>
                    <div>Giới tính: Nữ</div>
                    <div>Mã số sinh viên: 20041421</div>
                    <div>Trạng thái: Đang học</div>
                    <button onClick={()=> navigate('/')}>Đăng xuất</button>
                </div>
                <div className='image'>
                    <img src="" alt="Ảnh đại diện" />
                </div>
                <div className='menu'>
                    <a href="">THÔNG TIN SINH VIÊN</a>
                    <a href="">ĐĂNG KÝ HỌC PHẦN</a>
                    <a href="">CHƯƠNG TRÌNH KHUNG</a>
                </div>
            </div>
            <div className="information">
                <h3>THÔNG TIN SINH VIÊN</h3>
                <div className='info-detail'>
                    <div className='info-detail-left'>
                        <div>Khóa: <b>2020-2021</b></div>
                        <div>Bậc đào tạo: <b>Đại học</b></div>
                        <div>Ngành: <b>Kỹ thuật phần mềm</b></div>
                        <div>Khoa: <b>Khoa Công nghệ thông tin</b></div>
                    </div>
                    <div className='info-detail-right'>
                        <div>Lớp: <b>Đại học Kỹ thuật phần mềm 16A</b></div>
                        <div>Loại hình đào tạo: <b>Chính quy</b></div>
                        <div>Chuyên ngành: <b>Kỹ thuật phần mềm</b></div>
                        <div>Cơ sở: <b>Cơ sở 1 (Thành phố Hồ Chí Minh)</b></div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    </div> );
}

export default Home;