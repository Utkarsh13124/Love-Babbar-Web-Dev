import './ItemDate.css'

function ItemDate(props){
    const day = props.day;// suppose ye data humne api call se uthaya hi to , isko ab hum place holder ki help se jsx file me use kr lenge.
    const month = props.month;// is tarah se hum reusable codes ka use kr payenge.
    const year = props.year;

    return (<div className='mfg-date'>
        <span>{day}</span>
        <span>{month}</span>
        <span>{year}</span>
    </div>);
}

export default ItemDate;