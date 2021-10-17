const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_SORT":
      return {...state,
              filter: {
                ...state.filter,
                sort: action.payload
              }
            }
      break;

    case "CHANGE_TRANSFER_CHECKBOX":
      return {...state,
              filter: {
                ...state.filter,
                transfer: {...state.filter.transfer,
                          [action.payload]: !state.filter.transfer[action.payload]             
                },
                selectedCompany:[],
              }
            }
      break;
  
    case "SET_FILTER_PRICE":
      return {...state,
              filter: {
                ...state.filter,
                price: {...state.filter.price,
                          [action.name]: action.value ? +action.value : ''            
                },
                selectedCompany:[],
              }
            }
      break;
    
    case "SET_FILTERED_COMPANY":
      return {...state,
              filter: {
                ...state.filter,
                filteredCompany: action.payload,
              }
            }
        break;
    case "SET_SELECTED_COMPANY":
      let prev = state.filter.selectedCompany;
      let selectedCompany = prev.includes(action.company) ? prev.filter( elem => elem !== action.company) : [...prev,action.company];
      return {...state,
              filter: {
                ...state.filter,
                selectedCompany: selectedCompany,
              }
            }
        break;     
    default:
      return state;
      break;
  }
};

export default reducer;
