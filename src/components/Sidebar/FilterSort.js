import { useSelector,useDispatch } from "react-redux";


const FilterSort = ()=>{

    const dispatch = useDispatch();
    let sort = useSelector( state=> state.filter.sort)

    function checkHandler(e){
        dispatch({type:"CHANGE_SORT", payload: e.target.id})
    }

    return <div className="m-2">
            <h5>Сортировать</h5>           
            <div>
                <label>
                    <input type="radio" id="asc" checked={sort === "asc"} onChange={checkHandler}/>&nbsp; по возрастанию
                </label>
                </div>          
            <div>
                <label>
                    <input type="radio" id="desc" checked={sort === "desc"}  onChange={checkHandler}/>&nbsp; по убыванию
                </label>
            </div>          
            <div>
                <label>
                    <input type="radio" id="time" checked={sort === "time"}  onChange={checkHandler}/>&nbsp; по времени пути
                </label>
            </div>
            </div>

}

export default FilterSort;