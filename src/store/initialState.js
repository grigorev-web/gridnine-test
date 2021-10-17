import data from '../data/flights.json';


const initialState = {
    data: data,
    filter:{
        sort: 'asc',
        transfer: {
            one_transfer: false,
            no_transfer: false
        },
        price:{
            min: '',
            max: ''
        },
        filteredCompany:[],
        selectedCompany:[]
    }
}


export default initialState;