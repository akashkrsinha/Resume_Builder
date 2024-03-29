let initialState = {
    name : '',
    email : '',
    address : '',
    city : '',
    country : '',
    number : ''
}

const contactReducer = (state = initialState, action) =>{
    // console.log(action.payload, "text action");

    if(action.type === 'form')
    {
        return {
            ...state,
            name: action.payload.name,
            email: action.payload.email,
            address: action.payload.address,
            city: action.payload.city,
            country: action.payload.country,
            number: action.payload.number
        }
    }
    else{
        return state
    }
}

export default contactReducer;