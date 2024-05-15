import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";
import React from 'react';
import { FaCircleXmark, FaCircleCheck } from "react-icons/fa6";

function RegisterForCourse() {
    let location = useLocation();
    const [listCourse, setListCourse] = useState([]);
    const [listCourseSection, setListCourseSection] = useState([]);
    const [selectedCourseId, setSelectedCourseId] = useState(null);
    const [courseSectionDetail, setCourseSectionDetail] = useState([]);
    const [selectedSectionId, setSelectedSectionId] = useState(null);
    useEffect(() => {
        let getListCourseById = async () => {
          let datas = await axios.get(`http://localhost:8080/courses/${location.state.studentId}/${location.state.majorId}`);
          setListCourse(datas.data);
        };
        getListCourseById();
    }, [location.state]);

    let handleClickCourse = async (majorId) => {
        let datas = await axios.get(`http://localhost:8080/course-sections/${majorId}`)
        setListCourseSection(datas.data);
        setSelectedCourseId(majorId);
    }

    let handleClickCourseSection = async (sectionId) => {
        let datas = await axios.get(`http://localhost:8080/course-sections/detail-course-section/${sectionId}`)
        console.log(datas.data);
        setCourseSectionDetail(datas.data);
        setSelectedSectionId(sectionId);
    }

    return ( 
    <div className="register">
        <h3>ĐĂNG KÝ HỌC PHẦN</h3>
        <div className="choose-register">
            <div className="register-period">
                <label htmlFor="register">Đợt đăng ký:</label>
                <select name="register-period" id="register">
                    <option value="53">HK3(2024-2025)</option>
                    <option value="52">HK2(2024-2025)</option>
                    <option value="51">HK1(2024-2025)</option>
                    <option value="43">HK3(2023-2024)</option>
                    <option value="42">HK2(2023-2024)</option>
                    <option value="41">HK1(2023-2024)</option>
                    <option value="33">HK3(2022-2023)</option>
                    <option value="32">HK2(2022-2023)</option>
                    <option value="31">HK1(2022-2023)</option>
                    <option value="23">HK3(2021-2022)</option>
                    <option value="22">HK2(2021-2022)</option>
                    <option value="21">HK1(2021-2022)</option>
                    <option value="13">HK3(2020-2021)</option>
                    <option value="12">HK2(2020-2021)</option>
                    <option value="11">HK1(2020-2021)</option>
                </select>
            </div>
            <div className="learning">
                <input type="radio" id="new" name="learning" value="learnNew" checked/>
                <label htmlFor="new">HỌC MỚI</label>
                <input type="radio" id="again" name="learning" value="learnAgain"/>
                <label htmlFor="again">HỌC LẠI</label>
                <input type="radio" id="improve" name="learning" value="learnImprove"/>
                <label htmlFor="improve">HỌC CẢI THIỆN</label>
            </div>
        </div>
        <div className="list-course">
            <h4>MÔN HỌC PHẦN ĐANG CHỜ ĐĂNG KÝ</h4>
            <div className="curriculum-table">
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã môn học</th>
                            <th>Mã học phần</th>
                            <th>Tên môn học</th>
                            <th>Số tín chỉ</th>
                            <th>Bắt buộc</th>
                            <th>Học phần tiên quyết</th>
                        </tr>
                    </thead>
                    <tbody>
                            {listCourse.map((item, index) => {
                                return (
                                        <tr key={index} onClick={()=>handleClickCourse(item.id)} style={{ backgroundColor: selectedCourseId === item.id ? '#fff6b0' : '' }}>
                                            <td>{index+1}</td>
                                            <td>{item.id}</td>
                                            <td>{item.courseCode}</td>
                                            <td>{item.name}</td>
                                            <td>{item.credits}</td>
                                            <td>{item.typeCourse == 1 ? <FaCircleCheck   style={{color: 'green'}}/>:  <FaCircleXmark style={{color: 'red'}}/>}</td>
                                            <td>{item.hasPrerequisite}</td>
                                        </tr>
                                );
                            })}
                        </tbody>
                </table>
            </div>
        </div>

        <div className="list-course-section">
            <h4>LỚP HỌC PHẦN CHỜ ĐĂNG KÝ</h4>
            <div className="curriculum-table">
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã lớp học phần</th>
                            <th>Tên lớp học phần</th>
                            <th>Lớp dự kiến</th>
                            <th>Sĩ số tối đa</th>
                            <th>Đã đăng ký</th>
                            <th>Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody>
                            {listCourseSection.map((item, index) => {
                                return (
                                        <tr key={index} onClick={()=> handleClickCourseSection(item.id)} style={{ backgroundColor: selectedSectionId === item.id ? '#fff6b0' : '' }}>
                                            <td>{index+1}</td>
                                            <td>{item.sectionCode}</td>
                                            <td>{item.name}</td>
                                            <td>{item.className}</td>
                                            <td>{item.maxQuantity}</td>
                                            <td>{item.registeredQuantity}</td>
                                            <td>{item.status==true? "Đã khóa":"Chờ sinh viên đăng ký"}</td>
                                        </tr>
                                );
                            })}
                        </tbody>
                </table>
            </div>
        </div>

        <div className="course-section-detail">
            <h4>CHI TIẾT LỚP HỌC PHẦN</h4>
            <div className="curriculum-table">
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Lịch học</th>
                            <th>Phòng học</th>
                            <th>Giảng viên</th>
                        </tr>
                    </thead>
                    <tbody>
                            {courseSectionDetail.map((item, index) => {
                                return (
                                        <tr key={index}>
                                            <td>{index+1}</td>
                                            <td>{`T${item.dayOfWeek} (${item.shift})`}</td>
                                            <td>{item.buildings}</td>
                                            <td>{item.lectures}</td>
                                        </tr>
                                );
                            })}
                        </tbody>
                </table>
            </div>
        </div>
        <button className="btn-register">Đăng ký môn học</button>
    </div> );
}

export default RegisterForCourse;