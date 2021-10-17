import { useSelector,useDispatch } from "react-redux";


const FilterTransfer = ()=>{

    const dispatch = useDispatch();
    let transfer = useSelector( state=>state.filter.transfer)

    function checkboxHandler(e){
        dispatch({type:"CHANGE_TRANSFER_CHECKBOX",payload: e.target.name})
    }

    return <div className="m-2">
                <h5>Фильтровать</h5>
                <div>
                    <label>
                        <input name="one_transfer" 
                               type="checkbox" 
                               checked={transfer.one_transfer}
                               onChange={checkboxHandler}
                        /> 1 пересадка
                    </label>
                </div>
                <div>
                    <label>
                        <input name="no_transfer" 
                               type="checkbox"  
                               checked={transfer.no_transfer}
                               onChange={checkboxHandler}
                        /> без пересадок
                    </label>
                </div>
            </div>
}

export default FilterTransfer;