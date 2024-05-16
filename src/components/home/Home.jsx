import Header from '../Header';
import Footer from '../Footer';
import '../../sass/Home.scss'
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import Information from './Information';
import { useState, useEffect } from 'react';
import RegisterForCourse from './RegisterForCourse';
import axios from "axios";


function Home() {
    let navigate = useNavigate();
    let location = useLocation();
    const [student, setStudent] = useState({});
    const [studentId, setStudentId] = useState();
    const [majorId, setMajorId] = useState();
    useEffect(() => {
        let getApiStudentById = async () => {
          let datas = await axios.get(`http://localhost:8080/accounts/student-code/${location.state.studentCode}`);
          setStudent(datas.data.userId);
          setStudentId(datas.data.id);
          setMajorId(datas.data.userId.majorId?.id);
        };
        getApiStudentById();
    }, [location.state?.studentCode]);
    const handleClickRegister = () => {
        navigate('register-for-course',{
            state:{
                studentCode:location.state?.studentCode,
                studentId: studentId,
                majorId: majorId,
                student: student
            }})
    }
    const handleClickInfo = () => {
        navigate('info',{state:{studentCode:location.state?.studentCode}});
    }
    const handleClickCurriculum = () => {
        if (location.state?.studentCode) {
          navigate('curriculum', {
            state: {
              studentCode: location.state.studentCode,
              studentId: studentId,
              majorId: majorId,
            }
          });
        }
    }
    
    const handleClickGrades = () => {
        navigate('grades', {
            state: {
                studentCode: location.state.studentCode,
                studentId: studentId
            }
        })
    }
    return ( 
    <div className="home">
        <div className="container">
            <Header/>
            <div className="features">
                <div className="features-info">
                    <div>Xin chào!</div>
                    <div><b>{student.fullName}</b></div>
                    <div>Giới tính: {student.gender?'Nam':'Nữ'}</div>
                    <div>Mã số sinh viên: {location.state?.studentCode}</div>
                    <div>Trạng thái: {student.status =='GRADUATE'?'Tốt nghiệp':'Đang học'}</div>
                    <button onClick={()=> navigate('/')}>Đăng xuất</button>
                </div>
                <div className='image'>
                    <img src="../../../public/user.png" alt="Ảnh đại diện" style={{width: '100%', height: '100%'}}/>
                </div>
                <div className='menu'>
                    <div className='menu-left'>
                        <a href="" onClick={handleClickInfo}>THÔNG TIN SINH VIÊN</a>
                        <a href="" onClick={handleClickRegister}>ĐĂNG KÝ HỌC PHẦN</a>
                        <a href="" onClick={handleClickCurriculum}>CHƯƠNG TRÌNH KHUNG</a>
                    </div>
                    <div className='menu-right'>
                        <a href="" onClick={handleClickRegister}>XEM LỊCH HỌC</a>
                        <a href="" onClick={handleClickGrades}>XEM ĐIỂM</a>
                        <a href="" onClick={handleClickCurriculum}>TRA CỨU CÔNG NỢ</a>
                    </div>
                </div>
            </div>            
            <Outlet />
            <Footer/>
        </div>
    </div> );
}

export default Home;