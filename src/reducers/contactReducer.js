let initialState = {
    name : 'Akash Kumar Sinha',
    email : 'mailme.akashsinha@gmail.com',
    address : 'Sector 63',
    city : 'Noida',
    country : 'India',
    number : '8340783611'
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