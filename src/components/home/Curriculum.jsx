import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";

function Curriculum() {
    let location = useLocation();
    const [curriculumData, setCurriculumData] = useState([]);
    useEffect(() => {
        let getCurriculumById = async () => {
          let datas = await axios.get(`http://localhost:8080/curricular/${location.state.studentId}/${location.state.majorId}`);
          datas.data.sort((a,b)=> a.semester - b.semester);
          console.log(datas.data);
          setCurriculumData(datas.data);
        };
        getCurriculumById();
    }, [location.state]);

    return ( 
    <div className="curriculum">
        <h3>Thông tin chương trình khung</h3>
        <div className="curriculum-table">
            <table>
                <thead>
                    <tr>
                        <th>Mã môn học</th>
                        <th>Tên môn học</th>
                        <th>Mã học phần</th>
                        <th>Học phần tiên quyết</th>
                        <th>Số tín chỉ</th>
                        <th>Số tiết lý thuyết</th>
                        <th>Số tiết thực hành</th>
                        <th>Đạt</th>
                    </tr>
                </thead>
                <tbody>
                {curriculumData.map((item, index) => {
              // Nếu semester của môn học khác semester của môn học trước đó
              if (index === 0 || item.semester !== curriculumData[index - 1].semester) {
                return (
                  <tr key={index}>
                    <td colSpan="8" style={{ textAlign: 'center', backgroundColor: 'rgb(37 173 172)', color: '#fff' }}>HỌC KÌ {item.semester}</td>
                  </tr>
                );
              }
              // Nếu semester của môn học giống semester của môn học trước đó
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.courseCode}</td>
                  <td>{item.hasPrerequisite}</td>
                  <td>{item.credits}</td>
                  <td>{item.number_of_theory_classes}</td>
                  <td>{item.number_of_practice_classes}</td>
                  <td>{item.grades >=1 ? "ok" : ""}</td>
                </tr>
              );
            })}
          </tbody>
            </table>
        </div>
    </div> );
}

export default Curriculum;