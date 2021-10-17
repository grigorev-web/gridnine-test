import { useSelector,useDispatch } from "react-redux";

const FilterCompany = ()=>{
    const dispatch = useDispatch();
    let companies = useSelector( state => state.filter.filteredCompany)
    let selected = useSelector( state => state.filter.selectedCompany)
    console.log('selected',selected)

    function checkboxHandler(e){
        dispatch({type:"SET_SELECTED_COMPANY",company: e.target.name})
    }

    console.log('companies',companies)
    return <div className="m-2">
                <h5>Авиакомпании</h5>
                {companies.map( (comp,index) => <div key={index}>
                        <label>
                            <input name={comp} 
                                type="checkbox" 
                                checked={selected.includes(comp)}
                                onChange={checkboxHandler}
                            /> {comp}
                        </label>
                    </div>)}
            </div>
}

export default FilterCompany;