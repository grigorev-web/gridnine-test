import { useSelector,useDispatch } from "react-redux";


const FilterPrice = ()=>{

    const dispatch = useDispatch();
    const price = useSelector( state=> state.filter.price);

    function inputHandler(e){

        if( e.target.value && !isNumeric(e.target.value)){
            alert("Допустимы только числовые значения");
            return;
        }
        dispatch({type:"SET_FILTER_PRICE", name: e.target.name, value: e.target.value})
    }

    function isNumeric(value) {
        return /^-?\d+$/.test(value);
    }
    return <div className="m-2">
                <h5>Цена</h5>
                <label>От &nbsp;
                    <input type="text" 
                           value={price.min}
                           name="min"
                           onChange={inputHandler}
                    />
                </label>
                <label className="mt-1">До &nbsp;
                    <input type="text" 
                           value={price.max}
                           name="max"
                           onChange={inputHandler}
                    />
                </label>
            </div>
}

export default FilterPrice;