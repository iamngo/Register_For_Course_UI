function RegisterForCourse() {
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
                <input type="radio" id="new" name="learning" value="learnNew"/>
                <label htmlFor="new">HỌC MỚI</label>
                <input type="radio" id="again" name="learning" value="learnAgain"/>
                <label htmlFor="again">HỌC LẠI</label>
                <input type="radio" id="improve" name="learning" value="learnImprove"/>
                <label htmlFor="improve">HỌC CẢI THIỆN</label>
            </div>
        </div>
    </div> );
}

export default RegisterForCourse;