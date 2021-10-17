import { useDispatch, useSelector } from "react-redux";
import CardFlight from "../CardFlight";



const TableFlights = ()=>{

    const dispatch = useDispatch();
    const transfer = useSelector( state=>state.filter.transfer);
    const price = useSelector( state=>state.filter.price);
    const sort = useSelector( state=> state.filter.sort);
    const selectedCompany = useSelector( state=>state.filter.selectedCompany);

    // получаем перелёты из state
    let flights = useSelector( state => state.data.result.flights);

    // Фильтр перелетов по пересадкам
    flights = flights.filter( elem => {
        // Считаем сегменты в перелете (2,3 или 4)
        let segmentCount = elem.flight.legs[0].segments.length + elem.flight.legs[1].segments.length

        // Фильтр пересадок не выбран, не фильтруем
        if(!transfer.one_transfer && !transfer.no_transfer) return true;
        // Фильтр только без пересадок
        if(!transfer.one_transfer && transfer.no_transfer) return (segmentCount === 2)
        // Фильтр только 1 пересадка
        if(transfer.one_transfer && !transfer.no_transfer) return (segmentCount === 3)
        // Фильтр 1 пересадка и без пересадок
        if(transfer.one_transfer && transfer.no_transfer) return (segmentCount === 3 || segmentCount === 2)

        return true;
    });

    
    // Фильтр по цене
    flights = flights.filter( elem =>{
        let total = +elem.flight.price.total.amount;

        if(!price.min && !price.max) return true;

        if(!price.min && price.max) return (total < price.max);

        if(price.min && !price.max) return (total > price.min);

        if(price.min && price.max) return (total > price.min && total < price.max)

        return true;
    }); 

    // Список отфильтрованных компаний
    const filteredCompany = {};
    flights.map( elem => {
        filteredCompany[elem.flight.carrier.caption] = 1; //складываем уникальные названия компаний
    });

    dispatch({type:"SET_FILTERED_COMPANY", payload: Object.keys(filteredCompany)});



    // Фильтр по компаниям
    if(selectedCompany.length){
        flights = flights.filter(elem =>{
            return selectedCompany.includes(elem.flight.carrier.caption);
        })
    }
    



    // Сортировка по возрастанию цены
    if( sort === 'asc') flights.sort( (a,b) => a.flight.price.total.amount - b.flight.price.total.amount); 
    // Сортировка по убыванию цены
    if( sort === 'desc') flights.sort( (a,b) => b.flight.price.total.amount - a.flight.price.total.amount); 
    // Сортировка по времени перелета
    if( sort === 'time') flights.sort( (a,b) => {
        let durationA = a.flight.legs[0].duration + a.flight.legs[1].duration;
        let durationB = b.flight.legs[0].duration + b.flight.legs[1].duration;
        return durationA - durationB;
    }); 
    console.log(flights)

  
    if(!flights.length) return <div className="text-center m-auto">Нет перелетов по этим параметрам</div>


    // возвращаем список карточек с перелетами
    return <div className="col-8">     
        {flights.map( (flight,index)=>{
            return <CardFlight key={index} flight={flight.flight}/>
        })}      
        </div>
}


export default TableFlights;