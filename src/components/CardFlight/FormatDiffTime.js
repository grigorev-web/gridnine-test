

export default function FormatDiffTime(props){

    let arrival = new Date(props.arrival);
    let departure = new Date(props.departure);

    let diff = arrival - departure;

    let hours = Math.floor(diff / (1000*60*60));

    let minutes = (diff % (1000*60*60)) / (1000*60);


    return <div>&#9674; {hours} ч {minutes} мин</div>;
}