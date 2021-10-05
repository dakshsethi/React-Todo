const CurrentInfo = () => {
    return (
        <div className="date__area">
            <div class="date">
                <div className="date_dt">{ getDate() }</div>
                <div className="month_year">
                    <span style={{ color: '#4d4c4c' }}>{ getmonth() }</span>
                    <br />
                    <span>{ getYear() }</span>
                </div>
            </div>
            <div class="day">{ getDay() }</div>
        </div>
    );
}

const getDay = () => {
    let objToday = new Date();
	let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	let dayOfWeek = weekday[objToday.getDay()];
    return dayOfWeek;
}

const getDate = () => {
    let objToday = new Date();
	let dayOfMonth = objToday.getDate(); //( objToday.getDate() < 10) ? '0' + objToday.getDate() : objToday.getDate();
    return dayOfMonth;
}

const getmonth = () => {
    let objToday = new Date();
	let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	let curMonth = months[objToday.getMonth()];
    return curMonth;
}

const getYear = () => {
    let objToday = new Date();
    let curYear = objToday.getFullYear();
    return curYear;
}

export default CurrentInfo;