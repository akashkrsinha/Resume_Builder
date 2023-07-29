let initialState = {
    school : '',
    city : '',
    country : '',
    degree : '',
    graduationMonth : '',
    graduationYear : '',
    description : ''
}

const educationReducer = (state = initialState, action) =>{
    // console.log(action.payload, "text action");

    if(action.type === 'form3')
    {
        return {
            ...state,
            school: action.payload.school,
            city: action.payload.city,
            country: action.payload.country,
            degree: action.payload.degree,
            graduationMonth: action.payload.graduationMonth,
            graduationYear: action.payload.graduationYear,
            description: action.payload.description
        }
    }
    else{
        return state
    }
}

export default educationReducer;