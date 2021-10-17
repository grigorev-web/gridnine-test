

export default function FormatDateTime(props){

    const monthNames = {
        0: 'янв',
        1: 'фев',
        2: 'мар',
        3: 'апр',
        4: 'май',
        5: 'июн',
        6: 'июл',
        7: 'авг',
        8: 'сен',
        9: 'окт',
        10: 'ноя',
        11: 'дек',
    }

    const dayNames = {
        0:'вс',
        1:'пн',
        2:'вт',
        3:'ср',
        4:'чт',
        5:'пт',
        6:'сб',
    }

    let date = new Date(props.date);

    let hours = ('0' + date.getHours()).slice(-2);
    let minutes = ('0' + date.getMinutes()).slice(-2);
    let dayMonth = date.getDate();
    let month = monthNames[date.getMonth()];
    let dayWeek = dayNames[date.getDay()];
    
    return <div>
        <span>{hours}:{minutes} </span>
        <span className="text-primary" style={{fontSize:'16px'}}>
            {dayMonth} {month}. {dayWeek}
        </span>
    </div>
}